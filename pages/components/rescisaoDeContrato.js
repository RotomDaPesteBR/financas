import { useState } from 'react';
import { Col, Row, Form, Button, ListGroup } from 'react-bootstrap';

export default function RescisaoContrato (props) {
    const [resSalarioLiquido, setResSalarioLiquido] = useState(" ");
    const [tempoTrabalhado, setTempoTrabalhado] = useState(" ");
    const [feriasVencidas, setFeriasVencidas] = useState(false);

    const [rescisaoFGTS, setRescisaoFGTS] = useState("0");
    const [precoFerias, setPrecoFerias] = useState("0");
    const [valorFinalRescisao, setValorFinalRescisao] = useState("0");

    function CalcularRescisao(){
        let ResFGTS = ((resSalarioLiquido / 100) * 8) * tempoTrabalhado;
        let quantFerias = 0;
        let valorFerias = 0;
        let valorFinal = 0;

        if (feriasVencidas == true){
            quantFerias = tempoTrabalhado / 12;
            for(quantFerias; quantFerias >= 1; quantFerias--){
                valorFerias += (resSalarioLiquido / 3)
            }
        }
        valorFinal = ResFGTS + valorFerias + parseFloat(resSalarioLiquido);
        setRescisaoFGTS(ResFGTS.toFixed(2));
        setPrecoFerias(valorFerias.toFixed(2));
        setValorFinalRescisao(valorFinal.toFixed(2));
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
                        Salário Líquido:
                        <Form.Control style={stylesheet.input} type="number" placeholder="" value={resSalarioLiquido} onChange={e => setResSalarioLiquido(e.target.value)}/>
                        Tempo Trabalhado (Meses):
                        <Form.Control style={stylesheet.input} type="number" placeholder="" value={tempoTrabalhado} onChange={e => setTempoTrabalhado(e.target.value)}/>
                        <br></br>
                        <div style={stylesheet.switch}>
                            <div style={stylesheet.switchSpacing}>Férias Vencidas:</div>
                            <div><Form.Check type="switch" onChange={e => setFeriasVencidas(e.target.checked)}/></div>
                            <div style={stylesheet.switchSpacing}></div>
                        </div>
                        <br></br>
                        <Button onClick={()=>CalcularRescisao()} style={stylesheet.botao} variant="primary">
                            Calcular
                        </Button>
                    </Col>
                </Form>
                <br></br>
                <div style={stylesheet.tabelaResultados}>
                    <ListGroup>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>Valor Final:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${valorFinalRescisao}</ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>Ferias Vencidas:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${precoFerias}</ListGroup.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={stylesheet.itemTabelaResultadosLeft}>
                                <ListGroup.Item>FGTS:</ListGroup.Item>
                            </Col>
                            <Col style={stylesheet.itemTabelaResultadosRight}>
                                <ListGroup.Item>R${rescisaoFGTS}</ListGroup.Item>
                            </Col>
                        </Row>
                    </ListGroup>
                </div>
            </div>
}