import React, { Component } from "react";

export default class NodeCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,

            colStart: props.colStart,
            colEnd: props.colEnd,
            rowStart: props.rowStart,
            rowEnd: props.rowEnd,

            border: "1px solid white",
            boxShadow: "0px 0px 3px 2px white",
            color: "white",

            animation: "null",
            animationDone: false,
        };

        this.animateGreen = this.animateGreen.bind(this);
        this.animateRed = this.animateRed.bind(this);
    }

    animateGreen() {
        this.setState({ animation: "changeToGreen 0.5s" })
    }

    animateRed() {
        this.setState({ animation: "changeToRed 0.5s" })
    }

    render() {
        const nodeStyle = {
            height: "2.5em",
            width: "2.5em",
            gridColumnStart: this.state.colStart,
            gridColumnEnd: this.state.colEnd,
            gridRowStart: this.state.rowStart,
            gridRowEnd: this.state.rowEnd,

            borderRadius: "50%",
            border: this.state.border,
            boxShadow: this.state.boxShadow,
            color: this.state.color,
            fontWeight: "bold",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            animation: this.state.animation
        };

        return (
            <div style={nodeStyle} onAnimationEnd={() => {
                this.setState({animation: null}, () => this.props.animateNode())
            }} >
                {this.state.value}
            </div>
        );
    }
}