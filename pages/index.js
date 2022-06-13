import styles from '../styles/index.module.css'
import { useReducer, useState } from 'react';
import React, { Component } from 'react'
import { Container, Col, Row, Form, Button, ButtonGroup, Nav, Navbar } from 'react-bootstrap';

export default function Home(){
    const [salLiq, setSalLiq] = useState("flex");
    const [ASD, setASD] = useState("none");
    const [ASD2, setASD2] = useState("none");
    const [ASD3, setASD3] = useState("none");
    const [salarioBruto, setSalarioBruto] = useState(" ");
    const [salarioLiquido, setSalarioLiquido] = useState("0");
    const [INSS, setINSS] = useState("0");
    const [IRPF, setIRPF] = useState("0");
    const [FGTS, setFGTS] = useState("0");
    let valorINSS;
    let valorIRPF;
    

    function calcular(){
        calcularINSS();
        calcularIRPF();
        calcularFGTS();
        calcularSalarioLiq();
    }

    function calcularINSS(){
        valorINSS = salarioBruto; 
        if (valorINSS < 1212){
            valorINSS = (valorINSS / 100) * 7.5
        }else if (valorINSS < 2427.35){
            valorINSS = (valorINSS / 100) * 9
        }else if (valorINSS < 3641.03){
            valorINSS = (valorINSS / 100) * 12
        }else if (valorINSS < 7087.22){
            valorINSS = (valorINSS / 100) * 14
        }else{
            valorINSS = (valorINSS / 100) * 14
        }

        setINSS(valorINSS);
    }

    function calcularIRPF(){
        valorIRPF = salarioBruto; 
        if (valorIRPF < 1903.98){
            valorIRPF = 0
        }else if (valorIRPF < 2826.65){
            valorIRPF = (valorIRPF / 100) * 7.5
        }else if (valorIRPF < 3751.05){
            valorIRPF = (valorIRPF / 100) * 15
        }else if (valorIRPF < 4664.68){
            valorIRPF = (valorIRPF / 100) * 22.5
        }else{
            valorIRPF = (valorIRPF / 100) * 27.5
        }
        setIRPF(valorIRPF);
    }

    function calcularFGTS(){
        let valor = (salarioBruto / 100) * 8; 
        setFGTS(valor)
    }

    function calcularSalarioLiq(){
        let valor = salarioBruto - valorINSS - valorIRPF;
        setSalarioLiquido(valor);
    }

    function showSalLiq() {
        setSalLiq("flex");
        setASD("none");
        setASD2("none");
        setASD3("none");
    }

    function showASD() {
        setSalLiq("none");
        setASD("flex");
        setASD2("none");
        setASD3("none");
    }

    const stylesheet = {
        content:{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
        },

        navbar:{
            top: "65px",
            height: "65px",
            zIndex: "10",
            width: "100%",
        },

        form:{
            padding: "100px",
        },

        input: {
            textAlign: "center",
        },

        operacao:{
            fontSize: "20px",
        },

        botao: {
            width: "100%",
        },
        resultado: {
            textAlign: "center",
        },

        salarioLiq: {
            display: salLiq,
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
        },
    }

    return  <div style={stylesheet.content}>
                <Navbar style={stylesheet.navbar} bg="dark" variant='dark'>
                    <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-center" variant="pills" defaultActiveKey="sal">
                        <Nav.Link onClick={()=>showSalLiq()} eventKey="sal">Salario Líquido</Nav.Link>
                        <Nav.Link onClick={()=>showASD()} eventKey="asd">ASD</Nav.Link>
                        <Nav.Link onClick={()=>showASD()} eventKey="asd2">ASD</Nav.Link>
                        <Nav.Link onClick={()=>showASD()} eventKey="asd3">ASD</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>  
                    </Container>
                </Navbar>
                <div style={stylesheet.salarioLiq}>
                    <Form style={stylesheet.form}>
                        <Col>
                        Salário Bruto:
                        <Form.Control style={stylesheet.input} type="number" placeholder="" value={salarioBruto} onChange={e => setSalarioBruto(e.target.value)}/>
                        <br></br>
                        <Button onClick={()=>calcular()} style={stylesheet.botao} variant="primary">
                        Calcular
                        </Button>
                        </Col>
                    </Form>
                    <br></br>
                    <Row>
                    <Col>
                    <p style={stylesheet.resultado}>Salário Liquido:</p>
                    <p style={stylesheet.resultado}>INSS:</p>
                    <p style={stylesheet.resultado}>IRPF:</p>
                    <p style={stylesheet.resultado}>FGTS:</p>
                    </Col>
                    <Col>
                    <p style={stylesheet.resultado}>R${salarioLiquido}</p>
                    <p style={stylesheet.resultado}>R${INSS}</p>
                    <p style={stylesheet.resultado}>R${IRPF}</p>
                    <p style={stylesheet.resultado}>R${FGTS}</p>
                    </Col>
                    </Row>
                </div>
                
            </div> 
}

