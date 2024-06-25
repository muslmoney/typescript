let num =  20 

console.log(num);


let username : string | number = 'PPonPOn'

console.log(username);

username = 2089;

let data : null | any;
data = 'Hello world'

console.log(data); 

const [a, b, c] : number [] = [1, 2, 3]
console.log(a,b,c);

interface User {
  first_name: string,
  last_name: string,
  age: number,
  gender: boolean,
  address: null | string,
  hobby: string[],
  [key:string]: any
}

const userBank : User = {
  first_name: 'behruz',
  last_name: 'ergashev',
  address: 'Tashkent',
  hobby: ['por','no'], 
  age: 18,
  gender: true,

}
console.log(userBank);




const [ firstName , address , workAddress, job] : string[]  = ['Khaet' , "Tashkent" , 'Tashkent', 'teacher']
const [age]: number[] = [1]
console.log(firstName , address , workAddress, job, age);


// новый "пропс"
interface Pon {
  age: number,
  name: string,
  location: string,
  job: string | number, 
  addressJob: string | number   
  // создать не обяз 
}
let pon: Pon[] = [{
  age: 23,
  name: "pontest",
  location: "Tashkent",
  job: "pontest",
  addressJob: "pontest test"

}]
console.log(pon);
