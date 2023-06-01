export default function AddVal() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col m-3">
                    <h2>Adicionadas: [{}]</h2>
                </div>

                <div className="col m-3">
                    <h2>Total R$:[{}]</h2>
                </div>

                <div className="col m-3">
                    <button type="button" className="btn btn-success m-2">Concluir Saque</button>
                    <button type="button" className="btn btn-danger">Limpar</button>
                </div>
            </div>
        </div>
    )
}