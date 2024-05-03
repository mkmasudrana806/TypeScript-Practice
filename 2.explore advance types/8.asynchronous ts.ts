// promise

// simulate
const createpromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something data";
    if (data) {
      resolve(data);
    } else {
      reject("failed to load data");
    }
  });
};

// calling createpromise function
const showData = async () => {
  const data: string = await createpromise();
  console.log(data);
};

showData();
