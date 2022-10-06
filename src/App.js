import logo from './logo.svg';
import './App.css';
import {useCallback, useEffect, useState } from "react";

import ArrayUtilities from './utilities/ArrayUtilities';

function App() {

  const [isClickedCard, setClickedCard] = useState(false);
  const [firstCard, setFirstCard] = useState('');
  const [secondCard, setSecondCard] = useState('');

  const arrCards = ArrayUtilities.getTwoDimensionalArray(16, 8)

  // useEffect(()=>{
  //   const cardList = document.querySelectorAll('.card')
  //   setTimeout(() => {
  //     cardList.forEach(elem => elem.classList.add('hide'))
  //   console.log(cardList)

  //   }, 5000)
  // }, [])

  const clickOnCard = useCallback((event) => {
    console.log(event.target.dataset.value)
    event.target.classList.add('clicked')
  }, [])

  

  const listCardsRender = arrCards.map((elem, index) => 
    <div className='card-wrapper' key={index}>
      {elem.map((elem, index) => 
        <div className='card' key={index} data-value={elem} onClick={clickOnCard}>{elem}</div>)}
    </div>
  )

  return (
    <div className="App">
     {listCardsRender}
    </div>
  );
}

export default App;
