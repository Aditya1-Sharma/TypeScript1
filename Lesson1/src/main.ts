// let userName = "Hardik";
// console.log(userName);

// let a: number = 12;
// let b: number = 6;
// let c: number = 2;

// console.log(a / Number(b));
// console.log(c * b);

// Lesson 2

// let myName: string = "Aditya";
// myName = 42; Legal in jS

// myName = "Hardik";

// let meaningOfLife: number;
// let isLoading: boolean;
// let album: any;
// // let album :string | number

// album = 23;
// album = 27;

// const sum = (a: number, b: string) => {
//   return a + b;
// };
// sum(2, "3");

// let postId: string | number;
// let isActive: number | boolean;
// let re: RegExp = /\w+/g;

// Lesson 3
// Array Tupple and Enums

// let stringArr = ["one", "two", "three"];

// let guitar = ["strat", "Les", "Paul", 5150];

// let mixedData = ["Evh", 1984, true];

// stringArr[0] = "Selena";
// console.log(stringArr);

// guitar.push("Ariana");
// guitar.unshift("Selena");

// guitar = stringArr;
// console.log(guitar, stringArr);

// This is illegal to put the mixedData into the guitar array
// guitar = mixedData;
// console.log(guitar);

// Arrays

let test1 = [];
let bands: string[] = []; //Anotation of types

bands.push("Selena Gomez");

let myTupple: [string, number, boolean] = ["Aditya", 23, true];

let mixed = ["Hardik", 1, false];

// myTupple = mixed //illegal in Ts

myTupple[0] = "Akansha";
mixed[2] = true;

console.log(myTupple);

// objects

let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "Aditya";
// console.log(exampleObj);

// Use interface when defining something of type class
// interface Guitarist {
//   name?: string;
//   active?: boolean;
//   album: (string | number)[];
// }

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   album: (string | number)[];
// };

// let evh: Guitarist = {
//   name: "Aditya",
//   active: false,
//   album: ["Come and get it", 22, 27],
// };
// let JP: Guitarist = {
//   name: "Selena",
//   active: true,
//   album: ["Slow down", 23, 27],
// };

// evh = JP;
// console.log(evh, JP);

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `hello ${guitarist.name?.toUpperCase()}`;
// };

// console.log(greetGuitarist(evh));

// Enums:- Unlike most typescript features , Enums are not a type-level addition to javascript but something added to the language and runtime.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

// Lesson 4------------------------------------------------------------

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active?: boolean;
  album: (string | number)[];
}

type userId = stringOrNumber;

// interface PostId = stringOrNumber;  //It wont work

// Literals types -> it defines the literal type we can fix the certain values

let myName: "Aditya";
// myName = "Akansha";  //Akansha is not assignable to type aditya

let userName: "Aditya" | "Akansha" | "Hardik";

userName = "Aditya";

// function type alias

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
};
logMsg(add(23, 25));
// logMsg("Hello Hardik");

let subtract = function (c: number, d: number): number {
  return c - d;
};

// mathFunction is a alias type
// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let mutiply: mathFunction = function (c, d) {
  return c * d;
};

// logMsg(mutiply(23, 27));

// optional parameter

const addAll = (a: number, b: number, c?: number): number => {
  return c !== undefined ? a + b + c : a + b;
};
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// logMsg(addAll(23, 24, 22));
// logMsg(addAll(23, 24));
// logMsg(sumAll(23, 24));
// logMsg(sumAll(undefined, 24));

// Rest params

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
// logMsg(total(10, 2, 3, 4, 5));

//Never Type

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const createError = () => {};

// Lesson 5 -----------------------------------------------------------
// Type assertion and type casting

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more specific or less specific
let a: One = "hello Aditya";
let b = a as Two; //less specific
let c = b as Three; // more specific

let d = <One>"world";
let e = <Two>"Selena";

// Example for the assertion

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// since myval has a return type of string and addOrConcat have a type of string|number so we need to specify the specificity as "string"

// let myVal: string = addOrConcat(23, 27, "concat") as string;
// let nextVal: number = addOrConcat(23, 27, "concat") as number;
// let checkVal = addOrConcat(23, 27, "concat");
// console.log(myVal , nextVal , checkVal);

// 10 as string Illegal
// 10 as unknown as string;

// const img = document.querySelector("img") as HTMLImageElement;
// const myImg = document.getElementById("#img") as HTMLImageElement;
// const nextImg = <HTMLImageElement>document.getElementById("#img");

// img.src;
// myImg.src;

// Lesson 6 --------------------------------------------------------------------++++++++++++++++++++++++++++++++++++++++++++++++++------------------------------
// Class and constructor

class Coder {
  secondLang!: string;
  constructor(
    public name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `hello , I am ${this.lang}`;
  }
}

const Dave = new Coder("ADitya", "Rock", 42);

logMsg(Dave.getAge());
// console.log(Dave.age); // Cannot access the private member of the class
// console.log(Dave.name);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `${this.name} write ${this.lang} and listens ${this.music}`;
  }
}

const Hardik = new WebDev("Mac", "Hardik", "Love on", 21);

console.log(Hardik.getLang());
// console.log(WebDev.age);

// Interface ----------------------->

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist1 implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist1("jimmy", "guitar");

console.log(Page.play("strums"));

// -------------------------------------------------------------------

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Aditya = new Peeps("Aditya");
const Akansha = new Peeps("Akansh");
const Selena = new Peeps("Selena");
const Ashish = new Peeps("Ashish");

// count get instantiated to the class not to any specific object
// console.log(Aditya.id);
// console.log(Selena.id);
// console.log(Akansha.id);

