{
  //
  type User = {
    name: string;
    age: number;
  };

  //   or we can user interface
  interface User1 {
    name: string;
    age: number;
  }

  const user: User = {
    name: "Masud Rana",
    age: 21,
  };

  // interface generic
  interface Developer<T, B = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: B;
  }

  // poor developer, dynamically watch object
  // no bike
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Masud Rana",
    computer: {
      brand: "Asus",
      model: "M21",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  // rich developer, dynamically watch object
  // dynamically bike info
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  const richDeveloper: Developer<AppleWatch, { name: string; model: number }> =
    {
      name: "Rich dev",
      computer: {
        brand: "HP",
        model: "X-25UR",
        releaseYear: 2013,
      },
      smartWatch: {
        brand: "Apple Watch",
        model: "something",
        heartTrack: true,
        sleepTrack: true,
      },
      bike: {
        name: "Yamaha",
        model: 234,
      },
    };

  //
}
