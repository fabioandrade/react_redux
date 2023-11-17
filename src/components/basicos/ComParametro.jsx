export default function ComParametro(props) {
    console.log(props);
    const status = props.nota >= 7.0 ? 'Aprovado' : 'Reprovado';
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p><strong> { props.aluno }</strong> tem nota <strong>{ props.nota }</strong> e está <strong>{ status }</strong>. </p>
        </div>
    )
}