// Lesson 6 ---------------getter and setter ------------------------------------

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Parms is not a array of string");
  }
}

const MyBands = new Bands();
MyBands.data = ["Aditya", "Afraz", "Advitya"];
// console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Tinku"];
// console.log(MyBands.data);
// MyBands.data = ["Akansha" , 27] //Gives error

console.clear();

// ------------------------------------Lesson7-----------------------------------------------

// Index Signature-------------------------------

interface TransactionObj {}

// This transction object can also be used
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: 5,
  Job: 12,
  Aditya: 23,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Aditya";

// Object.keys(todaysTransactions).map(el=>{

// })

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj'. No index signature with a parameter of type 'string' was found on type 'TransactionObj'
console.log(todaysTransactions[prop]);

const todayNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todayNet(todaysTransactions));
// todaysTransactions.Pizza = 50  Index signature in type 'TransactionObj' only permits reading.

console.log(todaysTransactions["Aditya"]);
// -----------------------------Example 2 -------------------------------------

interface Student {
  [key: string]: string | number | number[];
  name: string;
  GPA: number;
  classes: number[];
}

const student: Student = {
  name: "Aditya",
  GPA: 9.4,
  classes: [3, 2, 3, 4, 5, 6],
};

// console.log(student.test);

// for (const key in student) {
//   console.log(`${key}:${student[key as keyof Student]}`);
// }

// Object.keys(student).map(key=>{
//   console.log(student[key as keyof typeof student]);
// })

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};
// logStudentKey(student , 'name')

//////////////////////////////////////////////////////////

// interface Income {
//   [key: string]: number | string;
//   Pizza: "Dominos";
// }
type Streams = "salary" | "bonus" | "sidehustel"; // here we can provide the literal type
type Income = Record<Streams, number | string>;

const monthlyIncome: Income = {
  salary: 500,
  bonus: 100,
  sidehustel: 250,
};

// for (const revenue in monthlyIncome) {
//   console.log(monthlyIncome[revenue as keyof Income]);
// }

// ---------------------------------------Lesson 8 ----------------------------------
//Typscript Generic
const stringEcho = (arg: string): string => arg;

console.log(stringEcho("Aditya"));

const echo = <T>(arg: T): T => arg;
//Generic Template
console.log(echo("Hardik"));

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj(true));
// console.log(isObj({ name: "Akansha" }));
// console.log(isObj("Aditya"));
// console.log(isObj(3));
// console.log(isObj([12, 3, 4, 5]));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  } else if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

interface HasId {
  id: number;
}

const getUserProperty = <T extends HasId, k extends keyof T>(
  users: T[],
  key: k
): T[k][] => {
  return users.map((user) => user[key]);
};

// Generic in a class

class StateObject<T> {
  public data: T;

  constructor(value: T) {
    this.data = value;
  }
  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}
const store = new StateObject("John china");
// console.log(store.state);
store.state = "Aditya";
// console.log(store.state);

const myState = new StateObject<stringOrNumberArray>([15]);
myState.state = ["Aditya", 23, "Akansha"];
// console.log(myState.data);
// console.log(myState.data.length);

// -----------------------------------------Lesson 9------------------------------
// TypeScript Utility --> Type transformation

interface Assignment {
  name: string;
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  name: "Disha",
  studentId: "compSci123",
  title: "Final Project",
  grade: 0,
};
console.log(
  updateAssignment(assign1, { grade: 95, name: "Aditya", verified: true })
);

// Read only and Required ------------------------------------------------------

const recordAssignment = (assign1: Required<Assignment>): Assignment => {
  // SEND TO DATABASE OR LOGIC
  return assign1;
};

const assignVerified: Readonly<Assignment> = { ...assign1, verified: true };

// assignVerified.grade = 88; // wont work

console.log(recordAssignment({ ...assign1, verified: true }));

// Record Type -------------------------------------------------------------------

const hexColorMap: Record<string, string> = {
  red: "FF00000",
  green: "00FF00",
  blue: "0000FF",
};

type Student1 = "Selena" | "Aditya" | "Akansha";

type LetterGrades = "A" | "B" | "C" | "D" | "E" | "F";

const finalGrades: Record<Student1, LetterGrades> = {
  Selena: "A",
  Aditya: "B",
  Akansha: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Student1, Grades> = {
  Selena: { assign1: 98, assign2: 95 },
  Aditya: { assign1: 100, assign2: 99 },
  Akansha: { assign1: 92, assign2: 93 },
};

gradeData.Akansha.assign1 = 100;
// console.log(gradeData.Akansha.assign1);

// Pick and Omit ----------------------------------------------------------------
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignmentResult = {
  studentId: "111",
  grade: 70,

  // Object literal may only specify known properties, and 'verified' does not exist in type 'AssignmentResult'
  // verified: true,
};
console.log(score);

type AssignmentPreview = Omit<Assignment, "verified" | "grade">;

const preview: AssignmentPreview = {
  studentId: "007",
  title: "Final Project",
  name: "Akansha",
};
console.log(preview);

// --------------------------------------------Exclude and Extract -------------------------
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B" | "C" | "F">;
// console.log(c); "Find out the logic for the output"

const assign: highGrades = "C";
console.log(assign);

//  ------------------------------------Return type-----------------------------
// type newAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type newAssign = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("Utility", 100);
console.log(tsAssign);

//-----------------------------------Parameter-----------------------------------

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generic", 200];

const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// ------------------------------------Awaited---------------------------------
// Awaited-> helps us with the ReturnType of the Promise
