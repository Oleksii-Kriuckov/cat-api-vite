export interface NewAct {
  date: string;
  image: { url: string };
  id: string;
  message: string;
  icon: string;
  alt: string;
}
export const initialArr: NewAct[] = [];

export interface IBreedInfo {
  image: { url: string };
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  weight: { metric: string };
  life_span: string;
}

export interface IBreedInfoWithoutImage {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  weight: { metric: string };
  life_span: string;
}