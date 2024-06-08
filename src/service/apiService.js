import axios from 'axios';

const CAR_API_URL = 'https://exam-server-7c41747804bf.herokuapp.com/carsList';
const API_URL = import.meta.env.VITE_BASE_URL  + '/api/rentals/calculate';

const getCarsList = async () => {
  try {
    const response = await axios.get(CAR_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars list:', error);
    throw error;
  }
};

const calculateRentalCharges = async (reservationData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      throw new Error('Failed to calculate rental charges');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export { getCarsList, calculateRentalCharges };
