import React from 'react';
import FlightSearch from '../../components/FlightSearch';
import FlightStats from '../../components/FlightStats';
import HoroscopeCard from '../../components/HoroscopeCard';
import { FlightData } from '../../types';
import { getCustomHoroscope } from '../../utils/horoscope';
import { MOCK_FLIGHT_DATA, generateRandomFlightData } from '../../utils/flightData';

interface FlightTrackerProps {
  initialFlight: string;
}

const FlightTracker: React.FC<FlightTrackerProps> = ({ initialFlight }) => {
  const [flightNumber, setFlightNumber] = React.useState<string>(initialFlight);
  const [flightData, setFlightData] = React.useState<FlightData | null>(null);
  const [horoscope, setHoroscope] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchHoroscope = React.useCallback(async () => {
    setLoading(true);
    
    // Use custom travel horoscopes based on flight performance if flight data exists
    if (flightData) {
      const customHoroscope = getCustomHoroscope(flightData.onTimePercentage);
      setHoroscope(customHoroscope);
      setLoading(false);
      return;
    }
    
    // Default horoscope if no flight data
    const randomPerformance = Math.floor(Math.random() * 40) + 60;
    const customHoroscope = getCustomHoroscope(randomPerformance);
    setHoroscope(customHoroscope);
    setLoading(false);
  }, [flightData]);

  React.useEffect(() => {
    fetchHoroscope();
  }, [fetchHoroscope]);

  React.useEffect(() => {
    if (flightData) {
      fetchHoroscope();
    }
  }, [flightData, fetchHoroscope]);

  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const data = MOCK_FLIGHT_DATA[flightNumber.toUpperCase()] || generateRandomFlightData();
    const flightInfo = { ...data, flight: flightNumber.toUpperCase() };
    setFlightData(flightInfo);
  }, [flightNumber]);

  React.useEffect(() => {
    if (initialFlight) {
      const data = MOCK_FLIGHT_DATA[initialFlight.toUpperCase()] || generateRandomFlightData();
      const flightInfo = { ...data, flight: initialFlight.toUpperCase() };
      setFlightData(flightInfo);
    }
  }, [initialFlight]);

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 10s ease infinite'
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div className="container pt-5">
        <h1 className="text-center mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          ✈️ Flight Delay Tracker 🔮
        </h1>
        
        <FlightSearch
          flightNumber={flightNumber}
          onFlightNumberChange={setFlightNumber}
          onSubmit={handleSubmit}
        />

        {flightData && <FlightStats flightData={flightData} />}

        <HoroscopeCard
          sign="Traveler"
          horoscope={horoscope}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default FlightTracker;
