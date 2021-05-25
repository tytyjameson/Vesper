import React, { useState, useEffect } from 'react';

const Bartender = (props) => {
  const [drink, setDrink] = useState({});
  const [ingred, setIngred] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch('/api/specificDrink?genre=' + props.genres[0])
      .then((data) => data.json())
      .then((updatedData) => {
        if (isMounted) {
          setDrink(updatedData);
          getIngredients();
          props.openDrink(updatedData);
        }
      })
      .catch(() => console.log('fetching drinks in Bartender'));

    return () => {
      isMounted = false;
    };
  }, []);

  const getIngredients = () => {
    let index = 1;
    const curIngred = [];
    // console.log(drink['strIngredient'+index])
    while (!drink['strIngredient' + index]) {
      curIngred.push(drink['strIngredient' + index]);
      index++;
    }
    setIngred(curIngred);
  };

  return (
    <div tabIndex="-1" className="bartender">
      <div className="bartender-content" onClick={props.popupClick}>
        {/* <p>{ingred}</p> */}
        <h2>{drink.strDrink}</h2>
        <img id="drinkImage" src={drink.strDrinkThumb} alt="" />
        <p>{drink.strInstructions}</p>
      </div>
    </div>
  );
};
export default Bartender;
