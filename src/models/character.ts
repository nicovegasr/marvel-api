import { Character } from "./interfaces/characterInterface";
import { model, Schema } from "mongoose";

const characterSchema =  new Schema<Character>({
  id: {
    type: Number,
    required: true,
    unique: true

  },
  name: {
    type: String,
    required: true,
    
    unique: true
  },
  description: {
    type: String,
  },
  modified: {
    type: Date,
  },
  resourceURI: {
    type: String,
  },
  urls: [
    {
      type: {
        type: String,
          },
      url: {
        type: String,
          }
    }
  ],
  thumbnail: {
    path: {
      type: String,
      },
    extension: {
      type: String,
      }
  },
  comics: {
    available: {
      type: Number,
      },
    returned: {
      type: Number,
      },
    collectionURI: {
      type: String,
      },
    items: [
      {
        resourceURI: {
          type: String,
              },
        name: {
          type: String,
              }
      }
    ]
  },
  stories: {
    available: {
      type: Number,
      },
    returned: {
      type: Number,
      },
    collectionURI: {
      type: String,
      },
    items: [
      {
        resourceURI: {
          type: String,
              },
        name: {
          type: String,
              },
        type: {
          type: String,
              }
      }
    ]
  },
  events: {
    available: {
      type: Number,
      },
    returned: {
      type: Number,
      },
    collectionURI: {
      type: String,
      },
    items: [
      {
        resourceURI: {
          type: String,
              },
        name: {
          type: String,
              }
      }
    ]
  },
  series: {
    available: {
      type: Number,
      },
    returned: {
      type: Number,
      },
    collectionURI: {
      type: String,
      },
    items: [
      {
        resourceURI: {
          type: String,
              },
        name: {
          type: String,
              }
      }
    ]
  }
});

export const CharacterModel = model<Character>('Character', characterSchema);
