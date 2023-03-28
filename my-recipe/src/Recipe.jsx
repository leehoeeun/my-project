import { db } from './firestore';
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect  } from 'react';



function Recipe(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
  }, [])

  function getRecipes(params) {
    // db는 firestore에서 보낸 변수이고, 두번째 인수는 firebase에서 가져올 이름, 
    const recipeCollectionRef = collection(db, 'recipes')
    getDocs(recipeCollectionRef)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error.message))

  }

  return (
    <>
      <h4>레시피 정보 가져오기</h4>
    </>
  )
}

export default Recipe;