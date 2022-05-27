const Intern = require("../lib/Intern");

test("create Intern object", () => {
  const intern = new Intern("zaka");

  expect(intern.name).toBe("zaka");
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.role).toBe("Intern");
});

test("get intern name as an object", () => {
  const intern = new Intern("GMZ");
  expect(intern.name).toBe("GMZ");
});

test("get intern Id as an object", () => {
  const intern = new Intern("GMZ");
  expect(intern.id).toEqual(expect.any(String));
});

test("get intern Email as an object", () => {
  const intern = new Intern("GMZ");
  expect(intern.email).toEqual(expect.any(String));
});

test("get intern school as an object", () => {
  const intern = new Intern("GMZ");
  expect(intern.school).toEqual(expect.any(String));
});

test("get intern role as an object", () => {
  const intern = new Intern("GMZ");
  expect(intern.role).toBe("Intern");
});
