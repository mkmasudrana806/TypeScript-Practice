{
  // conditional type: type based on some condition of another type
  type a1 = null;
  type b1 = undefined;

  // conditional type
  type x = a1 extends null ? true : false; // here x = true;
  type y = b1 extends null ? true : false; // here y = false;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // conditional type making. check is he belongs to bike or car or ship
  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false; // or using keyof
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"car">; // HasBike = true
  //
}
