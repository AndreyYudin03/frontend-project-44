function getRandomNumber(minimumNumber = 1, maximumNumber = 100) {
  const minimumCeiled = Math.ceil(minimumNumber);
  const maximumFloored = Math.floor(maximumNumber);
  return Math.floor(
    Math.random() * (maximumFloored - minimumCeiled + 1) + minimumCeiled,
  );
}

export default getRandomNumber;
