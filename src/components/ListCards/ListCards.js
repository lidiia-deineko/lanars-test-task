import { useEffect, useRef, useState } from "react";
import ArrayUtilities from "../../utilities/ArrayUtilities"

const ListCards = (props) => {
    const [arrCards, setArrCards] = useState([])

    useEffect(()=> {
        let arrCards = ArrayUtilities.getTwoDimensionalArray(16, 8);
        setArrCards(arrCards)
        
    }, []);
    
    const listCardsRender = arrCards.map((elem, index) => 
        <div className='card-wrapper' key={index}>
        {elem.map((elem, index) => 
            <div className='card' key={index} data-value={elem} onClick={props.clickOnCard}>{elem}</div>)}
        </div>
    )

  return(
    <div className="container">
        {listCardsRender}
    </div>
  )
}

export default ListCards