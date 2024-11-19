import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [bottleCart, setBottleCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    const handelAddToCart = bottle => {
        setBottleCart([...bottleCart, bottle]);
    }
console.log(bottleCart)
    return (
        <div>
            <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Bottles: {bottles.length}</h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr'
            }}>
                {
                    bottles.map((bottle, idx) => <Bottle key={idx} bottle={bottle} handelAddToCart={handelAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;