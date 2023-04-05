const formm = document.getElementById("formm");

formm.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const rumuus = 2 * (a + b);
    console.log(rumuus);
    document.getElementById("result").innerHTML = rumuus;
})

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const alas = parseInt(document.getElementById("alas").value);
    const tinggi = parseInt(document.getElementById("tinggi").value);
    const rumus = alas * tinggi;
    console.log(rumus);
    document.getElementById("resultluas").innerHTML = rumus;
})