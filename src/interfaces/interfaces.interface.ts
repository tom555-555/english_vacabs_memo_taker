export interface dictionary_definitions {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface dictionary_meanings {
  definitions: dictionary_definitions[];
  partOfSpeech: string;
}

export interface dictionaryApiResObj {
  word: string;
  phonetic: string;
  meanings: dictionary_meanings[];
  sourceUrls: string[];
}
