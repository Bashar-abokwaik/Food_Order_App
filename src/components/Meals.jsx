import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

// Configuration for the HTTP request
const requestConfig = {};

// Component to display list of meals
export default function Meals() {
  // Use custom hook to fetch meals data
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []); // Initial data is an empty array

  // Display loading message while fetching data
  if (isLoading) {
    return <p className="center">Feching meals...</p>;
  }

  // Display error message if there was an error fetching data
  if (error) {
    return <Error title="Failed to fetch meals" massage={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
