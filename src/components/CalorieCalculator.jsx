import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(0);

  const calculateCalories = () => {
    let BMR;
    if (gender === 'male') {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    let activityMultiplier;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'lightlyActive':
        activityMultiplier = 1.375;
        break;
      case 'moderatelyActive':
        activityMultiplier = 1.55;
        break;
      case 'veryActive':
        activityMultiplier = 1.725;
        break;
      case 'extraActive':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }
    const totalCalories = Math.round(BMR * activityMultiplier);
    setCalories(totalCalories);
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ color: 'blue' }}>Calorie Calculator</h2>
      <table style={{ margin: 'auto' }}>
        <tbody>
          <tr>
            <td><label>Weight (kg):</label></td>
            <td><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label>Height (cm):</label></td>
            <td><input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label>Age (years):</label></td>
            <td><input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label>Activity Level:</label></td>
            <td>
              <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                <option value="sedentary">Sedentary</option>
                <option value="lightlyActive">Lightly Active</option>
                <option value="moderatelyActive">Moderately Active</option>
                <option value="veryActive">Very Active</option>
                <option value="extraActive">Extra Active</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Gender:</label></td>
            <td>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Select your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', margin: '10px', border: 'none' }} onClick={calculateCalories}>Calculate</button>
      {calories > 0 && <div style={{ marginTop: '20px', color: 'purple' }}>Your daily calorie requirement is: {calories}</div>}
    </div>
  );
};

export default CalorieCalculator;