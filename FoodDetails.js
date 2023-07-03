
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './FoodDetails.css';

const FoodDetails = () => {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/fooddetails/${id}`);
        const data = response.data;
        setFoodItem(data[0]);
      } catch (error) {
        console.log('Error fetching food item:', error);
      }
    };

    fetchFoodItem();
  }, [id]);

  if (!foodItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="food-details-container">
      <h1>Food Details</h1>
      <div className="food-details">
        <img className="food-details-image" src={foodItem.image} alt={foodItem.name} />
        <h2 className="food-details-title">{foodItem.name}</h2>
        <p className="food-details-description">{foodItem.discription}</p>
        <button className="food-details-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default FoodDetails;











