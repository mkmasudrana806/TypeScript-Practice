{
  // use console.log inside ts file. using:npm i -g ts-node-dev
  // then: tsnd --respawn server.ts(here, server.ts mainly your ts file location)

  // ? used as ternary, optional chaining, nullish coalescing
  // ternary operator
  const age: number = 15;
  age > 18 ? console.log("adult") : console.log("Not adult");

  //   nullish coalescing operator
  // used where want to take a decision based on: null or undefined
  const isAuthenticated = undefined;
  const result = isAuthenticated ?? "Guest";
  console.log({ result });
  // Note: nullish and ternary operator is not same.

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Masud Rana",
    address: {
      city: "Sirajganj",
      road: "Rajshahi",
      presentaddress: "Dhaka",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address";
  console.log({ permanentAddress });
  // optional chaining give undefined.
  // nullish coalescing operator gives "No permanent address".
  // when we have show something if something is missing. mainly want to give default value if no value is present

  /**
   * nullish coalescing operator used based on null or undefined value. and gives a default value
   */
}
