import { CharacterModel } from "../models/character";

/**
 * @interface CharacterRepositorieInterface
 * @description Interface for the CharacterRepositorie class, defining its methods.
 */
export interface CharacterRepositorieInterface {
  getById(id: number): Promise<any>;
  getByName(name: string): Promise<any>;
  saveCharacters(characters: any[]): Promise<any>;
}

/**
 * @class CharacterRepositorie
 * @description Repository class for interacting with the CharacterModel class.
 */
export class CharacterRepositorie {
  /**
   * @method getByName
   * @description Retrieves a character by name from the CharacterModel class.
   * @param name - the name of the character to retrieve
   * @return the character object if found, or null if not
   */
  public async getByName(name: string) {
    const character = await CharacterModel.findOne({ name: name })
    return character
  }

    /**
   * @method getById
   * @description Retrieves a character by id from the CharacterModel class.
   * @param id - the id of the character to retrieve
   * @return the character object if found, or null if not
   */
  public async getById(id: number) {
    const character = await CharacterModel.findOne({ id: id })
    return character
  }
  /**
   * @method saveCharacters
   * @description Saves an array of characters to the CharacterModel class.
   * @param characters - an array of characters to save
   * @return 0 if successful, or an error message string if not
   */
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