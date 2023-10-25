/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
const inputInformation = document.querySelectorAll(".inputInformation");
const sendButton = document.querySelector('input[type="submit"]');
console.log(inputInformation);

function checkIfStringNotEmpty(givenString) {
  let onlyMemo = givenString.trim();

  if (onlyMemo === "") {
    return false;
  } else {
    return true;
  }
}

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputInformation.forEach((inputField) => {
    if (!checkIfStringNotEmpty(inputField.value)) {
      inputField.style.border = "1px solid rgb(251, 52, 92)";
      inputField.style.background = "rgb(255, 128, 153)";
    } else {
      inputField.style.background = "rgb(238, 174, 202)";
      inputField.style.border = "1px solid rgb(165, 120, 139)";
    }
  });
});
