const { expect } = require("expect");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("GMZ");

  expect(employee.name).toBe("GMZ");
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.role).toBe("Employee");
});

test("get Employee name as an object", () => {
  const employee = new Employee("GMZ");
  expect(employee.name).toBe("GMZ");
});

test("get Employee Id as an object", () => {
  const employee = new Employee("GMZ");
  expect(employee.id).toEqual(expect.any(String));
});

test("get Employee email as an object", () => {
  const employee = new Employee("GMZ");
  expect(employee.email).toEqual(expect.any(String));
});

test("get Employee role as an object", () => {
  const employee = new Employee("GMZ");
  expect(employee.role).toBe("Employee");
});
