//1 program that displays the larger no
/*let num1 = prompt("Enter First Number");
let  num2 = prompt("Enter Second Number");

if (num1 > num2){
    console.log("Value 1 is greater : " + num1)
}

else if(num1 === num2){
    console.log("Both are equal: " + num1, num2)
}
else{
    console.log("Value 2 is greater : " + num2)
}
// 2 Sign Of A Number 
let value = +prompt("Enter first Number");

if (value > 0){
    alert("The sign is positive (+)")
} 
else{
    alert("The sign is negative (-)")
}
//3 compare 5 Numbers and find the largest one 
let Num_1 = +prompt("Enter 1st value")
let Num_2 = +prompt("Enter 2nd value")
let Num_3 = +prompt("Enter 3rd value")
let Num_4 = +prompt("Enter 4th value")
let Num_5 = +prompt("Enter 5th value")

let list =[];
list.push(Num_1);
list.push(Num_2);
list.push(Num_3);
list.push(Num_4);
list.push(Num_5);

console.log(list);
for (let i=0; i<=3; i++){
   if(list[0]>list[1]){
          list.splice(1,1)
   }
  else{
      list.splice(0,1)
  }
}
console.log(list.toString())

//4 Count to 15 and also mention Odd And Even 
for (let i=0; i<=15; i++){
    
    if (i%2 === 0 ){
      document.write(i +" is even <br>")
    }
    else{
      document.write(i + " is odd <br>");
    }


}
//5 Multiple of 3 and 5 
for (let i=1 ; i<=100 ;i++){
    if (i%3 === 0 && i%5 === 0){
      document.write(i+" FizzBuzz <br>")
      }
    else if (i%5 === 0){
      document.write(i+" Buzz <br>")
      }  
    else if(i%3 === 0)
        document.write(i+" Fizz <br>")
  }
//6 star Pattern  
  for (let i=0; i<=10;i++){
  
    for(let j=1 ; j<=i; j++){
      
      document.write("*");
      
    }
    document.write("<br>");
      
  }*/
//7 Grading of Students
//let sub1 = +prompt(Enter Sub1 Marks)
//let sub2 = +prompt(Enter Sub2 Marks)
//let sub3 = +prompt(Enter Sub3 Marks)

//let avg = Math.round((sub1+sub2+sub3)/3)

//if (avg<=60){
//  console.log(avg + " GRADE F")
//}
//else if(avg > 60 || avg <= 70 ){
//     console.log(avg + " GRADE D")
//}
//else if(avg > 70 || avg <= 80 ){
  //  console.log(avg + " GRADE C")
//}
//else if(avg > 80 || avg <= 90 ){
//    console.log(avg + " GRADE B")

//}
//else if(avg > 90 || avg <= 100){
 //   console.log(avg +" GRADE A")

//}
