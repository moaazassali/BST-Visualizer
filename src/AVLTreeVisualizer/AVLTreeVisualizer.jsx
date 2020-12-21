import React, { Component, createRef } from "react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import "./componentStyles.css";
import "./inputfield.scss";
import "./addbutton.css";

import AVLTree from "./AVLTreeClass.js";
import NodeCircle from "./NodeCircle.jsx";
import nodesPositions from "./NodesPositions.js";
import Arrow from "./Arrow.jsx"
import arrowPositions from "./ArrowsPositions";

export default class AVLTreeVisualizer extends Component {
    constructor() {
        super();
        this.state = {
            number: "",
            tree: new AVLTree(),
            nodesArray: [],
            arrowsArray: [],
            animatedNodesKeys: [],
            animatedKeyCounter: 0,
            isInputDisabled: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.spawnNode = this.spawnNode.bind(this);
        this.pathAnimation = this.pathAnimation.bind(this);
        this.animateNext = this.animateNext.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: Number(value)
        })
    }

    handleClick(event) {
        event.preventDefault();
        if (this.state.number === "") return;
        if (isNaN(this.state.number)) {
            alert("Please insert a number instead");
            this.setState({ number: "" });
        }
        else if (this.state.tree.size === 31) {
            alert("Maximum tree size of 31 nodes has been reached!");
            this.setState({ number: "" });
        }
        else if (this.state.number > 9999) {
            alert("Please enter a value less than 10,000");
            this.setState({ number: "" });
        }
        else {
            const value = this.state.number;
            if (this.state.tree.insert(value) === -1) {
                alert("Value already exists in the tree!");
                this.setState({ number: "" });
            }
            else if (this.state.tree.height > 4) {
                alert("Inserting this value will result in a total depth of 6 levels. Maximum depth allowed is 5.");
                this.setState({ number: "" });
                this.state.tree.delete(value);
            }
            else {
                let node = this.state.tree.getNode(value);
                this.setState({ currentNode: node }, () => this.pathAnimation(node));
                this.setState({ isInputDisabled: true });
            }
        }
    }

    animateNext() {
        let node = this.state.currentNode;
        // console.log("Log Start");
        // console.log(this.state.animatedNodesKeys.length)
        // console.log(this.state.animatedKeyCounter);
        // console.log("Log End");

        if (this.state.animatedKeyCounter < this.state.animatedNodesKeys.length) {
            let currNode = this[`nodeRef${this.state.animatedNodesKeys[this.state.animatedKeyCounter]}`].current;
            this.setState(prevState => ({ animatedKeyCounter: prevState.animatedKeyCounter + 1 }));
            (node.value >= currNode.state.value) ? currNode.animateGreen() : currNode.animateRed();
        }
        else {
            // console.log("extra");
            // console.log(this.state.animatedNodesKeys);
            this.setState({ animatedKeyCounter: 0 }, () => this.spawnNode(node));
        }
    }

    pathAnimation() {
        let node = this.state.currentNode;
        let nodeBinaryString = Number(node.key).toString(2);
        const keysArray = [];
        for (let index = 1; index < nodeBinaryString.length; index++) {
            let currentBinaryString = nodeBinaryString.slice(0, index);
            let currentKey = parseInt(currentBinaryString, 2);
            keysArray.push(currentKey);
        }

        this.setState({ animatedNodesKeys: keysArray }, function () {
            this.animateNext(node);
        });
    }

    spawnNode(node) {
        const tempNodeInfo = nodesPositions[node.key - 1];
        this[`nodeRef${node.key}`] = createRef();

        const tempNodeCircle = <NodeCircle
            id={`nodeID${node.key}`}
            ref={this[`nodeRef${node.key}`]}
            key={node.key}
            value={node.value}
            colStart={tempNodeInfo.colStart}
            colEnd={tempNodeInfo.colEnd}
            rowStart={tempNodeInfo.rowStart}
            rowEnd={tempNodeInfo.rowEnd}
            animateNode={this.animateNext}
        />

        let nodesArray = [...this.state.nodesArray];
        nodesArray[node.key] = tempNodeCircle;

        let arrowsArray = [...this.state.arrowsArray];
        if (node.key !== 1) {
            const tempArrowInfo = arrowPositions[node.key - 2];
            const tempArrow = <Arrow
                id={`arrowID${node.key}`}
                ref={this[`arrowRef${node.key}`]}
                key={node.key}
                colStart={tempArrowInfo.colStart}
                colEnd={tempArrowInfo.colEnd}
                rowStart={tempArrowInfo.rowStart}
                rowEnd={tempArrowInfo.rowEnd}
                direction={tempArrowInfo.direction}
            />
            arrowsArray[node.key] = tempArrow;
        }

        this.setState({ nodesArray });
        this.setState({ arrowsArray });
        this.setState({ isInputDisabled: false });
        this.setState({ number: "" });
    }


    render() {
        return (
            <div style={{ height: "100vh" }}>

                <div className="header">
                    BINARY SEARCH TREE VISUALIZER
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 6fr", height: "93vh" }}>
                    <div className="sideBar" style={{ gridColumnStart: 1, gridColumnEnd: 2 }}>
                        <form onSubmit={this.handleClick} >
                            <div className="form__group field" >
                                <input type="text" value={this.state.number} className="form__field" id="name" placeholder="Insert a Value" name="number" onChange={this.handleChange} disabled={this.state.isInputDisabled} />
                                <label for="name" className="form__label">Insert value</label>
                            </div>
                        </form>
                        <a className="bt more-bt" onClick={this.handleClick} >
                            <span className="fl"></span><span className="sfl"></span><span className="cross"></span><i></i>
                            <div>add</div>
                        </a>

                        <div className="otherInfo" style={{ marginTop: "auto" }}>
                            <span style={{ fontSize: "1.2em", color: "white" }}><strong>Changelog:</strong> </span>
                            <ul>
                                <li> Added a circular bar representing the size of the tree</li>
                                <li> Added new style and animations to the insert field and button</li>
                            </ul>
                        </div>
                        <div className="otherInfo">
                            <span style={{ fontSize: "1.2em", color: "white" }}><strong>Planned Features:</strong> </span>
                            <ul>
                                <li> Animating the arrows with color as well </li>
                                <li> Adding a slider to change animation speed </li>
                                <li> An option to delete specific nodes</li>
                                <li> Implementing AVL tree data structure </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ gridColumnStart: 2, gridColumnEnd: 3, display: "grid", gridTemplateRows: "20% 80%", padding: "1% 1% 2.5% 1%", gridRowGap: "2.5%" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "9% 90%", height: "100%", gridColumnGap: "1%" }} >
                            <div style={{ backgroundColor: "#424242", borderRadius: "2vh", alignSelf: "center", padding: "5%" }}>
                                <CircularProgressbarWithChildren value={this.state.tree.size} maxValue={31} text={`${Math.round(this.state.tree.size / 31 * 100)}%`} circleRatio={0.75} styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    pathColor: "#ba68c8",
                                    textColor: "#ba68c8",
                                })}>
                                </CircularProgressbarWithChildren>
                                <div style={{ color: "white", textAlign: "center", fontSize: "1.2em" }}> <strong>{`Size: ${this.state.tree.size} /31`} </strong></div>
                            </div>
                            <div style={{ backgroundColor: "#424242", borderRadius: "2vh", padding: "1%", color: "white" }}>
                                <span style={{ fontSize: "1.5em" }}><strong>Tutorial:</strong> </span> <br />  <br />
                                Simply use the interface on the left to interact with the tree by adding a value anywhere from 0 to 9,999. <br/> <br />
                                Limitations: Negative values are not accepted / Repeated values are not accepted / Maximum depth of 5 levels / Maximum of 31 nodes
                            </div>
                        </div>
                        <div className="grid">
                            {this.state.nodesArray}
                            {this.state.arrowsArray}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}