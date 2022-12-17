let total_areas = 4;
let valor = 10;

const suma = (a, b, c, d) => { return a + b + c + d };
const dividir = (a,b) => {return a / b };
const materias = { area1: "matematicas", area2: "inglés", area3: "sociales", area4: "español" };
const areas = ["matematicas", "inglés", "sociales", "español", "recreo"];

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", calculadora);

function calculadora () {
    let nota_mate = parseFloat(prompt("Ingrese la nota que sacaste en " + materias.area1 + ":"));
    let nota_ing = parseFloat(prompt("Ingrese la nota que sacaste en " + materias.area2 + ":"));
    let nota_soc = parseFloat(prompt("Ingrese la nota que sacaste en " + materias.area3 + ":"));
    let nota_esp = parseFloat(prompt("Ingrese la nota que sacaste en " + materias.area4 + ":"));

    let promedio_notaFinal = dividir(suma(nota_mate, nota_ing, nota_soc, nota_esp), total_areas);

    console.log(promedio_notaFinal);
    alert( "Tu promedio de nota final es: " + promedio_notaFinal.toFixed(2) )

    if(promedio_notaFinal >= 3.5) {
    alert( "¡Felicitaciones!, lograste pasar el curso." )
    } else{
    alert( "Parece que vas a tener que repetir el curso." )
    }

    for (let i=1; i<=10; i++) {
    if (valor == 1) {
        alert("¡Adios!")
        break;
    }

    valor--;
    alert("Cuenta regresiva: " + valor);
    }
}

const eliminarArea = (area) => {
    let indice = areas.indexOf (area);
    console.log("Posicion: " + indice);

    if (indice != -1) {
        areas.splice(indice, 1);
    }
}

eliminarArea("recreo");
console.log(areas);


