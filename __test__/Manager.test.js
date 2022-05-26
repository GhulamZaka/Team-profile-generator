const Manager = require("../lib/Manager");

test("create Manager object", () => {
  const manager = new Manager("zaka", "9999", "zaka@gmail.com", "01");

  expect(manager.name).toBe("zaka");
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});
