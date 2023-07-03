
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodList.css';

const FoodList = () => {
  
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Fetch food items from the server/database
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/foodlist');
        const data = response.data;
        setFoodItems(data);
      } catch (error) {
        console.log('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div className="food-list-container">
      <h1>Food List</h1>
      {foodItems.map((foodItem) => (
        <div key={foodItem.id} className="food-card">
          <img src={foodItem.image} alt={foodItem.name} />
          <h2>{foodItem.name}</h2>
          <Link to={`/fooddetails/${foodItem.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FoodList;

