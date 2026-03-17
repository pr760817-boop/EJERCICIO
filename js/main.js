import * as combine from './combine.js';

const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const operacionSelect = document.getElementById('operacion');
const btncalcular = document.getElementById('btncalcular');
const resultadosDiv = document.getElementById('resultados');
const numeroInput = document.getElementById("numeroInput");

function calcular() {
    try {
        const operacion = operacionSelect.value;
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        let resultado;

        switch (operacion) {
            case 'ejercicio1':
                resultado = combine.ejer.ejercicio1();
                break;
            case 'ejercicio2':
                resultado = combine.ejer.ejercicio2();
                break;
            case 'ejercicio3':
                resultado = combine.ejer.ejercicio3(num1, num2);
                break;
            case 'ejercicio4':
                resultado = combine.ejer.ejercicio4();
                break;
            case 'ejercicio5':
                resultado = combine.ejer.ejercicio5(num1);
                break;

            // -------- TUS EJERCICIOS 11–15 --------
            case 'ejercicio11':
                resultado = combine.ejer.ejercicio11(document.getElementById("arrayInput").value);
                break;
            case 'ejercicio12':
                resultado = combine.ejer.ejercicio12(document.getElementById("arrayInput").value);
                break;
            case 'ejercicio13':
                resultado = combine.ejer.ejercicio13(
                    document.getElementById("arrayInput").value,
                    document.getElementById("searchInput").value
                );
                break;
            case 'ejercicio14':
                resultado = combine.ejer.ejercicio14(document.getElementById("arrayInput").value);
                break;
            case 'ejercicio15':
                resultado = combine.ejer.ejercicio15(document.getElementById("arrayInput").value);
                break;

            case 'contador':
                combine.contador.contadorRegresivo(numeroInput.value);
                break;
            case 'sumaPar':
                combine.sumaPar.mostrarSuma();
                break;
            case 'impares':
                combine.impares.procesarLimite();
                break;
            case 'potencia':
                combine.potencia.mostrarPotencia();
                break;
            case 'secuencia':
                combine.secuencia.procesarTerminos();
                break;

            case 'ejercicio20':
                resultado = combine.ejer.ejercicio20(numero1Input.value);
                break;
            case 'ejercicio21':
                resultado = combine.ejer.ejercicio21([[1,2],[3,4]]);
                break;
            case 'ejercicio22':
                resultado = combine.ejer.ejercicio22(num1, num2);
                break;
            case 'ejercicio23':
                resultado = combine.ejer.ejercicio23([1,2,3], [4,5]);
                break;
            case 'ejercicio24':
                resultado = combine.ejer.ejercicio24([1,3,5,7,9], num1);
                break;
            case 'ejercicio25':
                resultado = combine.ejer.ejercicio25([1,2,3,4], num1);
                break;

            default:
                throw new Error('Operación no válida');
        }

        if (resultado !== undefined) {
            mostrarResultado(`📌 Resultado: ${JSON.stringify(resultado)}`);
        }

    } catch (error) {
        mostrarResultado(`❌ Error: ${error.message}`, 'error');
    }
}

function mostrarResultado(mensaje, tipo = 'success') {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result ${tipo}`;
}

btncalcular.addEventListener('click', calcular);