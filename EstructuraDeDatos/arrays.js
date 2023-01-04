class MyArray {
    constructor() {
        this.lenght = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastItem;
    }
}

const myArray = new MyArray();