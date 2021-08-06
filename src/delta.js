class Delta {
    #aValue;

    #bValue;

    #cValue;

    #p;

    #q;

    constructor(aValue, bValue, cValue) {
        if (aValue == '' || bValue == '' || cValue == '') {
            throw new TypeError('Enter a number!');
        }

        this.#aValue = aValue;
        this.#bValue = bValue;
        this.#cValue = cValue;
        this.#p = (- this.#bValue / (2 * this.#aValue));
        this.#q = (- (this.getDelta()) / (4 * this.#aValue));
    }

    getDelta() {
        return this.#bValue**2 - 4 * this.#aValue * this.#cValue;
    }

    getRoots() {
        if (this.getDelta() < 0) {
            return '0 roots';
        } else if (this.getDelta() === 0) {
            return '1 roots';
        } else if (this.getDelta() > 1) {
            return '2 different roots';
        }
    }

    getVertexOfAParabola() {
        return `(${this.#p}, ${this.#q})`;
    }

    getGeneralForm() {
        if (this.#bValue < 0 && this.#cValue < 0) {
            return `y = ${this.#aValue}x² - ${-this.#bValue}x - ${-this.#cValue}`;
        } else if (this.#bValue >= 0 && this.#cValue < 0) {
            return `y = ${this.#aValue}x² + ${this.#bValue}x - ${-this.#cValue}`;
        } else if (this.#bValue < 0 && this.#cValue >= 0) {
            return`y = ${this.#aValue}x² - ${-this.#bValue}x + ${this.#cValue}`;
        } else if (this.#bValue >= 0 && this.#cValue >= 0) {
            return `y = ${this.#aValue}x² + ${this.#bValue}x + ${this.#cValue}`;
        }
    }

    getCanonicalForm() {
        if (this.#p < 0 && this.#q < 0) {
            return `y = ${this.#aValue}(x + ${-this.#p})² + ${this.#q}`;
        } else if (this.#p >= 0 && this.#q < 0) {
            return `y = ${this.#aValue}(x - ${this.#p})² + ${this.#q}`;
        } else if (this.#p < 0 && this.#q >= 0) {
            return`y = ${this.#aValue}(x + ${-this.#p})² + ${this.#q}`;
        } else if (this.#p >= 0 && this.#q >= 0) {
            return`y = ${this.#aValue}(x - ${this.#p})² + ${this.#q}`;
        }
    }
}









