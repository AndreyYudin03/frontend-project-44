function getRandomNumber(minimumNumber = 1, maximumNumber = 100) {
  const randomNumber = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber,
  );
  return randomNumber;
}

export default getRandomNumber;
