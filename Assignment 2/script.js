//1 function in a function
/*function outerFunction(Outer){
    console.log(typeof(Outer))
    return function(Inner){
        console.log(typeof(Inner))
        console.log(Outer + Inner)
    }

}
let a = +prompt("Enter the value fot the outer Function")
let newFunction = outerFunction(a);
let b = +prompt("Enter the value for the Inner Function")
newFunction(b);

//2.Recursive Function
let arr = ["WORLD","WAR","TWO" ,"AND","AFTER"]
let i=0
let a;

function Find(word){
    
    if(arr[i]===word && i <= arr.length){
       a = true
    }
    
    else if (i < arr.length){
        ++i
        Find(word)
    }
    else{
     a = false;
    
    }
    return a
        
    
} 
let word = prompt("Enter the value you want to search").toUpperCase();
let c = Find(word);
console.log(c);

//3 Add a new paragraph by using a function
let a = document.getElementById("one");

function addPara(addToPara){
   let para = document.createElement("p")
   let node= document.createTextNode(addToPara)
   para.appendChild(node)
  one.appendChild(para);
}
let addToPara =prompt("Text you want to write in a paragraph")
addPara(addToPara);

//4 Add a New list item 
let getul=document.getElementById("ul")
function addListItem(listText){

    let li = document.createElement("li")
   let node= document.createTextNode(listText)
   li.appendChild(node)
   ul.appendChild(li);
   
   
}
let listText=prompt("Text you want to add in a list")
addListItem(listText);

//5 change colors of html elements 
function addBackColor(element,color){
    element.style.backgroundColor=color
     
}

let element = prompt("Enter element which you want to change color").toLowerCase();
let getelement = document.querySelector(element);
let chgeColor=prompt("Which color do you want").toLowerCase();
addBackColor(getelement,chgeColor);

//6 Object save to local storage
function addToLocaalStorage(key,value){
    let chgeToStr = JSON.stringify(value);
    localStorage.setItem(key,chgeToStr)
}

let std = {
    name:"Talha",
    rollno:12345,
    ClassName:"Javascript",
};
addToLocaalStorage("student0",std);

let std1 = {
    name:"Hamza",
    rollno:54321,
    ClassName:"Css",
};
addToLocaalStorage("student1",std1);

//7 get from local storage

function getlocalstorage(key){
    
    let b = localStorage.getItem(key)
    let  c = b ? JSON.parse(b) : []
    return c

};

console.log(getlocalstorage("student1"));

 

//8 
let employee= {
    name:"Talha",
    JobTitle:"Accountant",
    salary:"0000",
    
    }
    
  function savedata(key,value){
     //console.log(key,value)
     let chgetostr = JSON.stringify(value) 
     let saveTolocal=localStorage.setItem(key,chgetostr)
     return function (){
        let getData = localStorage.getItem(key)
        //console.log(getData)
          let check = getData ? JSON.parse(getData ) : []
         //console.log(check)
         return check;
     }
    

  }

  let obj = savedata("Employee",employee)
  let newObj=[obj("Employee")]
  console.log(newObj)
*/



