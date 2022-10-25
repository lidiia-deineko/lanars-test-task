import './App.css';
import './media.css'
import {useCallback, useRef, useState } from "react";

import ListCards from './components/ListCards/ListCards';
import { checkValues } from './utilities/HelperUtilities';

function App() {
  const [arrClickedCards, setArrClickedCards] = useState([]);
  const [counter, setCounter] = useState(0);

  const finish = useRef();

  const clickCard = useCallback((event) => {
    const target = event.target;
    target.classList.add('clicked');
    const newArr = [...arrClickedCards, target];
    setArrClickedCards(newArr);

    if(newArr.length === 1){
      newArr[0].classList.add('disable');
    }
    
    if(newArr.length !== 2){
      return
    }

    const isEqual = checkValues(newArr[0].dataset.value, newArr[1].dataset.value)

    if(isEqual){
      setTimeout(()=>{
        newArr[0].classList.add('show', 'disable');
        newArr[1].classList.add('show', 'disable');
        setCounter(counter+1);
        if(counter === 15){
          finish.current.classList.add('finish')
        }
      }, 500);
   
    }else{
      setTimeout(()=>{
        newArr[0].classList.remove('clicked', 'disable');
        newArr[1].classList.remove('clicked');
      }, 500);
    
    }
    setArrClickedCards([]);
    
    
  }, [arrClickedCards]);

  return (
    <div className="App">
      <h2 className='title'>Mahjong</h2>
      <ListCards clickOnCard={clickCard} />
      <div className='game-end_wrap' ref={finish}>
        <div className='game-end' >You won!</div>
      </div>
    </div>
  );
}

export default App;
