export interface Pack {
  id: string;
  packCode: string;
  packName: {
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
  registaredAt: Date;
}
