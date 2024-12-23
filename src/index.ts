interface User {
	name: string;
	age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
};

// Example usage
const result = sumOfAge({
	name: "kirat",
	age: 20
}, {
	name: "raman",
	age: 21
});
console.log(result); // Output: 41


interface  User1{
    name:string,
    email:string,
    password:string,
    age:number,
    id:number
}

interface UpadteProps{
    name:string,
    password:string,
    age:number,
}
// if interface grows the number of arguments will also grow 
// number of argument cant be more than 5 

function UpdateUser(name:string,age:number,password:string ){

}
function upadteUser1(updateProps:UpadteProps){

}
// if you change the type , got to change in two places, therfore use pick
// pulling some properties out the interface object
// one way to pick generic values 
type UpdatedProps = Pick<User1,'name'|'age'|'email'>
function upadteUser2(updateProps:UpdatedProps){
    console.log(`Name: ${updateProps.name}, 
    Email: ${updateProps.email},age:${updateProps.age}`);
}

// its not necessary to provide all the arguments , in order to do this use optional
// it is optional to provide all three arguments 
type UpdatedPropsPartial = Partial<UpdatedProps>

function upadteUser23(updateProps:UpdatedPropsPartial){
    console.log(`Name: ${updateProps.name}, 
    Email: ${updateProps.email},age:${updateProps.age}`);
}
const result2 = upadteUser23(
    {
      name: "sssskirat",
      age: 20,
    
    },
   
  );

  const g =[9,4,6]
  g[4]=4

  console.log(g);
   type User2={
     name:string,
    readonly age:number
   }
   const user1 :User2={
    name:'John',
    age:23
   }

   //cant reassign the value as readOnluy is defined 
   user1.age=24 // cant be reassigned
   user1.name='aloo'
   // making the whole object readonly 
   type User4={
    readonly name:string,
   readonly age:number
  }
   const user4 :Readonly<User4>={
    name:"loop",
    age:78
   }
   user4.name="pooo"

//    real usage
interface Config {
    apiKey:string,
    endPoint:string
}
const Config :Readonly<Config>={
    endPoint:'https:jhbjkhkj.com',
    apiKey:'jhdauiikjhdiaj'
}
// Config.apiKey="jklklj" // not possible

type User5={
    [key:string]:string
}
const users:Users5={
    "rs1":"raman",
    "ras2":"kirat"
}
// cleaner context whenevr you have objects
type Users=Record<string,number>
type Users15=Record<string,{age:number,name:string}>
const users1:Users15={
    "rs1":{age:23,name:"raman"},
    "ras2":{age:76,name:"kirat"}
}

const usersMap= new Map()
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
console.log(usersMap.get('xyz789'));
// specify type  enforce the type 
type Users9={
    name:string,
    email:string,
    age:number
}
// key is the string and the value is Users9 object
const usersMap1= new Map<string,Users9>()



type EventType = 'click'|'mouseover'|'scroll'
type ExcludeEvent = Exclude<EventType,'scroll'>// 'click'|'mouseover'
 const handleEvent =(event:ExcludeEvent)=>{
    console.log(`handling event : ${event}`);
 }

 handleEvent("click");
 handleEvent("mouseover");
//  handleEvent("scroll");