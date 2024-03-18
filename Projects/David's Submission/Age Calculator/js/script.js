var username = prompt("What's your name?");
var eluserName = document.getElementById('username');
eluserName.textContent = username;

const currentYear = new Date().getFullYear();
let birthYear;

 function calAge() {
  birthYear = parseInt(document.getElementById('birthYear').value);
  const age = currentYear - birthYear;
  if (age < 0) {
    alert("Invalid. Please enter a valid year");
  } else {
    alert(`You are ${age} years old`);
  }
}