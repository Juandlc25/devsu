import { render } from "@testing-library/react";
import TableHead from "./TableHead";

describe("TableHead component", () => {
  test("renders the table head with the correct item", () => {
    const item = "Table Header";
    const { getByText } = render(<TableHead item={item} />);
    const tableHeadElement = getByText(item);
    expect(tableHeadElement).toBeInTheDocument();
    expect(tableHeadElement).toHaveAttribute("title", item);
  });
});
