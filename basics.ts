// * 기본형(Primitives): number, string, boolean
// * 좀 더 복잡한 타입: arrays, objects
// * 함수, 파라미터: function types, parameters
// ! type명은 소문자로 사용해야합니다. 대문자로 사용시 자바스크립트의 객체등을 사용하게 될 수 있습니다.

// *** 기본형(Primitives)

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// *** 좀 더 복잡한 타입
// * 배열(arrays)
let hobbies: string[]; // * 문자열 배열 타입

hobbies = ['Sports', 'Cooking'];

let ages: number[]; // * 숫자열 배열 타입

let flags: boolean[]; // * 불리언 배열 타입

// * 객체(objects)
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Max',
    age: 32
}

// * 응용: 객체 배열
let people: {
    name: string;
    age: number;
}[];

people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 40 },
    { name: 'Charlie', age: 50 }
]

// *** 타입 추론(Type Inference)
// * 변수를 선언할때 선언함과 동시에 변수의 값을 넣는 경우가 많다.
// * 이때 원래대로라면 타입명도 선언해줘야한다.
// * 하지만 타입을 선언하지 않고, 처음에 넣었던 값과 다른 성격의 값을 넣으려고 하면 에러가 난다.
// * 이는 타입스크립트가 변수 선언시 들어온 첫번째 값의 type을 변수의 type으로 기억하기 때문이다.
// * 이를 타입 추론이라고 한다. 이로인해 불필요하게 type을 선언할 필요가 없어진다.

let course = 'React - The Complete Guide';
course = 1234;


// *** 유니온 타입 (Union Type)
// * 여러 타입을 지정하는 타입

let course2: string | number = 'React - The Complete Guide';
course2 = 1234;

// *** 타입 별칭(Type Alias)
// * 동일한 타입을 중복해서 계속 사용한다면 비효율적이다.
// * 이를 해결하기 위해 하나의 타입에 별칭을 주고, 재사용한다.

type Person = {
    name: string;
    age: number;
}

let person2: Person;
let person3: Person[];

// *** 함수 & 타입(Functions & types)
// * 함수의 타입은 중괄호 뒤쪽에 작성한다. 타입스크립트는 타입 추론 기능이 있어 보통은 작성할 필요가 없지만,
// * 그래도 항상 함수는 파라미터의 타입인 입력 타입 값과 리턴 값의 타입인 출력 타입 값이 있다는 것을 기억해야한다.
function add(a: number, b: number): number {
    return a + b;
}

// * void 타입
// * null이나 undefined와 비슷하지만 함수의 리턴 값으로만 사용된다는 점이 있다.
function printOutput(value: any) {
    console.log(value);
}