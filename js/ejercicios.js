// Función auxiliar para procesar cadenas de números o letras
const parseArrayBySpace = (str) => {
    return str && typeof str === 'string' ? str.trim().split(/\s+/) : [];
};

// --- BLOQUE 1-5 ---
export const ejercicio1 = () => ({ result: `Números del 1 al 10: ${[1,2,3,4,5,6,7,8,9,10].join(', ')}` });
export const ejercicio2 = () => {
    let suma = 0;
    for (let i = 1; i <= 100; i++) suma += i;
    return { result: `La suma del 1 al 100 es: ${suma}` };
};
export const ejercicio3 = (inputs) => {
    let a = Number(inputs.numA), b = Number(inputs.numB), pares = [];
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++) if (i % 2 === 0) pares.push(i);
    return { result: `Pares: ${pares.join(', ')}` };
};
export const ejercicio4 = () => {
    let res = "";
    for (let i = 1; i <= 10; i++) res += `5 x ${i} = ${5 * i}\n`;
    return { result: res };
};
export const ejercicio5 = (inputs) => {
    let f = 1, n = Number(inputs.numeroFactorial);
    for (let i = 1; i <= n; i++) f *= i;
    return { result: `Factorial de ${n}: ${f}` };
};

// --- BLOQUE 11-30 ---
export function ex11(i){
    const a = parseArrayBySpace(i.vectorInput);
    return { result: `Suma: ${a.reduce((acc,b)=>acc+Number(b),0)}` };
}
export function ex12(i){
    const a = parseArrayBySpace(i.arrayInput).map(Number);
    return { result: `Máximo: ${Math.max(...a)}` };
}
export function ex13(i){
    const a = parseArrayBySpace(i.dataInput);
    const pos = a.indexOf(String(i.searchInput));
    return { result: pos !== -1 ? `Encontrado en pos ${pos}` : "No encontrado" };
}
export function ex14(i){
    return { result: `Invertido: ${parseArrayBySpace(i.arrayInput14).reverse().join(' ')}` };
}
export function ex15(i){
    const a = parseArrayBySpace(i.numbersInput).filter(n => Number(n)%2===0);
    return { result: `Pares totales: ${a.length}` };
}
export function ex16(i){
    const a = parseArrayBySpace(i.valuesInput).map(Number);
    return { result: `Promedio: ${a.length ? a.reduce((acc,b)=>acc+b,0)/a.length : 0}` };
}
export function ex17(i){
    const a = [...new Set(parseArrayBySpace(i.duplicatesInput))];
    return { result: `Únicos: ${a.join(' ')}` };
}
export function ex18(i){
    const a = parseArrayBySpace(i.sortInput).map(Number).sort((a,b)=>a-b);
    return { result: `Ordenado: ${a.join(' ')}` };
}
export function ex19(i){
    const a = parseArrayBySpace(i.productInput).map(Number);
    return { result: `Producto: ${a.reduce((acc,b)=>acc*b,1)}` };
}
export function ex20(i){
    const arr = parseArrayBySpace(i.lettersInput);
    const vowels = ['a','e','i','o','u','á','é','í','ó','ú'];
    let c = arr.filter(l => vowels.includes(String(l).toLowerCase())).length;
    return { result: `Vocales encontradas: ${c}` };
}
export function ex21(i){
    const raw = (i.matrixInput||'').trim();
    if(!raw) return { result: 'Sin datos' };
    const rows = raw.split(';').map(r => r.trim().split(/\s+/).map(Number));
    let trans = rows[0].map((_, colIndex) => rows.map(row => row[colIndex]));
    return { result: 'Transpuesta:\n' + trans.map(r=>r.join(' ')).join('\n') };
}
export function ex22(i){
    const A = parseArrayBySpace(i.vectorAInput).map(Number);
    const B = parseArrayBySpace(i.vectorBInput).map(Number);
    if(A.length !== B.length) return { result: 'Error: Longitudes diferentes' };
    let s = A.reduce((acc, val, idx) => acc + (val * B[idx]), 0);
    return { result: `Producto punto: ${s}` };
}
export function ex23(i){
    const X = parseArrayBySpace(i.vectorXInput).map(Number);
    const Y = parseArrayBySpace(i.vectorYInput).map(Number);
    let conv = new Array(X.length + Y.length - 1).fill(0);
    for(let a=0; a<X.length; a++)
        for(let b=0; b<Y.length; b++) conv[a+b] += X[a] * Y[b];
    return { result: `Convolución: ${conv.join(' ')}` };
}
export function ex24(i){
    const arr = parseArrayBySpace(i.sortedArrayInput).map(Number);
    const val = Number(i.searchValue);
    let lo=0, hi=arr.length-1;
    while(lo<=hi){
        let mid = Math.floor((lo+hi)/2);
        if(arr[mid]===val) return { result: `Encontrado en índice ${mid}` };
        arr[mid] < val ? lo = mid + 1 : hi = mid - 1;
    }
    return { result: 'No encontrado' };
}
export function ex25(i){
    let arr = parseArrayBySpace(i.rotateInput).map(Number);
    const k = Number(i.kInput) % arr.length;
    let res = [...arr.slice(-k), ...arr.slice(0, -k)];
    return { result: `Rotado: ${res.join(' ')}` };
}
export function ex26(i){
    let a = parseArrayBySpace(i.subarrayInput).map(Number);
    if(!a.length) return { result: "Array vacío" };
    let mS=a[0], mE=a[0];
    for(let j=1;j<a.length;j++){ mE=Math.max(a[j],mE+a[j]); mS=Math.max(mS,mE); }
    return { result: `Suma máxima: ${mS}` };
}
export function ex27(i){
    let a = parseArrayBySpace(i.array1Input).map(Number), b = parseArrayBySpace(i.array2Input).map(Number);
    return { result: `Merge: ${[...a,...b].sort((x,y)=>x-y).join(' ')}` };
}
export function ex28(i){
    let l = Number(i.primeLimitInput), p = [];
    for(let j=2;j<=l;j++){
        let isP = true;
        for(let k=2;k*k<=j;k++) if(j%k===0) isP=false;
        if(isP) p.push(j);
    }
    return { result: `Primos: ${p.join(', ')}` };
}
export function ex29(i){ 
    return { result: "Multiplicación matrices: Ingrese en formato '1 2 ; 3 4' en el Input General" }; 
}
export function ex30(i){
    const a = parseArrayBySpace(i.mergeSortInput).map(Number).sort((x,y)=>x-y);
    return { result: `MergeSort: ${a.join(' ')}` };
}