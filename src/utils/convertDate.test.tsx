import convertDate from "./convertDate";

describe("convertDate function", () => {
  test("convertDate should convert the date string correctly", () => {
    const dateString = "2023-06-15";
    const convertedDate = convertDate(dateString);
    expect(convertedDate).toBe("15/06/2023");
  });
});
