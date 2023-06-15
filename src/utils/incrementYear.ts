export function incrementYear(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  const newYear = String(Number(year) + 1);
  return `${newYear}-${month}-${day}`;
}
