const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test suite", () => {
  beforeAll(() => {
    add({
      title: "todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("Creating a new todo", () => {
    const todoLength = all.length;
    add({
      title: "todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLength + 1);
  });

  test("Todo is marked as complete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Overdue Items", () => {
    add({
      title: "overdue Todo",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  test("Due Today Items", () => {
    expect(dueToday().length).toBe(2);
  });

  test("Due later Items", () => {
    add({
      title: "Test due later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});
