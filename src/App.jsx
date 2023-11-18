import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo='#06 - Repetição' color='#FF4C65'>
            <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo='#05 - Componente com Filhos' color='#00C8F8'>
            <Familia sobrenome='Lee'>
                <FamiliaMembro nome='Fulano' />
                <FamiliaMembro nome='John' />
                <FamiliaMembro nome='Rita' sobrenome='Silva' />
            </Familia>
        </Card>
        <Card titulo='#04 - Valor aleatório' color='#FA6900'>
            <Aleatorio max={60} min={1}></Aleatorio>
        </Card>
        <Card titulo='#03 - Fragmento' color='#E94C6F'>
            <Fragmento></Fragmento>
        </Card>
        <Card titulo='#02 - Com parametro' color='#E8B71A'>
            <ComParametro titulo="Situação do aluno" aluno="Luff" nota={9.5} />
        </Card>
        <Card titulo='#01 - Primeiro componente' color='#588C73'>
            <Primeiro></Primeiro>
        </Card>
        </div>
    </div>
);
