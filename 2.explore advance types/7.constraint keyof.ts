{
  // generic constraint using keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle; // we can make union using an type properties

  const person1: owner = "car";
  const person2: Owner2 = "ship";

  const user = {
    name: "Mr. persian",
    age: 26,
    address: "dhaka",
  };

  user["name"];

  // add constaint to function to receive only specific object property. it reduces the error
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const result = getPropertyValue(user, "address");
}
