import isValidUrl from "./isValidUrl";

describe("isValidUrl function", () => {
  test("isValidUrl should return true for a valid HTTP URL", () => {
    const url = "http://example.com";
    const isValid = isValidUrl(url);
    expect(isValid).toBe(true);
  });

  test("isValidUrl should return true for a valid HTTPS URL", () => {
    const url = "https://example.com";
    const isValid = isValidUrl(url);
    expect(isValid).toBe(true);
  });

  test("isValidUrl should return false for an invalid URL", () => {
    const url = "not-a-valid-url";
    const isValid = isValidUrl(url);
    expect(isValid).toBe(false);
  });
});
