export const ConvertMinutsToHours = (MinutsAmount: number) => {
  const Hour = Math.floor(MinutsAmount / 60);
  const Minuts = MinutsAmount % 60;

  return `${String(Hour).padStart(2, "0")}:${String(Minuts).padStart(2, "0")}`;
};
