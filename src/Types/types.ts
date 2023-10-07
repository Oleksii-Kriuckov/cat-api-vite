export interface NewAct {
  date: string;
  mSec: number;
  image: { url: string };
  id: string;
  message: string;
  icon: string;
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