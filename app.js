function user() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => displayData(data));
}
user();

let box = document.getElementById("box");
let inputText = document.getElementById("inputText");
let submit = document.getElementById("submit");
submit.addEventListener("click", displayData);

function displayData(data) {
  for (let singleData of data) {
    let para = document.createElement("li");
    para.classList.add("text");
    para.innerHTML = `
            <p><img src="${singleData.flags.svg}" /> </p>
            <h4> Country Name: ${singleData.name.common} </h4>
            <h4> Population: ${singleData.population}  </h4>
            `;
    box.appendChild(para);
  }
  // console.log(inputText.value);
  inputText.value = "";
}
