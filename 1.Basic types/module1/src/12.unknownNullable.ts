// nullable type
const searchName = (value: string | null) => {
  if (value) {
    console.log("Searching");
  } else {
    console.log("There is nothing to search");
  }
};

searchName("hello");
searchName("");

// unkown type
// function don't know which type it can be. based on value we can take action inside it
const getSpeedInMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The converted speed is ${convertedSpeed} ms^-1`);
  } else if (typeof value === "string") {
    const [result, unit] = value.split(" ");
    const convertedResult = (parseFloat(result) * 1000) / 3600;
    console.log(`The converted speed is ${convertedResult} ms^-1`);
  } else {
    console.log("wrong value");
  }
};

getSpeedInMeterPerSecond(100);
getSpeedInMeterPerSecond("100 kmh^-1");

// never type. if any function don't return anything, then use never
function throwError(msg: string) {
  throw new Error(msg);
}
throwError("muskil se error hogaya");
