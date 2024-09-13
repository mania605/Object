//구조분해할당, 비구조할당 (Destructure Assignment)

const colors = ['red', 'green', 'blue'];
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];

//const FavoraitColor = ['hotpink', 'aqua', 'violet'];
//->
//const [c1, c2, c3] = ['hotpink', 'aqua', 'violet'];
//console.log(c3);

//이렇게 만들어도 됨.
const myFavoraitColor = ['hotpink', 'aqua', 'violet'];
const [c1, c2, c3] = myFavoraitColor;
console.log(c3);


//다른 예시

const student1 = {
  name: 'Andy',
  age: 30,
  address: 'Seoul'
};

// const name = student1.name;
// const age = student1.age;
// const address = student1.address;


//const {name, age, address} = student1;
//console.log(name);
//console.log(age);
//console.log(address);

const { name: name1, age, address } = student1;
console.log(name);
console.log(age);
console.log(address);





