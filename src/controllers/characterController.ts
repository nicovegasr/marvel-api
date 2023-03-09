import { getByIdService, getByNameService } from "../services/characterServices"
import { Request, Response } from "express";
/**
 * @description: Retrieves a character by name from the database through the getByNameService function and sends it as a response.
 * @param: req - the request object
 * @param: res - the response object
 * @return: returns the character object with a 200 status code if found or a 404 status code with an error message if not
*/
export const getByName = async (req: Request, res: Response) => {
  const characterName = req.params.name as string;
  try {
    const character = await getByNameService(characterName);
    if (character != null) {
      res.status(200).send(character)
    } else {
      res.status(404).send({message: `There is no character with name: ${characterName}`})
    }  }
  catch(error) {
    res.status(404).send("Not found")
  }
}

/**
 * @description: Retrieves a character by its ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns: The character object with the specified ID and a 200 status or a 404 error if not found.
*/
export const getById = async (req: Request, res: Response) => {
  const characterId = parseInt(req.params.id, 10);
  if (Number.isNaN(characterId)) {
    res.status(501).send({message: "Id must be a number"})
  } 
  else {
    try {
      const character = await getByIdService(characterId);
      if (character != null) {
        res.status(200).send(character)
      } else {
        res.status(404).send({message: `There is no character with id: ${characterId}`})
      }
    }
    catch(error) {
      res.status(501).send({error: error as string})
    }
  }
}
