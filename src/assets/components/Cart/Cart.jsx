import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({ bottle }) => {
    console.log(bottle)
    return (
        <div className='cart-container'>
            <img src={bottle.img} alt="" />
        </div>
    );
};

Cart.propTypes = {
    bottle: PropTypes.array.isRequired
}

export default Cart;