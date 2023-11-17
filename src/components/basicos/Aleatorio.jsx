import React from "react";

export default (props) => {

    const {min, max} = props;
    const aleatorio = parseInt(Math.random() * (1 + max - min)) + min;

    return (
        <>
            <p>valor mínimo: { props.min }</p>
            <p>valor máximo: { props.max }</p>
            <p>Número aleatório: { aleatorio }</p>
        </>
    )
};