// spread operator
// rest operator
// destructuring

// spread operator
const bros1: string[] = ["Masud", "Rana", "Sheikh"];
const bros2: string[] = ["Shamoli", "Rahman", "Soton"];

// bros1.push(bros2); // wrong, because bros1 was string arrays. but we trying to push entire array
bros1.push(...bros2);

// object destructure
const mentors1 = {
  typescript: "Mezba",
  redux: "Mir",
  dbms: "Mizan",
};

const mentors2 = {
  prisma: "Firoz",
  next: "Tanmoy",
  cloud: "Nahid",
};

const mentorLists = {
  ...mentors1,
  ...mentors2,
};

// rest operator in funtion parameter, rest means entire parameter into an array
const greeting = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};

greeting("Masud", "Rana", "Sheikh");
