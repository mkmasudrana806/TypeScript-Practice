{
  // simple way to make one type to another type
  const nums: number[] = [1, 3, 59, 8, 2, 9];
  //   const names: string[] = ["masud", "rana", "sheikh"];

  //   make number to string array by simple way. use prevoius array then convert another array
  const strs: string[] = nums.map((num) => num.toString());
  console.log(strs);

  // mapped types means make type using loop
  type AreaNumber = {
    height: number;
    width: number;
  };

  // instead of writting same structure again, we can use mapped in below
  type AreaString = {
    height: string;
    width: string;
  };

  type AreaStr = {
    [key in keyof AreaNumber]: number;
  };

  /* now AreaStr is : 
  type AreaStr = {
    height: number;
    width: number;
}
*/

  type LookUp = AreaNumber["height"]; // return type of AreaNumber's height type which is number

  // mapped with generic and look up
  type AreasStrs<T> = {
    [key in keyof T]: T[key]; // look up
  };

  const area1: AreasStrs<{ height: number; width: string }> = {
    height: 100,
    width: "2332",
  };
  //
}
