// console.log('hello world!!')

// let shoppingList = [
//     "Milk",
//     "Eggs",
//     "Bread",
//     ["Apples", "Bananas", "Oranges"],
//     ["Potatoes", "Tomatoes", "Onions"]
// ];

// console.log(shoppingList)

// Task1:
// to fetch first item of grocery item list
// console.log(shoppingList[4][0])


// to add "Carrots" to the end of the grocery items list
// shoppingList[4].push('Carrots')
// console.log(shoppingList)

// to remove the last item from the grocery items list.
// shoppingList[4].pop()
// console.log(shoppingList)

// Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place

// shoppingList[4].splice(1,2,'Cucumbers','Bell Peppers')
// console.log(shoppingList)


// Task2:
// let student = {
//     name: "Amit",
//     age: 20,
//     grade: "A",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         country: "India"
//     }
// };

// console.log(student)

// Write JavaScript code to fetch the student's name
// console.log(student.name)

// Write JavaScript code to add a new property phone with the value "123-456-7890" to the student object
// student.phone = '123-456-7890'
// console.log(student)


// Write JavaScript code to remove the grade property from the student object.  
// delete student.grade
// console.log(student)

// Write JavaScript code to modify the student's age to 21
// student.age = 24
// console.log(student)



// Task3
// Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

// let n = -1
// if(n>0){
//     console.log('Given Number is Positive')
// }

// if(n<0){
//     console.log('Given Number is Negative')

// }
// if(n==0){
//     console.log('Zero')

// }



// Create a JavaScript program that evaluates a student's grade based on their score. The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.

// let score = 76
// if (score >= 90 && score <= 100) {
//     console.log('Grade is A')

// }

// else if (score >= 80 && score <= 89) {
//     console.log('Grade is B')

// }
// else if (score >= 70 && score <= 79) {
//     console.log('Grade is C')
// }
// else if (score >= 60 && score <= 69) {
//     console.log('Grade is D')
// }

// else if(score<60 && score>=0){
//     console.log('Grade is F')

// }
// else{
//     console.log('Invalid Score')

// }




// Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.
let text = ' '   
if(text){
    console.log('Truthy');
}

else{
    console.log('falsy');
}