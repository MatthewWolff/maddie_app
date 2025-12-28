import { FlightData } from '../types';

export const MOCK_FLIGHT_DATA: Record<string, FlightData> = {
  'AS486': { onTimePercentage: 78, avgDelay: 12, totalFlights: 245 },
  'UA123': { onTimePercentage: 85, avgDelay: 8, totalFlights: 312 },
  'DL456': { onTimePercentage: 72, avgDelay: 15, totalFlights: 189 }
};

export const generateRandomFlightData = (): FlightData => ({
  onTimePercentage: Math.floor(Math.random() * 40) + 60,
  avgDelay: Math.floor(Math.random() * 20) + 5,
  totalFlights: Math.floor(Math.random() * 200) + 100
});
