const getRandomItem = <T>(arr: T[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
};

export default getRandomItem;
