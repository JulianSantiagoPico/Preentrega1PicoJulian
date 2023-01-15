let total_areas = 4;
let valor = 10;

const suma = (a, b, c, d) => { return a + b + c + d };
const dividir = (a,b) => {return a / b };

const guardarDatos = () => {
    let nombre = document.getElementById("nombre").value;
    const datosUsuario = {nombreUsuario:nombre};
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
    console.log("Datos Guardados!");
};

const recuperarDatos = () => {
    const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));
    let salida = `<p>Hola de nuevo:</p>
    <p><b>${datosUsuario.nombreUsuario}</b></p>`;
    document.getElementById("resultado").innerHTML = salida;
    console.log("Datos Recuperados!");
};

const materias = { area1: "matematicas", area2: "inglés", area3: "sociales", area4: "español" };
const areas = ["matematicas", "inglés", "sociales", "español", "recreo"];

document.getElementById("calcular").addEventListener("click", calculadora);
document.getElementById("guardar").addEventListener("click", guardarDatos);
document.getElementById("cargar").addEventListener("click", recuperarDatos);


function calculadora () {
    let nota_mate = parseFloat(document.getElementById("mate").value);
    let nota_ing = parseFloat(document.getElementById("inglés").value);
    let nota_soc = parseFloat(document.getElementById("sociales").value);
    let nota_esp = parseFloat(document.getElementById("español").value);

    let promedio_notaFinal = dividir(suma(nota_mate, nota_ing, nota_soc, nota_esp), total_areas);

    console.log(promedio_notaFinal);
    let salidaNota = `<p>Tu promedio es: <b>${promedio_notaFinal}</b></p>`;
    document.getElementById("resultado").innerHTML = salidaNota;
 };

const eliminarArea = (area) => {
    let indice = areas.indexOf (area);
    console.log("Posicion: " + indice);

    if (indice != -1) {
        areas.splice(indice, 1);
    }
}

eliminarArea("recreo");
console.log(areas);


