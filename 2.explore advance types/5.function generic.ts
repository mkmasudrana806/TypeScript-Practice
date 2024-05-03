{
  // normal function
  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("Bangladeshi");

  // generic array
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric<string>("Bangladeshi");
  const res3 = createArrayWithGeneric<boolean>(true);
  const res4 = createArrayWithGeneric<{ id: number; name: string }>({
    id: 23432,
    name: "Masud Rana",
  });

  // generic tuple
  const createArrayWithTupleGeneric = <X, Y>(param: X, param2: Y): [X, Y] => {
    return [param, param2];
  };

  const tupleObj1 = createArrayWithTupleGeneric<
    string,
    { name: string; age: number }
  >("nondini", { name: "Masud Rana", age: 21 });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "masud rana",
    email: "xyz@gmail.com",
    devType: "Next level developer",
  });
  const student2 = addCourseToStudent({
    name: "Shihab Rana",
    email: "shihab@gmail.com",
    devType: "Next level developer",
  });
}
