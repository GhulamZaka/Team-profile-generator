const Engineer = require("../lib/Engineer");

test("create Engineer object", () => {
  const engineer = new Engineer("zaka", "9999", "zaka@gmail.com", "github");

  expect(engineer.name).toBe("zaka");
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
