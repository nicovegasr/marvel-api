import { CharacterImage } from "./complementary/characterImage";
import { CharacterUrls } from "./complementary/characterUrls";
import { CharacterComics } from "./complementary/characterComics";
import { CharacterStories } from "./complementary/characterStories"; 
import { CharacterEvents } from "./complementary/characterEvents";
import { CharacterSeries } from "./complementary/characterSeries";

export interface Character extends CharacterImage, CharacterUrls, CharacterComics, CharacterStories, CharacterEvents, CharacterSeries {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
}
