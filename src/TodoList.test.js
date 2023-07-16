import { fireEvent, render } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", () => {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const value = getByLabelText("Todo:");
  const btn = queryByText("Submit Todo");
  expect(queryByText("Get eggs")).not.toBeInTheDocument();
  fireEvent.change(value, { target: { value: "Get eggs" } });
  fireEvent.click(btn);
  expect(queryByText("Get eggs")).toBeInTheDocument();
});
