const userNames = ["Ali", "Baber", "Zafar", "Dawood", "Aman"];

const firstName = prompt("Enter first name");

let nameFound = false; 

for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    nameFound = true;
    break; 
  }
}
if (nameFound) {
  alert("Enter");
} else {
  alert("Please write the correct user name");
}
