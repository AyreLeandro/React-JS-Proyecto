import './Item.css'

export function Item({ name, description, image, price, children }) {
    return (
        <div className='product-card'>
            <img src={image} alt={`foto de ${name}`} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p className='parrafo-precio'>Precio: <strong>${price}</strong></p>

            {children}
        </div>
    )
};
// Lo comentado es para agregar un contador de producto dentro de la tarjeta
// pero hay que modificar el codigo del boton para que reciba las cantidades