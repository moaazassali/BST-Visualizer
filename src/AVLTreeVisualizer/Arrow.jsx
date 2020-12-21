import React, { Component } from "react";
import ArrowCreate, { DIRECTION } from "react-arrows";

export default class Arrow extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const containerStyle = {
            gridColumnStart: this.props.colStart,
            gridColumnEnd: this.props.colEnd,
            gridRowStart: this.props.rowStart,
            gridRowEnd: this.props.rowEnd,
            position: "relative",
        }

        let fromClass;
        if (this.props.direction === 0) fromClass = "topRight";
        if (this.props.direction === 1) fromClass = "topLeft";
        if (this.props.direction === 2) fromClass = "topRight33";
        if (this.props.direction === 3) fromClass = "topLeft33";
        if (this.props.direction === 4) fromClass = "topRight60";
        if (this.props.direction === 5) fromClass = "topLeft60";
        
        let toClass;
        if (this.props.direction === 0) toClass = "bottomLeft";
        if (this.props.direction === 1) toClass = "bottomRight";
        if (this.props.direction === 2) toClass = "bottomLeft33";
        if (this.props.direction === 3) toClass = "bottomRight33";
        if (this.props.direction === 4) toClass = "bottomLeft60";
        if (this.props.direction === 5) toClass = "bottomRight60";


        return (
            <div style={containerStyle}>
                <div id={`${this.props.id}x1`} className={fromClass}></div>
                <div id={`${this.props.id}x2`} className={toClass}></div>

                <ArrowCreate
                    className="arrow"
                    from={{
                        direction: DIRECTION.BOTTOM,
                        node: () => document.getElementById(`${this.props.id}x1`),
                        translation: [0, 0]
                    }}
                    to={{
                        direction: DIRECTION.TOP,
                        node: () => document.getElementById(`${this.props.id}x2`),
                        translation: [0, 0]
                    }}
                    head={{
                        distance: 0.99
                    }}
                />
            </div>
        )
    }
}