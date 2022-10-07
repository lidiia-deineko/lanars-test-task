import logo from './logo.svg';
import './App.css';
import {useCallback, useEffect, useState } from "react";

import ListCards from './components/ListCards/ListCards';

function App() {
  const [arrClickedCards, setArrClickedCards] = useState([]);

  useEffect(()=>{
    setTimeout(() => {
      const cards = document.querySelectorAll('.card')
      console.log(cards)
      cards.forEach(elem => elem.classList.add('show'))
    }, 0)
    setTimeout(() => {
      const cards = document.querySelectorAll('.card')
      console.log(cards)
      cards.forEach(elem => elem.classList.remove('show'))
    }, 5000)
    
  }, [])

  const clickCard = useCallback((event) => {
    console.log(event.target)
    event.target.classList.add('clicked')
    const newArr = [...arrClickedCards, event.target]
    setArrClickedCards(newArr)
    console.log(newArr, 'newArr')
    console.log(arrClickedCards, 'arrClickedCards')
    
    if(newArr.length === 2){
      console.log('2')
      const res = checkValus(newArr[0].dataset.value, newArr[1].dataset.value)
      if(res){
        setTimeout(()=>{
          newArr[0].classList.add('hide')
          newArr[1].classList.add('hide')
          newArr[0].classList.add('disable')
          newArr[1].classList.add('disable')
        }, 500)
     
      }else{
        setTimeout(()=>{
          newArr[0].classList.remove('clicked')
          newArr[1].classList.remove('clicked')
        }, 500)
      
      }
      setArrClickedCards([])
    }
  }, [arrClickedCards])

  const checkValus = (a, b) => {
    if(a == b){
      return true
    } else {
      return false
    }

  }


  return (
    <div className="App">
      <h2 className='title'>Mahjong</h2>
      <ListCards clickOnCard={clickCard} />
    </div>
  );
}

export default App;
