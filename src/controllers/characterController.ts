import { getByIdService } from "../services/characterServices"
import { getByNameService } from "../services/characterServices"

export const getByName = async (req: any, res: any) => {
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


export const getById = async (req: any, res: any) => {
  const characterId = req.params.id as number;
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
