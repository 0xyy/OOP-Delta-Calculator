const aInput = document.getElementById('a-value');
const bInput = document.getElementById('b-value');
const cInput = document.getElementById('c-value');
const submitButton = document.getElementById('submit-button');
const deltaResultEl = document.getElementById('delta');
const rootsEl = document.getElementById('roots');
const apexEl = document.getElementById('apex');
const generalFormEl = document.getElementById('general-form');
const canonicalFormEl = document.getElementById('canonical-form');

const showResults = e => {
    e.preventDefault();

    const aValue = +aInput.value;
    const bValue = +bInput.value;
    const cValue = +cInput.value;

    try {
        const delta = new Delta(aValue, bValue, cValue);

        deltaResultEl.textContent = delta.getDelta();
        rootsEl.textContent = delta.getRoots();
        apexEl.textContent = delta.getVertexOfAParabola();
        generalFormEl.textContent = delta.getGeneralForm();
        canonicalFormEl.textContent = delta.getCanonicalForm();
    } catch (err) {
        alert(err.name + ': ' + err.message);
    }

    aValue.value = '';
    bValue.value = '';
    cValue.value = '';
}

submitButton.addEventListener('click', showResults);
