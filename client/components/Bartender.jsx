import React, { useState, useEffect } from 'react';
// Using hooks going establish a state as well as functionality to updating(replacing) state
const Bartender = (props) => {
  const [drink, setDrink] = useState({});
  const [ingred, setIngred] = useState([]);
  // Establish ismounted as true in order to prove component mounted
  useEffect(() => {
    let isMounted = true;
    // Make a fetch request to the api of drinks for specicifc drinks object
    let url = '/api/';
    if (props.genres.length !== 0) {
      url += 'specificDrink?genre=' + props.genres[0];
    } else {
      url += 'drink';
    }
    fetch(url)
      .then((data) => data.json())
      .then((updatedData) => {
        if (isMounted) {
          setDrink(updatedData);
<<<<<<< HEAD
          getIngredients();
          props.openDrink(updatedData);
=======
          // After running data through json parser we are going to update drinks using setDrinka
          let index = 1;
          // Create a var for an index
          const curIngred = [];
          // Create an array for the ingredients from drink
          while (updatedData[`strIngredient${index}`] !== null) {
            // Using a while loop, continue to iterate through strIngredients till value is null
            // Push each non-null value into the curIngred array
            curIngred.push(updatedData[`strIngredient${index}`]);
            // Increment in the index
            index++;
          }
          // Set the state of the ingredients with setIngred function passing in curIngredarray
          setIngred(curIngred);
>>>>>>> 56b8566dd002837ed120173e8d8186c7dbd66bf1
        }
      })
      // Catch any errors that occure during this whole fetch process to the drinks API
      .catch(() => console.log('fetching drinks in Bartender'));

    return () => {
      // Change value of isMounted to false because component was not rendered
      isMounted = false;
    };
  }, []);
<<<<<<< HEAD

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
=======
  // Stringafy all the elements of the curIngreds array using a for loop
  let strIngred = '';
  for (let i = 0; i < ingred.length; i++) {
    strIngred += ingred[i];
    if (ingred[i + 1]) strIngred += ', ';
  }
  // set up a return for our Bartendercard with drink: name, image,ingredients and instructions
  return (
    <div tabIndex="-1" className="bartender">
      <div className="bartender-content" onClick={props.popupClick}>
        <h2 className="drink-name">{drink.strDrink}</h2>
        <img className="drink-image" src={drink.strDrinkThumb} alt="" />
        <div>
          <b>Ingredients: </b>
          {strIngred}
        </div>
        <div>
          <b>Instructions: </b>
          {drink.strInstructions}
        </div>
>>>>>>> 56b8566dd002837ed120173e8d8186c7dbd66bf1
      </div>
    </div>
  );
};
export default Bartender;
