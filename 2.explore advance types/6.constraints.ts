// constraints means force some rules
// id, name, email constraints add here. must be passing object in this function should contains id, name, and email properties
{
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 213,
    name: "masud rana",
    email: "xyz@gmail.com",
    devType: "Next level developer",
  });

  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
  }>({
    id: 281,
    name: "Shihab Rana",
    email: "shihab@gmail.com",
    hasWatch: "Apple Watch",
  });
}
