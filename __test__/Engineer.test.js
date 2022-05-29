const Engineer = require("../lib/Engineer");

test("create Engineer object", () => {
  const engineer = new Engineer("Zaka");

  expect(engineer.name).toBe("Zaka");
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.role).toBe("Engineer");
});

test("get Engineer name as an object", () => {
  const engineer = new Engineer("Zaka");
  expect(engineer.name).toBe("Zaka");
});

test("get Engineer Id as an object", () => {
  const engineer = new Engineer("Zaka");
  expect(engineer.id).toEqual(expect.any(String));
});

test("get Engineer Email as an object", () => {
  const engineer = new Engineer("Zaka");
  expect(engineer.email).toEqual(expect.any(String));
});

test("get Engineer github as an object", () => {
  const engineer = new Engineer("Zaka");
  expect(engineer.github).toEqual(expect.any(String));
});

test("get Engineer role as an object", () => {
  const engineer = new Engineer("Zaka");
  expect(engineer.role).toBe("Engineer");
});
