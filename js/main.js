import * as combine from './combine.js';

const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const operacionSelect = document.getElementById('operacion');
const btncalcular = document.getElementById('btncalcular');
const resultadosDiv = document.getElementById('resultados');

function calcular() {
    try {
        const operacion = operacionSelect.value;
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        // Validación: solo permitir strings en "nombre"
        if (operacion !== 'nombre' && operacion !== 'contador' && (isNaN(num1) || isNaN(num2))) {
    throw new Error('Por favor ingresa números válidos');
}

        let resultado;

        switch (operacion) {

            
            case 'ejercicio1':
                resultado = combine.ejer.ejercicio1(num1, num2);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case 'ejercicio2':
                resultado = combine.ejer.ejercicio2(num1, num2);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case 'ejercicio3':
                resultado = combine.ejer.ejercicio3(num1, num2);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case 'ejercicio4':
                resultado = combine.ejer.ejercicio4(num1, num2);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case 'ejercicio5':
                resultado = combine.ejer.ejercicio5(num1, num2);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;
            case 'nombre':
                resultado = combine.name();
                mostrarResultado(`👤 El nombre es: ${resultado}`);
                break;
            case "contador":
                const numero = parseInt(document.getElementById("numeroInput").value);
                if (!isNaN(numero)) {
                combine.contador.contadorRegresivo(numero);
                } else {
                alert("Ingresa un número válido");
                }break;
            case "sumaPar":
                combine.sumaPar.mostrarSuma();
                break;    
            case "impares":
                combine.impares.procesarLimite();
                break;
            case "potencia":
                combine.potencia.mostrarPotencia();
                break;    
            case "secuencia":
                combine.secuencia.procesarTerminos();
                break;
            case "ejercicio20":
                resultado = combine.ejer.ejercicio20(numero1Input.value);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case "ejercicio21":
                resultado = combine.ejer.ejercicio21([
                    [1,2],
                    [3,4]
                ]);
                mostrarResultado(`📌 Resultado: ${JSON.stringify(resultado)}`);
                break;

            case "ejercicio22":
                resultado = combine.ejer.ejercicio22(num1, num2);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case "ejercicio23":
                resultado = combine.ejer.ejercicio23([1,2,3], [4,5]);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case "ejercicio24":
                resultado = combine.ejer.ejercicio24([1,3,5,7,9], num1);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case "ejercicio25":
                resultado = combine.ejer.ejercicio25([1,2,3,4], num1);
                mostrarResultado(`📌 Resultado: ${resultado}`);
                break;

            case 'ejercicio26':
                resultado = combine.calc.ejercicio26(
                    toArray('subarrayInput')
                );
                break;

            case 'ejercicio27':
                resultado = combine.calc.ejercicio27(
                    toArray('array1Input'),
                    toArray('array2Input')
                );
                break;

            case 'ejercicio28':
                resultado = combine.calc.ejercicio28(
                    Number(document.getElementById('primeLimitInput').value)
                );
                break;

            case 'ejercicio29': {
                const m1 = document.getElementById('matrix1Input').value
                    .split(';')
                    .map(row => row.split(',').map(Number));

                const m2 = document.getElementById('matrix2Input').value
                    .split(';')
                    .map(row => row.split(',').map(Number));

                resultado = combine.calc.ejercicio29(m1, m2);
                break;
            }

            case 'ejercicio30':
                resultado = combine.calc.ejercicio30(
                    toArray('mergeSortInput')
                );
                break
            default:
                throw new Error('Operación no válida');
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
