function getRandomNumber() {
  const minimumNumber = 1;
  const maximumNumber = 100;
  const randomNumber = Math.floor(
    Math.random() * (maximumNumber - minimumNumber) + minimumNumber,
  );
  return randomNumber;
}

export default getRandomNumber;
