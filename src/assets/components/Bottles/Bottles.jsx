import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            {
                bottles.map((bottle, idx) => <Bottle key={idx} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;