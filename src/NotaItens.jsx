import React from 'react';

export default function NotaItens(props) {
    const adicionarNota = () => {
        props.adicionarValor(props.nota.valor);
    };
    return (
        <tr>
            <td>
                <img src={props.nota.foto} alt="Nota" style={{ width: 200, height: 110 }} />
            </td>
            <td>
                <h4>{props.nota.descricao}</h4>
                <h4>Valor R$: {props.nota.valor}</h4>
                <button type="button" className="btn btn-primary m-2" onClick={adicionarNota}>Adicionar</button>
            </td>
        </tr>
    )
}
