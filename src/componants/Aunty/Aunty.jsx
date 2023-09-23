/* eslint-disable no-unused-vars */
import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    // const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'rani'}></Cousin>
                <Cousin name={'pori'}></Cousin>
            </section>
            {/* <p>Money: {money}</p> */}
        </div>
    );
};

export default Aunty;