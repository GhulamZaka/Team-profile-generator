const Intern = require("../lib/Intern");

test("create Intern object", () => {
  const intern = new Intern("zaka", "9999", "zaka@gmail.com", "github");

  expect(intern.name).toBe("zaka");
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
