const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nilaiAlas = document.getElementById("luasAlas").value;
    const nilaiTinggi = document.getElementById("nilaiTinggi").value;
    const rumus = (1 / 2) * nilaiAlas * nilaiTinggi;

    document.getElementById("result").innerHTML = rumus;

});

const formu = document.getElementById("formu");

formu.addEventListener("submit", (e) => {
    e.preventDefault();

    const sisi = parseInt(document.getElementById("sisi").value);
    const sisii = parseInt(document.getElementById("sisii").value);
    const sisiii = parseInt(document.getElementById("sisiii").value);
    const rumuss = sisi + sisii + sisiii;
    console.log(rumuss);
    document.getElementById("resultKeliling").innerHTML = rumuss;
});