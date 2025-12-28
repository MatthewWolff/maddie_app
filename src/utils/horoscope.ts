import { TRAVEL_HOROSCOPES } from '../constants/horoscopes';

export const getCustomHoroscope = (onTimePercentage: number): string => {
  const horoscopes = onTimePercentage > 75 ? TRAVEL_HOROSCOPES.positive : TRAVEL_HOROSCOPES.negative;
  return horoscopes[Math.floor(Math.random() * horoscopes.length)];
};
