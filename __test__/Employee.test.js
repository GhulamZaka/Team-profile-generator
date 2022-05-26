const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("GMZ", "1", "gmz@gmail.com");

  expect(employee.name).toBe("GMZ");
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});
