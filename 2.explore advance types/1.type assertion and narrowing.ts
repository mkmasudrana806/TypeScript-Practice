{
  // type assertion: developer know better about type than typescript
  let anything: any;

  anything = "Next level web development";
  anything as string; // gives string method

  //   anything = 324;
  //   (anything as number) // gives number related method

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
}
