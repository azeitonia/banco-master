import { useState, useEffect } from 'react';
import { dados } from '../public/notas.js'
import NotaItens from './NotaItens.jsx';

export default function NotasDisp() {
    const [notas, setNotas] = useState([])

    useEffect(() => {
        setNotas(dados)
    }, [])

    const tabelaNotas = notas.map(nota => (
        <NotaItens key={nota.id} nota={nota} />
    ))

    return (
        <div className="container mt-2">
            <h2>Notas Disponíveis:</h2>
            <table className='table mt-2'>
                <tbody>
                    {tabelaNotas}
                </tbody>
            </table>
        </div>
    )
}
