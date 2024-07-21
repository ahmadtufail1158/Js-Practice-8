// let randomNumber = Math.floor(Math.random() * 100) + 1;

// console.log(randomNumber);





// // Get the two numbers from the user
// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));

// // Generate a random number between the two numbers
// let randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

// // Display the result
// alert(`The random number between ${num1} and ${num2} is: ${randomNumber}`);




         

// const toss = Math.floor(Math.random() * 2);

// // Print "Heads" or "Tails" accordingly
// if (toss === 0) {
//   console.log("Heads");
// } else {
//   console.log("Tails");
// }





// // RANDOM PASSWORD GENERATOR PROGRAM 
// let password = "";
// let passwordLength = 12;
// let charactors = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$"

// for(let i = 0; i < passwordLength; i++){
//     password += charactors.charAt(Math.floor(Math.random()* charactors.length));
// }

// console.log(password);






// // Convert the string "123" to an integer
// let num = parseInt("123");

// // Print the value of the integer
// console.log(num); // Output: 123






// let stringValue = "123.45";
// let decimalValue = parseFloat(stringValue);
// console.log(decimalValue);







// let input = prompt("Enter a string: ");

// let num;
// if (input.includes('.')) {
//   num = parseFloat(input);
// } else {
//   num = parseInt(input, 10);
// }

// if (isNaN(num)) {
//   alert("Invalid input. Please enter a number.");
// } else {
//   alert(`Converted value: ${num}`);
// }






// // Convert the string "123" to a number
// const num = parseInt("123", 10);

// // Print the value of the number
// console.log(num); // Output: 123






// // Convert the number 123 to a string
// let num = 123;
// let str = num.toString();

// // Print the value of the string
// console.log(str); // Output: "123"





// const num = 123.45678;
// const formattedNum = num.toFixed(2);
// console.log(formattedNum); // Output: "123.46"




// const num = 123.45678;
// const formattedNum = num.toFixed(4);
// console.log(formattedNum); // Output: "123.4568"




// let num = parseFloat(prompt("Enter a number: "));
// let decimalPlaces = parseInt(prompt("Enter the number of decimal places: "));

// if (isNaN(num) || isNaN(decimalPlaces)) {
//   alert("Invalid input. Please enter a valid number and number of decimal places.");
// } else {
//   let formattedNum = num.toFixed(decimalPlaces);
//   alert(`The number ${num} formatted to ${decimalPlaces} decimal places is: ${formattedNum}`);
// }





// const currentDate = new Date();
// console.log(currentDate); // Output: the current date and time, 





// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth() + 1; // months are 0-based, so add 1
// let day = now.getDate();
// let hour = now.getHours();
// let minute = now.getMinutes();
// let second = now.getSeconds();

// let formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

// console.log(formattedDateTime);





// let now = new Date();
// let year = now.getFullYear();
// let month = (now.getMonth() + 1 < 10? '0' : '') + (now.getMonth() + 1);
// let day = (now.getDate() < 10? '0' : '') + now.getDate();
// let hour = (now.getHours() < 10? '0' : '') + now.getHours();
// let minute = (now.getMinutes() < 10? '0' : '') + now.getMinutes();
// let second = (now.getSeconds() < 10? '0' : '') + now.getSeconds();

// let currentTime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
// console.log(currentTime);






// const birthDate = new Date("2006-05-01");
// const today = new Date();
//  const age = today.getFullYear() - birthDate.getFullYear();

//  console.log(`You are ${age} year old`);







// const currentDate = new Date();
// const year = currentDate.getFullYear();
// console.log(year); // Output: the current year, e.g. 2024






// const currentDate = new Date();
// const month = currentDate.getMonth() + 1; // +1 because getMonth() returns 0-11
// console.log(month); // Output: the current month, e.g. 7 (for July)







