import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';


export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {

    const [money, setMoney] = useState(1000);
    const asset = 'diamond';

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value="gold">
                        <section className="flex">
                        <Dad asset={asset}></Dad>
                            <Uncle asset={asset}></Uncle>
                            <Aunty></Aunty>
                        </section>
                </AssetContext.Provider>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;