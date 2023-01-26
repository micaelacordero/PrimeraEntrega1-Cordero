
const CartWidget = ({cantidadCarrito}) => {
    return (
        <div>

        <img src="%PUBLIC_URL%/imagen/cart.png" alt="logo"/>
        <p>{cantidadCarrito}</p>

        </div>
    );
}
export default CartWidget;
