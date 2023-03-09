import { CharacterRepositorie } from "../repositories/characterRepositorie"

/**
@description: Gets a character by name from the CharacterRepositorie class.
@param: name - the name of the character to retrieve
@return: the character object if found, or an error message string if not
*/
export const getByNameService = async(name: string) => {
  try {
    const repositorie = new CharacterRepositorie()
    const character = await repositorie.getByName(name)
    return character
  }
  catch (error) {
    return error
  }
}

/**
 * @description Gets a character by id from the CharacterRepositorie class.
 * @param id - the id of the character to retrieve
 * @return the character object if found, or an error if not
 */
export const getByIdService = async(id: number) => {
  try {
    const repositorie = new CharacterRepositorie()
    const character = await repositorie.getById(id)
    return character
  }
  catch (error) {
    return error
  }
}