import { render } from "@testing-library/react";
import Table from "./Table";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
  return {
    ...vi.importMock("react-router-dom"),
    useNavigate: vi.fn(),
    useLocation: () => ({
      search: "",
      pathname: "/",
    }),
  };
});

describe("Table component", () => {
  const theadData = ["Header 1", "Header 2", "Header 3"];
  const tbodyData = [
    { id: "1", items: ["Item 1-1", "Item 1-2", "Item 1-3"] },
    { id: "2", items: ["Item 2-1", "Item 2-2", "Item 2-3"] },
    { id: "3", items: ["Item 3-1", "Item 3-2", "Item 3-3"] },
  ];
  const customClass = "custom-table";

  test("renders the table with the correct header and body data", () => {
    const { getByText } = render(
      <Table
        theadData={theadData}
        tbodyData={tbodyData}
        customClass={customClass}
        footer={<div>Im the footer</div>}
      />
    );

    theadData.forEach((head) => {
      const tableHeadElement = getByText(head);
      expect(tableHeadElement).toBeInTheDocument();
    });

    tbodyData.forEach((body) => {
      body.items.forEach((item) => {
        const tableRowElement = getByText(item);
        expect(tableRowElement).toBeInTheDocument();
      });
    });
  });

  test("renders the table with the correct custom class", () => {
    const { container } = render(
      <Table
        theadData={theadData}
        tbodyData={tbodyData}
        customClass={customClass}
        footer={<div>Im the footer</div>}
      />
    );
    const tableContainerElement = container.querySelector(".custom-table");
    expect(tableContainerElement).toBeInTheDocument();
  });
});
