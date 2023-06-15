function formatDate(dateString: string): string {
  const split = dateString.split("/").reverse();
  return split.join("-");
}

export default formatDate;
