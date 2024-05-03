// Reference type --> Object
const users: {
  company: "JavaScript Hunts Bangladesh"; //literal type or constant types. not changeable in object
  // or
  readonly location: string; // access modifier, readonly.
  firstName: string;
  middleName?: string; // optional type, means this property can have or not in users object
  lastName: string;
} = {
  company: "JavaScript Hunts Bangladesh",
  location: "Dhaka",
  firstName: "Masud Rana",
  lastName: "Sheikh",
};

// access object property using dot notation. typescript gives us suggestion
users.company = "JavaScript Hunts Bangladesh";

// we can not change the location value here. due to read-only access modifier
// users.location = "Rajshahi";