// function extractDateParts(date) {
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1; // +1 because getMonth() returns 0-11
//     const day = date.getDate();
//     return { year, month, day };
//   }
//   const inputDate = new Date('2024-07-25T14:30:00.000Z');
//   const { year, month, day } = extractDateParts(inputDate);
//   console.log(`Year: ${year}, Month: ${month}, Day: ${day}`); // Output: Year: 2024, Month: 7, Day: 19






// const specificDate = new Date('2024-07-25T12:00:00.000Z');
// console.log(specificDate); // Output: 2024-07-19T12:00:00.000Z






// const year = parseInt(prompt('Enter the year: '));
// const month = parseInt(prompt('Enter the month (1-12): ')) - 1; // -1 because months are 0-based
// const day = parseInt(prompt('Enter the day (1-31): '));
// const hour = parseInt(prompt('Enter the hour (0-23): '));
// const minute = parseInt(prompt('Enter the minute (0-59): '));
// const second = parseInt(prompt('Enter the second (0-59): '));

// const userInputDate = new Date(year, month, day, hour, minute, second);
// console.log(userInputDate); // Output: the user-inputted date and time





// function createDateFromString(inputString) {
//     const [date, time] = inputString.split(' ');
//     const [year, month, day] = date.split('-').map(Number);
//     const [hour, minute, second] = time.split(':').map(Number);
//     return new Date(year, month - 1, day, hour, minute, second);
//   }
  
//   const inputString = '2024-07-19 12:00:00';
//   const dateObject = createDateFromString(inputString);
//   console.log(dateObject); // Output: 2024-07-19T12:00:00.000Z







// const currentDate = new Date();
// const newDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // add 1 day
// console.log(newDate); // Output: the current date + 1 day






// const currentTime = new Date();
// const newTime = new Date(currentTime.getTime() - 60 * 60 * 1000); // subtract 1 hour
// console.log(newTime); // Output: the current time - 1 hour





// let dateString = prompt("Enter a date and time in the format YYYY-MM-DD HH:MM:SS:");
// let date = new Date(dateString);

// let operation = prompt("Do you want to add or subtract? (add/subtract)");
// let unit = prompt("What unit do you want to use? (days/hours/minutes)");
// let amount = parseInt(prompt("How many " + unit + " do you want to " + operation + "?"));

// if (operation === "add") {
//   if (unit === "days") {
//     date.setDate(date.getDate() + amount);
//   } else if (unit === "hours") {
//     date.setHours(date.getHours() + amount);
//   } else if (unit === "minutes") {
//     date.setMinutes(date.getMinutes() + amount);
//   }
// } else if (operation === "subtract") {
//   if (unit === "days") {
//     date.setDate(date.getDate() - amount);
//   } else if (unit === "hours") {
//     date.setHours(date.getHours() - amount);
//   } else if (unit === "minutes") {
//     date.setMinutes(date.getMinutes() - amount);
//   }
// }

// console.log("Original date: " + dateString);
// console.log("New date: " + date.toLocaleString());




  


// function countdownTimer(targetDate) {
//     const now = new Date();
//     const diff = targetDate.getTime() - now.getTime();
//     const days = Math.floor(diff / (24 * 60 * 60 * 1000));
//     const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
//     const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
//     const seconds = Math.floor((diff % (60 * 1000)) / 1000);
//     console.log(`Remaining time: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
//   }
  
//   const targetDate = new Date('2024-07-21T23:59:59.000Z'); // New Year's Eve
//   countdownTimer(targetDate); // Output: the remaining time until the target date









// function scheduleAppointment(date, time, description) {
//         const appointmentDate = new Date(`${date}T${time}:00.000Z`);
//         console.log(`Appointment scheduled for ${appointmentDate.toLocaleString()} - ${description}`);
//       }
      
//       const appointmentDate = '2024-07-19';
//       const appointmentTime = '10:30';
//       const appointmentDescription = 'Meeting with Ahmad';
//       scheduleAppointment(appointmentDate, appointmentTime, appointmentDescription);
//       // Output: Appointment scheduled for 7/19/2024, 3:30:00 PM - Meeting with Ahmad











