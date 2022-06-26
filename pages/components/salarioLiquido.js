import { useState } from 'react';
import { Col, Row, Form, Button, ListGroup } from 'react-bootstrap';

export default function SalarioLiquido (props) {
    const [salarioBruto, setSalarioBruto] = useState(" ");

    const [salarioLiquido, setSalarioLiquido] = useState("0");
    const [INSS, setINSS] = useState("0");
    const [IRPF, setIRPF] = useState("0");
    const [FGTS, setFGTS] = useState("0");

    let valorINSS;
    let valorIRPF;

    function calcularSalario(){
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

        setINSS(valorINSS.toFixed(2));
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
        setIRPF(valorIRPF.toFixed(2));
    }

    function calcularFGTS(){
        let valor = (salarioBruto / 100) * 8; 
        setFGTS(valor.toFixed(2))
    }

    function calcularSalarioLiq(){
        let valor = salarioBruto - valorINSS - valorIRPF;
        setSalarioLiquido(valor.toFixed(2));
    }

    const stylesheet = {

        form:{
            padding: "100px",
            paddingBottom: "0",
        },

        input: {
            textAlign: "center",
        },
        
        switch:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },

        switchSpacing:{
            width: "20%",
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

        tabelaResultados:{
            padding: "100px",
            paddingTop: "0",
        },

        itemTabelaResultadosLeft:{
            paddingRight: "0",
        },

        itemTabelaResultadosRight:{
            paddingLeft: "0",
        },
    }

    return  <div style={props.style}>
                <Form style={stylesheet.form}>
                    <Col>
                    Salário Bruto:
                    <Form.Control style={stylesheet.input} type="number" placeholder="" value={salarioBruto} onChange={e => setSalarioBruto(e.target.value)}/>
                    <br></br>
                    <Button onClick={()=>calcularSalario()} style={stylesheet.botao} variant="primary">
                    Calcular
                    </Button>
                    </Col>
                </Form>
                <br></br>
                <div style={stylesheet.tabelaResultados}>
                    <ListGroup>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>Salário Líquido:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${salarioLiquido}</ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>INSS:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${INSS}</ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>IRPF:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${IRPF}</ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>FGTS:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${FGTS}</ListGroup.Item>
                            </Col>
                        </Row>
                    </ListGroup>       
                </div>
            </div>
}