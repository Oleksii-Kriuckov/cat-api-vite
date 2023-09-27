export const isObjectForInfo = (
  value: any
): value is {
  image: { url: "" };
  id: "";
  name: "";
  description: "";
  temperament: "";
  origin: "";
  weight: { metric: "" };
  life_span: "";
} =>
  typeof value === "object" &&
  typeof value.id === "string" &&
  typeof value.image.url === "string";

export const isObjectForArray = (
  value: any
): value is {
  icon: string;
  date: string;
  id: string;
  message: string;
  alt: string;
} =>
  typeof value === "object" &&
  typeof value.icon === "string" &&
  typeof value.id === "string" &&
  typeof value.alt === "string" &&
  typeof value.message === "string";
