const show = "hello";
console.log(parseInt(show));
const nan = parseInt(show) + 3;

// console.log(Number.isNaN(nan))
// console.log(Number.isNaN(1))
// console.log(Number.isNaN([1]))
// console.log(Number.isNaN({}))
// console.log(Number.isNaN(undefined))
// console.log(Number.isNaN('1'))

const num = "23d 33";
const text = "hello bangladesh";
console.log(text.charAt(12));
console.log(text.replace("hello", "Parbatipur"));
console.log(num.replace("23", "he"));
console.log(text.toUpperCase());

// boolean

console.log(Boolean(""));
console.log(Boolean(34));

const total = () => {
  for (var i = 0; i < 10; i++) {
    i = 20;
  }
  console.log(i);
};

total();

// var obj = { name: "mojmul" };
// var age = prompt("how old are you?");
// obj[age] = prompt("when you do marry?");
// console.log(obj);

let a = ["ami", "mojmul", "haque"];
console.log(a.toLocaleString());
console.log(a.toString());
console.log(a);

const b = ["padma", "zamuna", "meghna"];

const c = a.concat(b);
console.log(c);
const d = ["akash", "batas"];

const e = c.join("=");

console.log(e);

const f = ["apple", "banana", "mango", "coconut"];
const g = f.slice(1, 2);

console.log(g);
