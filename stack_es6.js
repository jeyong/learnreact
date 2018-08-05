
class Stack {
    constructor() {
        this.top = -1;
        this.arr = [];
    }

    pop() {
        if (this.arr.length == 0) {
            this.top = -1;
            return;
        }

        let r = this.arr[this.top--];
        this.arr = this.arr.slice(0,this.arr.length-1);
        return r;
    }
    push(e) {
        this.arr[++this.top] = e;
    }
}

let s = new Stack();
console.log(s.arr);
console.log(s.pop());

s.push(1);
s.push(2);
s.push(3);

console.log(s.arr)

console.log(s.pop());
console.log(s.pop());
console.log(s.arr);
