export default class Node {
    constructor(value) {
        this.value= value;
        this.parent= null;
        this.left= null;
        this.right= null;
        this.height= 0;
        this.key = 0;
    }
}