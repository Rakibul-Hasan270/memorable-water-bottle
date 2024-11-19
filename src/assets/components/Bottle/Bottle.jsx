import './Bottle.css';

const Bottle = ({ bottle }) => {
    console.log(bottle);
    const { id, img, name, price } = bottle;
    return (
        <div className="bottle">
            <h3>Bottle ID: {id}</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;