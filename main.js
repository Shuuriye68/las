const plas = document.querySelector("#plus");
const subtruct = document.querySelector("#minus");
const conter = document.querySelector("#conter");
const xisaab = document.querySelector("#tiro");

let tiro = 600.72;
let star = 1;

// Arrow function to update the tiro price
const updateTiro = () => {
    const newTotal = (tiro * star).toFixed(2);
    xisaab.innerHTML = `$${newTotal} <span style="color: rgb(232, 231, 231);">$800.00</span>`;
};

plas.addEventListener("click", () => {
    star++;
    conter.innerHTML = star;
    updateTiro();
});

subtruct.addEventListener("click", () => {
    if (star > 1) {
        star--;
        conter.innerHTML = star;
        updateTiro();
    }
});
