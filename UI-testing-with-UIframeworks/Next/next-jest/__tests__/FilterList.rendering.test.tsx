import { FilterList, FilterProps } from "../pages/FilterList";
import {
  fireEvent,
  logRoles,
  queryAllByRole,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("FilterLsit : component", () => {
  describe("rendering", () => {
    it("should render filter input", () => {
      renderFilterList();
      screen.getByPlaceholderText(/Filter/i); // test will pass if excatly 1 element is found
    });

    it("should render list", () => {
      const items = ["item1", "item2", "item3"];
      renderFilterList({ items });
      for (const item of items) {
        screen.getByText(item);
      }

      expect(screen.queryByText("item4")).toBeNull();
    });

    describe("should render no item when there are no items for filter string", () => {
      const props: Partial<FilterProps> = {
        items: ["item1", "item2", "item3"],
        filterStr: "xyz",
      };

      renderFilterList(props);
      screen.logTestingPlaygroundURL();
      const list = screen.getByRole("list", { name: /Filtered list/i });
      screen.debug(list);
      logRoles(list);

      const listitems = queryAllByRole(list, "listItem");
      expect(listitems).toHaveLength(0);
    });
    describe("Async Rendering", () => {
      it("", async () => {
        renderFilterList();
        await waitFor(() => {
          screen.getByPlaceholderText(/Filter/i);
        });
      });
    });
  });

  describe("componet intractions", () => {
    describe("user-event-API", async () => {
      // user-evet methods are async
      const user = userEvent.setup();
      renderFilterList();
      const searchInput = screen.getByLabelText(/name/i);
      await user.type(searchInput, "Item4");
      const list = screen.queryAllByRole("list", { name: /Filtered list/i });
      expect(list).toHaveLength(0);
    });

    describe("fireEvent API", () => {
      // fireEvent API is a wrapper around browser fireEvent API
      // fireEvent is not async
      renderFilterList();
      const searchInput = screen.getByLabelText(/name/i);
      fireEvent.change(searchInput, { target: { value: "Item4" } });
      const list = screen.queryAllByRole("list", { name: /Filtered list/i });
      expect(list).toHaveLength(0);
    });
  });
});

function renderFilterList(props: Partial<FilterProps> = {}) {
  const defaultProps: FilterProps = {
    items: props.items ?? [],
    filterStr: props.filterStr ?? "",
    onFilterChange: props.onFilterChange ?? (() => {}),
    selectedItems: props.selectedItems ?? [],
    onItemSelection: props.onItemSelection ?? (() => {}),
  };
  render(<FilterList {...defaultProps} />);
}
