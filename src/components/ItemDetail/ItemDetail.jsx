import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    return (
        <div className="row g-0 cards">
            <div className="col-md-4">
                <img src={ `../img/${item.img}`} className="img-fluid rounded-start" alt="producto" />
            </div>
            <div className="col-md-8">
                <div className="card-body ">
                    <h5 className="card-tittle">{item.nombre}</h5>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock}/>
                    <button className="btn btn-dark">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
