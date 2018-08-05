class Queue {
    constructor() {
        this.head = -1;
        this.tail = -1;
        this.arr = [];
    }

    dequeue() {
        if (this.arr.length == 0){
            this.head = -1;
            this.tail = -1;
            return ;
        }

        let r = this.arr[this.head];
        this.arr = this.arr.slice(1, this.arr.length);
        return r;
    }

    enqueue(e) {
        if (this.arr.length == 0) {
            this.head = 0;
            this.tail = -1;
        }
        this.arr[++this.tail] = e
    }
}

let q = new Queue();

console.log(q.dequeue());
q.enqueue(1);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.arr);
console.log("enqueue test");

q.enqueue(1);
console.log(q.arr);
q.enqueue(2);
q.enqueue(3);
console.log(q.arr);
console.log(q.dequeue())
console.log(q.arr);
console.log(q.dequeue())
