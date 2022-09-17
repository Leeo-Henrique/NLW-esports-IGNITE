export const ConvertHourToMinuts = (Hour: string) => {
  const [hours, minuts] = Hour.split(":").map(Number);

  const minutsAmount = hours * 60 + minuts;

  return minutsAmount;
};
