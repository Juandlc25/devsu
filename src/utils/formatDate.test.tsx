import formatDate from "./formatDate";

describe("formatDate function", () => {
  test("formatDate should format the date string correctly", () => {
    const dateString = "06/15/2023";
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("2023-15-06");
  });
});
