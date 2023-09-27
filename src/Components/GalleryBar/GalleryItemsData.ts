type orderProps = { name: string; id: string | number };
export const order: orderProps[] = [
  { name: "Random", id: 5 },
  { name: "Desc", id: 10 },
  { name: "Asc", id: 15 },
];

type typeProps = { name: string; id: string | number };
export const type: typeProps[] = [
  { name: "Static", id: 10 },
  { name: "Animated", id: 15 },
];

type limitProps = { name: string; id: string | number };
export const limit: limitProps[] = [
  { name: "10 items per page", id: 10 },
  { name: "15 items per page", id: 15 },
  { name: "20 items per page", id: 20 },
];

