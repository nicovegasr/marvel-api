import axios from "axios"
import { CharacterModel } from "../models/character"
import { CharacterRepositorie } from "../repositories/characterRepositorie";
import { Response } from "express";
const md5 = require('md5');

/**
@description: Checks if there are characters in the database. If there are none, retrieves data from the Marvel API
and saves it to the database using the CharacterRepositorie class.
@param res: the response object
@param next: the next middleware function
@returns: sends a response indicating whether data was successfully stored or not
*/
export const checkDatabase = async (_: any, res: Response, next: any) => {
  const count = await CharacterModel.count()
  if (count > 0) {
    next()
  } else {
    try {
      const url = `http://gateway.marvel.com/v1/public/characters`
      const publicApiKey = process.env.PUBLIC_API_KEY as string
      const privateApiKey = process.env.PRIVATE_API_KEY as string
      const ts = new Date().getTime();
      const stringToHash = ts + privateApiKey + publicApiKey 
      const hash = md5(stringToHash)
      const params = {
        ts: ts,
        apikey: publicApiKey,
        hash: hash
      }
      const response = await axios.get(url, {params})
      const data = response.data.data.results
      const repositorie = new CharacterRepositorie()
      try {
        repositorie.saveCharacters(data)
      }
      catch(error) {
        res.status(204).send("Data couldn`t be stored.")
      }
      res.status(200).send("Data stored.");
    } 
    catch (err) {
      res.status(401).send(err as string);
    }
  }
}