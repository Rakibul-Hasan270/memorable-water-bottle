import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLocalStorage, getStoredCart } from "../../../Utility/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [bottleCart, setBottleCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    // load data form local STG
    useEffect(() => {
        if (bottles.length > 0) {
            const getStoredData = getStoredCart();

            const saveCart = [];
            for (const id of getStoredData) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle);
                }
            }
            setBottleCart(saveCart)
        }
    }, [bottles]);

    const handelAddToCart = bottle => {
        setBottleCart([...bottleCart, bottle]);
        addToLocalStorage(bottle.id);
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Bottles: {bottles.length}</h3>;
            <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Cart: {bottleCart.length}</h1>;
            <div style={{display:'flex',justifyContent:'center'}}>
                {
                    bottleCart.map(bottle => <Cart key={bottle.id} bottle={bottle}></Cart>)
                }
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                {
                    bottles.map((bottle, idx) => <Bottle key={idx} bottle={bottle} handelAddToCart={handelAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;