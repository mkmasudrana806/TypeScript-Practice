{
  // utility types

  // picked utility
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  // pick specific type from another type
  type Names = Pick<Person, "name" | "age">;

  // Omit utility, means cancel, others type will be remain
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required utility, means make new type from another type and required even old type has optional
  type PersonReuired = Required<Person>;

  // Partial, all type are partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>; // now all the type are read only

  // record
  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
  };

  // empty object
  const EmptyObj: Record<string, unknown> = {}; // key always string. but value may any type
  //
}
