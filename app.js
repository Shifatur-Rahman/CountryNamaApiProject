function user() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => displayData(data));
}
user();

let box = document.getElementById("box");

function displayData(data) {
  for (let singleData of data) {
    let para = document.createElement("li");
    para.classList.add("text");
    para.innerHTML = `

    <h4> Country Name: ${singleData.name.common} </h4>
    <h4> Population: ${singleData.population}  </h4>
    <h4> Flag :<img src="${singleData.flags.svg}" /> </h4>
    <h4>  </h4>
    `;

    // para.src = singleData.flags[1];

    box.appendChild(para);
    // console.log(singleData.name.common);
  }
}

displayData();
