{
  // unioin types. logical or operation
  type FrontendDeveloper = "fakibaz developer" | "junior developer";
  type FullStackDeveloper = "frontend developer" | "expoert developer";

  // we can use union type using type
  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "fakibaz developer";

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "O+" | "AB" | "AB+" | "B+";
  };

  const user1: User = {
    name: "Masud Rana",
    email: "mkmasudrana806@gmail.com",
    gender: "male",
    bloodGroup: "O+",
  };

  // intersection type
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDev = {
    skills: string[];
    designation: "Backend Developer";
  };

  type FullStackDev = FrontendDev & BackendDev;

  const FullStackDevelopers: FullStackDev = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation: "Backend Developer",
    designation1: "Frontend Developer",
  };
}
