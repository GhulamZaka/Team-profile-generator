const Manager = require("../lib/Manager");

test("create Manager object", () => {
  const manager = new Manager("Zaka");

  expect(manager.name).toBe("Zaka");
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
  expect(manager.role).toEqual(expect.any(String));
});

test("get Manager name as an object", () => {
  const manager = new Manager("Zaka");
  expect(manager.name).toBe("Zaka");
});

test("get Manager Id as an object", () => {
  const manager = new Manager("Zaka");
  expect(manager.id).toEqual(expect.any(String));
});

test("get Manager email as an object", () => {
  const manager = new Manager("Zaka");
  expect(manager.email).toEqual(expect.any(String));
});
test("get Manager officeNumber as an object", () => {
  const manager = new Manager("Zaka");
  expect(manager.officeNumber).toEqual(expect.any(String));
});

test("get Manager role as an object", () => {
  const manager = new Manager("Zaka");
  expect(manager.role).toBe("Manager");
});
