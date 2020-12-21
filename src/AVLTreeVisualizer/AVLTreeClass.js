import Node from "./NodeClass"

export default class AVLTree {
    constructor() {
        this.root = null;
        this.size = 0;
        this.height = -1;
    }

    height(node) {
        return node === null ? -1 : node.height;
    }

    calculateTreeHeight() {
        this.height = this.root.height = this.calculateHeight(this.root);
    }

    calculateHeight(node) {
        if (node === null) return -1;
        else {
            let leftHeight = this.calculateHeight(node.left);
            let rightHeight = this.calculateHeight(node.right);
            return 1 + Math.max(leftHeight, rightHeight);
        }
    }

    getNode(val) {
        let current = this.root;
        while (current) {
            if (val === current.value) {
                return current;
            }
            if (val < Number(current.value)) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return current;
    }

    insert(val) {
        if (this.getNode(val)) return -1;
        this.root = this.insertHelper(this.root, val);
        this.setKey(val);
        this.size += 1;
        this.calculateTreeHeight();
    }

    insertHelper(node, val) {
        if (node === null) return new Node(val);

        if (val < node.value) {
            let leftChild = this.insertHelper(node.left, val);
            node.left = leftChild;
            leftChild.parent = node;
        }
        else if (val > node.value) {
            let rightChild = this.insertHelper(node.right, val);
            node.right = rightChild;
            rightChild.parent = node;
        }

        return node;
    }

    delete(val) {
        let node = this.getNode(val);
        if (node.value > node.parent.value) node.parent.right = null;
        else node.parent.left = null;
        node.parent = null;
        this.size -= 1;
    }

    setKey(val) {
        let current = this.root;
        let binaryArray = [1];
        while (current) {
            if (val === current.value) {
                break;
            }
            if (val > current.value) {
                current = current.right;
                binaryArray.push(1);
            } else {
                current = current.left;
                binaryArray.push(0);
            }
        }
        const binaryString = binaryArray.join("");
        current.key = parseInt(binaryString, 2);
    }
}