import React from 'react';
import PropTypes from "prop-types";
import "./Panel.css";
// Import Materialize
import { Button, Icon, Row, Col } from "react-materialize";

class Panel extends React.Component {

    static propTypes = {
        clickHandler: PropTypes.func,
      };

      handleClick = buttonName => {
        this.props.clickHandler(buttonName);
      };
      

    render() {
        return (
            <div>
                <Row>
                    <Col><Button name="A/C" clickHandler={this.handleClick}>A/C</Button></Col>
                    <Col><Button>+/-</Button></Col>
                    <Col><Button>%</Button></Col>
                    <Col><Button>/</Button></Col>
                </Row>
                <Row>
                    <Col><Button>7</Button></Col>
                    <Col><Button>8</Button></Col>
                    <Col><Button>9</Button></Col>
                    <Col><Button>*</Button></Col>
                </Row>
                <Row>
                    <Col><Button>4</Button></Col>
                    <Col><Button>5</Button></Col>
                    <Col><Button>6</Button></Col>
                    <Col><Button>-</Button></Col>
                </Row>
                <Row>
                    <Col><Button>1</Button></Col>
                    <Col><Button>2</Button></Col>
                    <Col><Button>3</Button></Col>
                    <Col><Button>+</Button></Col>
                </Row>
                <Row>
                    <Col><Button>0</Button></Col>
                    <Col><Button>.</Button></Col>
                    <Col><Button>=</Button></Col>
                </Row>
            </div>
        );
    }


}

export default Panel;