{
  // type guard using: typeof -----------------------------------
  type Alphaneumeric = string | number;
  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    // we can not add number or string with number or string. JavaScript can do it.
    // but typescript don't allowed it
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add(10, 5);
  console.log(res1);

  // in guard ----------------------------------------------
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    // user.name; // gives only name, as both parameter have name property
    if ("role" in user) {
      console.log(`${user.name} must be an admin user`);
    } else {
      console.log(`${user.name} is normal user`);
    }
  };

  const normalUser: NormalUser = {
    name: "Shihab Rana",
  };

  const adminUser: AdminUser = {
    name: "Masud Rana",
    role: "admin",
  };
  console.log(getUser(normalUser));
  console.log(getUser(adminUser));
  //
}
