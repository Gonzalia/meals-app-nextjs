import MealItem from "./MealItem"
import classes from "./styles/meals-grid.module.css"

const MealsGrid = ({ meals }) => {

  return <ul className={classes.meals}>
    {meals.map(meal => <li key={meal.id}>
      <MealItem {...meal} />

    </li>)}
  </ul>

}

export default MealsGrid