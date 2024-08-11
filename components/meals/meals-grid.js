import classes from './meal-grid.module.css' 
import MealItem from './mealItem'

export default function MealsGrid({meals}){
    return(
        <ul className={classes.meals}>
            {meals.map((meal)=><li key={meal.id}>
                <MealItem {...meal}/>
            </li>)}
        </ul>
    )
}