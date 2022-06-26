import styles from '../styles/index.module.css'
import { useState } from 'react';

import SalarioLiquido from './components/salarioLiquido';
import PrecoProduto from './components/precoProduto';
import RescisaoContrato from './components/rescisaoDeContrato';

export default function Home(){
    const [salLiq, setSalLiq] = useState("flex");
    const [precoProd, setPrecoProd] = useState("none");
    const [rescisaoContrato, setRescisaoContrato] = useState("none");
    const [ASD3, setASD3] = useState("none");

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
                <SalarioLiquido style={stylesheet.salarioLiq}/>
                <PrecoProduto style={stylesheet.precoProd}>
                
                </PrecoProduto>
                <RescisaoContrato style={stylesheet.rescisaoContrato}>
                    
                </RescisaoContrato>
                <div style={stylesheet.ASD3}>
                    
                </div>
            </div> 
}