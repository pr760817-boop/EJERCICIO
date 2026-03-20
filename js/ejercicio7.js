function mostrarSuma() {
    // Pedimos inicio y fin directamente con prompt para integrarse con main.js
    const inicio = parseInt(prompt("Ingresa el número de inicio:"));
    const fin = parseInt(prompt("Ingresa el número final:"));

    if (isNaN(inicio) || isNaN(fin)) {
        alert("❌ Ingresa valores válidos");
        return;
    }

    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) suma += i;
    }

    alert(`La suma de los números pares entre ${inicio} y ${fin} es: ${suma}`);
}

export { mostrarSuma };
