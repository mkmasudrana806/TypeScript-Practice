"use strict";
{
    //object destructuring
    const user = {
        id: 345,
        name: {
            firstName: "Masud Rana",
            middleName: "Atel",
            lastName: "Sheikh",
        },
        contactNo: "01792852446",
        address: "Uganda",
    };
    // in destructuring, typescript gives us power. gives suggestion, gives error if we type wrong
    // in destructuring, we can not use :, it means alias.
    const { id: ID, // it means we aliases id as ID
    name: { middleName }, address, } = user;
    // array destructuring
    const myfriends = ["chandler", "joye", "ross", "rachel"];
    const [a, b, c] = myfriends;
    //   or skip 1st two value, only take 3rd value in a variable
    const [, , best] = myfriends; // in best we got 3rd value of this array
    // take some and rest of the elements
    const [firstF, secondF, ...restF] = myfriends; // firstF="chandler", secondF="joye", ...restF=["ross", "rachel"]
}
