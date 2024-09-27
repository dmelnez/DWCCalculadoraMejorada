
var resultadoCalculo = 0;

let operacionesGeneradas = []

let resultadosGenerados = []



function calculoOperadores(){

    event.preventDefault(); // Evita que la pagina deba ser recargada

    let primerNumero = document.getElementById('primerNumero').value

    let segundoNumero = document.getElementById('segundoNumero').value

    let operador = document.getElementById('operador').value

    if(operador != "+" && "-" && "*" && "/"){
        alert("Se ha producido un error")
    }

    else{
        resultadoCalculo = eval(primerNumero + operador + segundoNumero)
        document.getElementById('resultadoOperando').innerHTML = "<h3>" + resultadoCalculo + "</h3>";
    }
    

    operacionesGeneradas.push(primerNumero.toString() + operador.toString() + segundoNumero.toString())

    resultadosGenerados.push(resultadoCalculo);
    console.log(resultadosGenerados)

}

let numeroAumento = 1;


function pruebas(){

    event.preventDefault(); // Evita que la pagina deba ser recargada

          // Obtener la tabla
          let tabla = document.getElementById("tablaHistorial").getElementsByTagName('tbody')[0];

          // Crear una nueva fila
          let nuevaFila = tabla.insertRow();

          // Insertar nuevas celdas
          let celda1 = nuevaFila.insertCell(0);
          let celda2 = nuevaFila.insertCell(1);
          let celda3 = nuevaFila.insertCell(2);

            /*
          // Agregar contenido a las nuevas celdas
          celda1.innerHTML = numeroAumento++;
          celda2.innerHTML = resultadosGenerados[resultadosGenerados.length -1];
          celda3.innerHTML = operacionesGeneradas[operacionesGeneradas.length -1];*/

          for(var i = 0; i <= resultadosGenerados.length; i++){
            celda1.innerHTML = numeroAumento++;
            celda2.innerHTML = resultadosGenerados[resultadosGenerados.length -1];
            celda3.innerHTML = operacionesGeneradas[operacionesGeneradas.length -1];

          }

}

function mostrarTodosResultados(){

              // Obtener la tabla
              let tabla = document.getElementById("tablaHistorial").getElementsByTagName('tbody')[0];

              // Crear una nueva fila
              let nuevaFila = tabla.insertRow();
    
              // Insertar nuevas celdas
              let celda1 = nuevaFila.insertCell(0);
              let celda2 = nuevaFila.insertCell(1);
              let celda3 = nuevaFila.insertCell(2);
    
              // Agregar contenido a las nuevas celdas

              for(var i = 0; i< resultadosGenerados.length -1; i++){
                celda1.innerHTML = numeroAumento++;
                celda2.innerHTML = resultadosGenerados[resultadosGenerados.length -1];
                celda3.innerHTML = operacionesGeneradas[operacionesGeneradas.length -1];

              }

            

}
