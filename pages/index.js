import styles from '../styles/index.module.css'
import { useReducer, useState } from 'react';
import React, { Component } from 'react'
import { Container, Col, Row, Form, Button, ButtonGroup, Nav, Navbar, ListGroup } from 'react-bootstrap';

export default function Home(){
    const [salLiq, setSalLiq] = useState("flex");
    const [precoProd, setPrecoProd] = useState("none");
    const [rescisaoContrato, setRescisaoContrato] = useState("none");
    const [ASD3, setASD3] = useState("none");

    const [salarioBruto, setSalarioBruto] = useState(" ");
    const [precoInicial, setPrecoInicial] = useState(" ");
    const [margemLucro, setMargemLucro] = useState(" ");
    const [resSalarioLiquido, setResSalarioLiquido] = useState(" ");
    const [tempoTrabalhado, setTempoTrabalhado] = useState(" ");
    const [feriasVencidas, setFeriasVencidas] = useState(false);

    const [salarioLiquido, setSalarioLiquido] = useState("0");
    const [INSS, setINSS] = useState("0");
    const [IRPF, setIRPF] = useState("0");
    const [FGTS, setFGTS] = useState("0");
    const [VI, setVI] = useState("0");
    const [margem, setMargem] = useState("0");
    const [VL, setVL] = useState("0");
    const [rescisaoFGTS, setRescisaoFGTS] = useState("0");
    const [precoFerias, setPrecoFerias] = useState("0");
    const [valorFinalRescisao, setValorFinalRescisao] = useState("0");

    let valorINSS;
    let valorIRPF;

    let valorVI;
    let valorVCI;

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

    function showSalLiq() {
        setSalLiq("flex");
        setPrecoProd("none");
        setRescisaoContrato("none");
        setASD3("none");
        setSalLiqButton(stylesheet.selected);
        setPrecoProdutoButton();
        setRescisaoContratoButton();
        setASD3Button();
    }

    function showPrecoProduto(){
        setSalLiq("none");
        setPrecoProd("flex");
        setRescisaoContrato("none");
        setASD3("none");
        setSalLiqButton();
        setPrecoProdutoButton(stylesheet.selected);
        setRescisaoContratoButton();
        setASD3Button();
    }

    function showRescisaoContrato() {
        setSalLiq("none");
        setPrecoProd("none");
        setRescisaoContrato("flex");
        setASD3("none");
        setSalLiqButton();
        setPrecoProdutoButton();
        setRescisaoContratoButton(stylesheet.selected);
        setASD3Button();
    }

    function showASD3() {
        setSalLiq("none");
        setPrecoProd("none");
        setRescisaoContrato("none");
        setASD3("flex");
        setSalLiqButton();
        setPrecoProdutoButton();
        setRescisaoContratoButton();
        setASD3Button(stylesheet.selected);
    }

    const stylesheet = {
        content:{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
        },

        navbar:{
            display: "inline-flex",
            marginTop: "65px",
            marginRight: "0",
            height: "65px",
            zIndex: "10",
            width: "100%",
            backgroundColor: "#212529",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
        },

        selected:{
            backgroundColor: "white",
            color: "black",
            border: "white",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
        },

        unselected:{
            color: "white",
        },

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

        salarioLiq: {
            display: salLiq,
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
        },

        precoProd: {
            display: precoProd,
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
        },

        rescisaoContrato: {
            display: rescisaoContrato,
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
        },

        ASD3: {
            display: ASD3,
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
        },
    }

        const [salLiqButton, setSalLiqButton] = useState(stylesheet.selected);
        const [precoProdutoButton, setPrecoProdutoButton] = useState();
        const [rescisaoContratoButton, setRescisaoContratoButton] = useState();
        const [ASD3Button, setASD3Button] = useState();

    return  <div style={stylesheet.content}>
                <ul style={stylesheet.navbar}>
                        <li><button onClick={()=>showSalLiq()} className={styles.navbarItems} style={salLiqButton}>Salario Líquido</button></li>
                        <li><button onClick={()=>showPrecoProduto()} className={styles.navbarItems} style={precoProdutoButton}>Preço Produto</button></li>
                        <li><button onClick={()=>showRescisaoContrato()} className={styles.navbarItems} style={rescisaoContratoButton}>Rescisão de Contrato de Trabalho</button></li>
                        <li><button onClick={()=>showASD3()} style={ASD3Button} className={styles.navbarItems}>ASD</button></li> 
                </ul>
                <div style={stylesheet.salarioLiq}>
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
                <div style={stylesheet.precoProd}>
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
                <div style={stylesheet.rescisaoContrato}>
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
                <div style={stylesheet.ASD3}>
                    
                </div>
            </div> 
}