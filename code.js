// POBIERZ ELEMENTY Z STRONY
const aValue = document.getElementById('aValue');
const bValue = document.getElementById('bValue');
const cValue = document.getElementById('cValue');
const submitButton = document.getElementById('submitButton');
const deltaWynik = document.getElementById('delta');
const mzWynik = document.getElementById('miejscaZerowe');
const wierzchołekWynik = document.getElementById('wierzchołek');
const ogólnaWynik = document.getElementById('ogólna');
const kanonicznaWynik = document.getElementById('kanoniczna');
const iloczynowaWynik = document.getElementById('iloczynowa');

const makeCalculations = (e) => {
    e.preventDefault();
    // POBIERZ AKTUALNE WARTOSCI A B I C
    let activeA = aValue.value;
    let activeB = bValue.value;
    let activeC = cValue.value;
    
    // OBLICZANIE DELTY
    const delta = obliczDelte(activeA, activeB, activeC);
    obliczMZ(delta);

    // OBLICZANIE P I Q
    const p = obliczP(activeA, activeB);
    const q = obliczQ(activeA, delta);


    // WARUNKI DO POSTACI OGÓLNEJ
    if (activeB < 0 && activeC < 0) {
        ogólnaWynik.textContent = `y = ${activeA}x² - ${-activeB}x - ${-activeC}`;
    } else if (activeB >= 0 && activeC < 0) {
        ogólnaWynik.textContent = `y = ${activeA}x² + ${activeB}x - ${-activeC}`;
    } else if (activeB < 0 && activeC >= 0) {
        ogólnaWynik.textContent = `y = ${activeA}x² - ${-activeB}x + ${activeC}`;
    } else if (activeB >= 0 && activeC >= 0) {
        ogólnaWynik.textContent = `y = ${activeA}x² + ${activeB}x + ${activeC}`;
    }

    // WYŚWIETLANIE WIERZCHOŁKÓW PARABOLI
    wierzchołekWynik.textContent = `(${p}, ${q})`;

    // WARUNKI DO POSTACI KANONICZZNEJ
    if (p < 0 && q < 0) {
        kanonicznaWynik.textContent = `y = ${activeA}(x + ${-p})² + ${q}`;
    } else if (p >= 0 && q < 0) {
        kanonicznaWynik.textContent = `y = ${activeA}(x - ${p})² + ${q}`;
    } else if (p < 0 && q >= 0) {
        kanonicznaWynik.textContent = `y = ${activeA}(x + ${-p})² + ${q}`;
    } else if (p >= 0 && q >= 0) {
        kanonicznaWynik.textContent = `y = ${activeA}(x - ${p})² + ${q}`;
    }
}

const obliczDelte = (a, b, c) => {
    const delta = b**2 - 4 * a * c;
    return deltaWynik.textContent = delta;
}

const obliczMZ = delta => {
    if (delta < 0) {
        return mzWynik.textContent = '0 miejsc zerowych';
    } else if (delta === 0) {
        return mzWynik.textContent = '1 miejsce zerowe';
    } else if (delta > 1) {
        mzWynik.textContent = '2 rózne miejsca zerowe';
    }
}

const obliczP = (a, b) => {
    const p = (- b / (2 * a));
    return p;
}

const obliczQ = (a, delta) => {
    const q = (- (delta) / (4 * a));
    return q;
}

submitButton.addEventListener('click', makeCalculations)
