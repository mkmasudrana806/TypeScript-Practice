"use strict";
// Reference type --> Object
const users = {
    company: "JavaScript Hunts Bangladesh",
    location: "Dhaka",
    firstName: "Masud Rana",
    lastName: "Sheikh",
};
// access object property using dot notation. typescript gives us suggestion
users.company = "JavaScript Hunts Bangladesh";
// we can not change the location value here. due to read-only access modifier
// users.location = "Rajshahi";
