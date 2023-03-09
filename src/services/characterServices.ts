import { CharacterRepositorie } from "../repositories/characterRepositorie"

export const getByNameService = async(name: string) => {
  try {
    const repositorie = new CharacterRepositorie()
    const character = await repositorie.getByName(name)
    return character
  }
  catch (error) {
    return error as string
  }
}

export const getByIdService = async(id: number) => {
  try {
    const repositorie = new CharacterRepositorie()
    const character = await repositorie.getById(id)
    return character
  }
  catch (error) {
    return error as string
  }
}