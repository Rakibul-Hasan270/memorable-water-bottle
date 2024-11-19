import './Bottle.css';

const Bottle = ({ bottle, handelAddToCart }) => {
    const { id, img, name, price } = bottle;
    
    return (
        <div className="bottle">
            <h3>Bottle ID: {id}</h3>
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <img src={img} alt="" /><br />
            <button onClick={() => handelAddToCart(bottle)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default Bottle;