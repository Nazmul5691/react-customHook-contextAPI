import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin asset={asset} name={'raji'}></Cousin>
                <Cousin name={'rahiki'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;