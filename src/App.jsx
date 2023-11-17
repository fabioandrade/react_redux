import "./App.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default (props) => (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo='#04 - Valor aleatório'>
            <Aleatorio max={60} min={1}></Aleatorio>
        </Card>
        <Card titulo='#03 - Fragmento'>
            <Fragmento></Fragmento>
        </Card>
        <Card titulo='#02 - Com parametro'>
            <ComParametro titulo="Situação do aluno" aluno="Luff" nota={9.5} />
        </Card>
        <Card titulo='#01 - Primeiro componente'>
            <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
