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
