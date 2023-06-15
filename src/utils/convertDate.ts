function convertDate(dateString: string): string {
  const dateObj = new Date(dateString);

  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
  const year = dateObj.getUTCFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export default convertDate;
