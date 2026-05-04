import * as combine from './combine.js';

const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const inputGeneral = document.getElementById('inputGeneral'); 
const operacionSelect = document.getElementById('operacion');
const btncalcular = document.getElementById('btncalcular');
const resultadosDiv = document.getElementById('resultados');

function calcular() {
    try {
        const operacion = operacionSelect.value;
        const num1 = parseFloat(numero1Input.value) || 0;
        const num2 = parseFloat(numero2Input.value) || 0;
        const valGeneral = inputGeneral ? inputGeneral.value : "";

        let resultado;

        switch (operacion) {
            // BLOQUE 1-5
            case 'ejercicio1': resultado = combine.ejer.ejercicio1(); break;
            case 'ejercicio2': resultado = combine.ejer.ejercicio2(); break;
            case 'ejercicio3': resultado = combine.ejer.ejercicio3({ numA: num1, numB: num2 }); break;
            case 'ejercicio4': resultado = combine.ejer.ejercicio4(); break;
            case 'ejercicio5': resultado = combine.ejer.ejercicio5({ numeroFactorial: num1 }); break;

            // BLOQUE 6-10 (Asegúrate que estas funciones en sus archivos retornen { result: ... })
            case "contador": resultado = combine.contador.contadorRegresivo(num1); break;
            case "sumaPar": resultado = combine.sumaPar.mostrarSuma(); break;
            case "impares": resultado = combine.impares.procesarLimite(num1); break;
            case "potencia": resultado = combine.potencia.mostrarPotencia(num1, num2); break;
            case "secuencia": resultado = combine.secuencia.procesarTerminos(num1); break;

            // BLOQUE 11-30
            case 'ex11': resultado = combine.ejer.ex11({ vectorInput: valGeneral }); break;
            case 'ex12': resultado = combine.ejer.ex12({ arrayInput: valGeneral }); break;
            case 'ex13': resultado = combine.ejer.ex13({ dataInput: valGeneral, searchInput: num1 }); break;
            case 'ex14': resultado = combine.ejer.ex14({ arrayInput14: valGeneral }); break;
            case 'ex15': resultado = combine.ejer.ex15({ numbersInput: valGeneral }); break;
            case 'ex16': resultado = combine.ejer.ex16({ valuesInput: valGeneral }); break;
            case 'ex17': resultado = combine.ejer.ex17({ duplicatesInput: valGeneral }); break;
            case 'ex18': resultado = combine.ejer.ex18({ sortInput: valGeneral }); break;
            case 'ex19': resultado = combine.ejer.ex19({ productInput: valGeneral }); break;
            case 'ex20': resultado = combine.ejer.ex20({ lettersInput: valGeneral }); break;
            case 'ex21': resultado = combine.ejer.ex21({ matrixInput: valGeneral }); break;
            case 'ex22': resultado = combine.ejer.ex22({ vectorAInput: valGeneral, vectorBInput: num2 }); break;
            case 'ex23': resultado = combine.ejer.ex23({ vectorXInput: valGeneral, vectorYInput: num2 }); break;
            case 'ex24': resultado = combine.ejer.ex24({ sortedArrayInput: valGeneral, searchValue: num1 }); break;
            case 'ex25': resultado = combine.ejer.ex25({ rotateInput: valGeneral, kInput: num1 }); break;
            case 'ex26': resultado = combine.ejer.ex26({ subarrayInput: valGeneral }); break;
            case 'ex27': resultado = combine.ejer.ex27({ array1Input: valGeneral, array2Input: numero2Input.value }); break;
            case 'ex28': resultado = combine.ejer.ex28({ primeLimitInput: num1 }); break;
            case 'ex29': resultado = combine.ejer.ex29({ matrixInput: valGeneral }); break;
            case 'ex30': resultado = combine.ejer.ex30({ mergeSortInput: valGeneral }); break;

            case 'nombre': resultado = { result: `👤 Autor: ${combine.name()}` }; break;

            default: throw new Error('Operación no implementada');
        }

        if (resultado && resultado.result !== undefined) {
            resultadosDiv.innerText = resultado.result;
            resultadosDiv.style.color = "black";
        }
    } catch (error) {
        resultadosDiv.innerText = `❌ Error: ${error.message}`;
        resultadosDiv.style.color = "red";
    }
}

btncalcular.addEventListener('click', calcular);