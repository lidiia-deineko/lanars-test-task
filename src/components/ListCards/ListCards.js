import React, { useEffect, useRef, useState } from "react";
import { createRandomArr } from "../../utilities/ArrayUtilities"

const ListCards = (props) => {
    const [arrCards, setArrCards] = useState([]);

    const cards = useRef();


    useEffect(() => {
        setInterval(() => {
            cards.current.classList.add('hide');
            cards.current.classList.remove('disable');
        }, 5000);
    }, [])

    useEffect(()=> {
        let arrCards = createRandomArr(16);
        setArrCards(arrCards);
    }, []);
    

    let i = 0;

    const listCardsRender = arrCards.map((elem, index) => {
        i++;
        if(i === 8){
            i = 0;
            return <React.Fragment key={index}><div className="card" data-value={elem}  onClick={props.clickOnCard}><span className="card-value">{elem}</span></div><br /></React.Fragment>
        }

        return <div className="card" key={index} data-value={elem}  onClick={props.clickOnCard}><span className="card-value">{elem}</span></div>
    })

  return(
    <div className="container disable" ref={cards}>
        {listCardsRender}
    </div>
  )
}

export default ListCards;