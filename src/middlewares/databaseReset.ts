import { CharacterModel } from "../models/character"
import { Response } from "express";
/**
 * @description: Resets the database if the last Marvel character was added in a different day than today.
 * @param res: the response object
 * @param next: the next middleware function to call
 * @returns: If the last Marvel character was added today, calls the next middleware function. Otherwise, drops the CharacterModel collection.
*/
export const resetDatabase = async (_: any, res: Response, next: any) => {
  if(process.env.NODE_ENV === "test") {
    next()
  } else {
    const today = new Date();
    const lastMarvelCharacter = await CharacterModel.findOne().sort({ _id: -1 });
    const actualDate = today.toISOString().slice(0, 10);;
    if (lastMarvelCharacter) {
      const lastChangeDate = lastMarvelCharacter._id.getTimestamp().toISOString().slice(0, 10);
      if (actualDate === lastChangeDate) {
        next()
      } else {
        try { 
          await CharacterModel.collection.drop()
        } catch (err) {
          return res.status(401).send({message: "Collection couldn't be deleted."})
        }
      }
    }
    else {
      next()
    }
  }
}