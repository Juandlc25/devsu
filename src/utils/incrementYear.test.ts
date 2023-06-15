import { incrementYear } from "./incrementYear";

describe("incrementYear function", () => {
  test("increments the year correctly", () => {
    const dateString = "2023-06-07";
    const expected = "2024-06-07";
    const result = incrementYear(dateString);
    expect(result).toEqual(expected);
  });
});
