import { useState } from 'react';
import { Col, Row, Form, Button, ListGroup } from 'react-bootstrap';

export default function PrecoProduto (props) {
    const [precoInicial, setPrecoInicial] = useState(" ");
    const [margemLucro, setMargemLucro] = useState(" ");

    const [VI, setVI] = useState("0");
    const [margem, setMargem] = useState("0");
    const [VL, setVL] = useState("0");

    let valorVI;
    let valorVCI;

    function calcularPreco(){
        calcularVI()
        calcularVCI()
        calcularVL()
    }

    function calcularVI(){
        let PIS = (precoInicial / 100) * 0.65;
        let CONFINS = (precoInicial / 100) * 3;
        valorVI = PIS + CONFINS;
        setVI(valorVI.toFixed(2));
    }

    function calcularVCI(){
        valorVCI = parseFloat(precoInicial) + valorVI;
    }

    function calcularVL(){
        let MDL = (valorVCI / 100) * margemLucro;
        let valorVL = valorVCI + MDL;
        setMargem(MDL.toFixed(2));
        setVL(valorVL.toFixed(2));
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
                        Preço Inicial:
                        <Form.Control style={stylesheet.input} type="number" placeholder="" value={precoInicial} onChange={e => setPrecoInicial(e.target.value)}/>
                        Margem de Lucro:
                        <Form.Control style={stylesheet.input} type="number" placeholder="" value={margemLucro} onChange={e => setMargemLucro(e.target.value)}/>
                        <br></br>
                        <Button onClick={()=>calcularPreco()} style={stylesheet.botao} variant="primary">
                            Calcular
                        </Button>
                    </Col>
                </Form>
                <br></br>
                <div style={stylesheet.tabelaResultados}>
                    <ListGroup>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>Preço Final:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${VL}</ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>Impostos:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${VI}</ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>Lucro:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${margem}</ListGroup.Item>
                            </Col>
                        </Row>
                    </ListGroup>
                </div> 
            </div>
}