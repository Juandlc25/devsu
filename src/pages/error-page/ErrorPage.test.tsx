import { render } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("ErrorPage component", () => {
  test("renders the error page with the correct error message", () => {
    const { getByText } = render(<ErrorPage />);

    const errorMessageElement = getByText("Not found");
    expect(errorMessageElement).toBeInTheDocument();
  });
});
