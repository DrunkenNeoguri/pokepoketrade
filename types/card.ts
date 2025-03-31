import {Pack} from './pack';

export interface Card {
  id: string;
  pack: Pack;
  cardIndex: string;
  cardName: {
    eng: string;
    spa: string;
    fra: string;
    ger: string;
    ita: string;
    por: string;
    jpn: string;
    kor: string;
    cht: string;
  };
  rarity: string;
  type: string;
  registaredAt: Date;
}
