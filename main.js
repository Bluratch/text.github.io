//beginning alert 
alert("This is a birthday surprise website");

//constamts to control the user inputs in form of a prompt
const celebrantPassword = prompt("Enter Password : ", "password here");
const celebrantName = prompt("Enter your nane : ", "your name here");

//statement to check if user password is correct
if (celebrantPassword === "MudiaBf128") {
  // const nameElement = document.querySelector(".name");

  // const changeDivName = () => {
  //   nameElement.innerHTML = `${celebrantName}`;
    alert(`${celebrantName} enjoy these birthday wishes`);

    changeDivName();
} else {
  alert("wrong password");
  document.body.innerHTML = "";
}

// const trial = () => {
//    alert('hello')
// }
// trial()
