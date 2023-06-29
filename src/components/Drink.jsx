import { useState } from "react";


export default function Drink() {
    const [drinkType, setDrinkType] = useState("reds");
    const [drinkList, setDrinkList] = useState();
    
    const getDrink = async(drinkType) => {
        const res = await fetch(`https://api.sampleapis.com/wines/${drinkType}`);
        const data = await res.json();
        setDrinkList(data);
    }


    return (
        <section>
            <nav>
                <button onClick={ () => setDrinkType('reds')}>Red</button>
                <button onClick={ () => setDrinkType('whites')}>White</button>
                <button onClick={ () => setDrinkType('sparkling')}>Sparkling</button>
                <button onClick={ () => setDrinkType('rose')}>Rose</button>
                <button onClick={ () => setDrinkType('dessert')}>dessert</button>
                <button onClick={ () => setDrinkType('port')}>port</button>
            </nav>

            <div className="button-getdrink">
                <button onClick={ () => getDrink(drinkType)}>Get Dranks</button>
            </div>

            <div className="drink-container">
            <h2>{drinkType}</h2>
            <div className="drink-list">
                {
                    !drinkList
                    ?<p>NO DRANK!!!</p>
                    : drinkList.map( (element, index) => {
                        
                        return (
                            <div key={index} className="hover-effect">
                            <img src={element.image} alt="cover" />
                            <h3>{element.wine}</h3>                                
                            <p>Location: {element.location}</p>
                            <p>Rating: {element.rating.average}</p>
                            <p>Reviews: {element.rating.reviews}</p>
                        </div>);
                    })
                }


                </div>
            </div>
        </section>
    )
}