import { CharacterModel } from "../models/character";
//
export interface CharacterRepositorieInterface {
  getById(id: number): Promise<any>;
  getByName(name: string): Promise<any>;
  saveCharacters(characters: any[]): Promise<any>;
}

// En el repositorio solo llamaremos a las funciones que acceden a la base de datos
export class CharacterRepositorie {
  //
  public async getByName(name: string) {
    const character = await CharacterModel.findOne({ name: name })
    return character
  }
  //
  public async getById(id: number) {
    const character = await CharacterModel.findOne({ id: id })
    return character
  }
  //
  public async saveCharacters(characters: any[]) {
    try {
      characters.forEach(function (character) {
        let marvelCharacter = new CharacterModel({
          id: character.id,
          name: character.name,
          description: character.description,
          modified: character.modified,
          resourceURI: character.resourceURI,
          urls: character.urls,
          thumbnail: character.thumbnail,
          comics: character.comics,
          stories: character.stories,
          events: character.events,
          series: character.series,
        });
        marvelCharacter.save()
      })
      return 0
    } catch(error) {
      return error as string
    }
  }
}