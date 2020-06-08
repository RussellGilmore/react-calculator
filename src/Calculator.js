import React from 'react';
import ReactDOM from "react-dom";
import './Calculator.css';
// Import Materialize
import { Button, Icon, Row, Card, Col } from "react-materialize";
// Import Panel
import Panel from "./Panel";

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            calculationDisplay: 0.0,
            actionDisplay: 0.0,
        };
    }

    handleClick = () => {
        this.setState({
            calculationDisplay: 55.00
        });
    }


    render() {
        return (
            <div className="calculator">
                <Row>
                <Col m={3}>
                    <Card
                        className="blue-grey darken-1"
                        closeIcon={<Icon>close</Icon>}
                        revealIcon={<Icon>more_vert</Icon>}
                        textClassName="white-text"
                        title="React Calculator"
                    >   
                        <div>
                            <Display calculationDisplay={this.state.calculationDisplay}/>
                        </div>
                        <div>
                            <Panel />
                        </div>
                        
                    </Card>
                </Col>
            </Row>
            </div>
        );
    }
}

const Display = (props) => {
    return (
        <div>
            <h2>{props.calculationDisplay}</h2>
        </div>
    );
}

export default Calculator;
