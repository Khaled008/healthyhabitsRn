// // destructuring
// // what is the problem and how destructuring solve this

// // you have this user object
// const user = {
//   name: "khaled",
//   age: 25,
//   city: "giza",
// };
// // this is the old way to extract 3 values in 3 lines of code
// const name = user.name;
// const age = user.age;
// const city = user.city;

// // destructuring does all of that in 1 line

// const { name, age, city } = user;

// // in the cousre in section 2

// // without destructuring
// function GoalItem(props) {
//   const text = props.text;
//   return <Text> {text}</Text>;
// }

// // with destructuring
// function GoalItem({text}){
//     return <Text>{text}</Text>
// }
// // what if you want to extract a property but call it a diffrent name

// // you have this object
const goal = {
  id:1,
  text: 'learn react native',
  isCompleted: false,
}
// noraml destructruing :
const {text}= goal
console.log(text); // learn react native

// with destructuring 
const {text: goalText}= goal
console.log(goalText); // learn react native


const screen = {
  screen_name: 'Profile',
  screen_id: 2,
  is_protected: true,
};
const {screen_name: screenName, screen_id: screenId, is_protected: isProtected}= screen;

const user={
    name:'khaled', 
    city: 'giza',
};
const {name, age}= user;
console.log(age); // undefined- age doesnt exist in user
// set a default value as a fallback
const {name, age=25}= user;
console.log(age); // 25

// challenge

const goal = {
    id:1, 
    text: 'Learn JavaScript',
    isCompleted: false,
};

const {id, text, isCompleted, priority= 'medium'}= goal;
console.log(priority)

// after objects destructuring , arrays using also destructuring


const goals= ['learn Js',  'Build an app'];

// old way 
const firstGoal= goals[0];
const secondGoal= goals[1];

// with destructuring 
const [firstGoal, secondGoall]= goals;
console.log(firstGoal); // learn Js
console.log(secondGoal); // Learn React

// the most important array destructuring with useState
// thats is array destructuring useState returns an array with two items. 
// the currents value and the updater function. destructuring pulls them out in one line

// without destructuring 
const goalsState= useState([]);
const goals = goalsState[0];
const setGoals= goalsState[1];

// with destructuring
const [goals, setGaols]= useState([]);

// what if you wanna skip an item?

//in this example u want red and green and skip the green color 

const colors= ['red', 'green', 'blue'];
const [firstColor, thirdColor]= colors;
console.log(firstColor); // red
console.log(thirdColor); // blue





