export interface NewAct {
  date: string;
  mSec: number;
  image: { url: string };
  id: string;
  icon: string;
  message: string;
  alt: string;
}

export interface BreedInfo {
  image: { url: string };
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  weight: { metric: string };
  life_span: string;
}

export type AltType = "like" | "favorite" | "dislike"