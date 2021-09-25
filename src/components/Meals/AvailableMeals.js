import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'idly',
    description: 'Soft like a Sponge',
    price: 22.99,
  },
  {
    id: 'm2',
    name:'Pongal',
    description: 'Delicious Breakfast!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Meals',
    description: 'Balanced Lunch',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Vegetable Salad',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
