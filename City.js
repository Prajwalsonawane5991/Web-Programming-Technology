
import {useState} from 'react';

export default function CityDropdown() {
  const cities = ['Mumbai', 'Pune', 'Nagpur', 'Goa', 'Panji'];
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity && <SelectedCity city={selectedCity} />}
    </div>
  );
}

function SelectedCity({ city }) {
  const reversedCity = city.split('').reverse().join('');

  return (
    <div style={{ color: 'red' }}>
      Selected city: {reversedCity}
    </div>
  );
}