// Common IATA airline codes for validation
export const VALID_IATA_CODES = [
  'AA', 'AC', 'AF', 'AI', 'AM', 'AR', 'AS', 'AT', 'AV', 'AY', 'AZ',
  'B6', 'BA', 'BG', 'BR', 'BT',
  'CA', 'CI', 'CX', 'CZ',
  'DL', 'DY',
  'EI', 'EK', 'ET', 'EY',
  'F9', 'FI', 'FR',
  'G3', 'GA', 'GF',
  'HA', 'HU', 'HV',
  'IB', 'IC', 'IE', 'IG', 'IT', 'IX',
  'JL', 'JQ', 'JU',
  'KE', 'KL', 'KQ', 'KU',
  'LA', 'LH', 'LO', 'LX', 'LY',
  'MF', 'MH', 'MS', 'MU',
  'NH', 'NK', 'NZ',
  'OA', 'OK', 'OS', 'OU', 'OZ',
  'PC', 'PG', 'PR', 'PS', 'PX',
  'QF', 'QR', 'QS',
  'RJ', 'RO', 'RV',
  'S7', 'SA', 'SB', 'SK', 'SN', 'SQ', 'SU', 'SV', 'SY',
  'TA', 'TG', 'TK', 'TN', 'TP', 'TR', 'TU', 'TW',
  'UA', 'UL', 'UN', 'US', 'UX',
  'VA', 'VN', 'VS', 'VX', 'VY',
  'W6', 'WF', 'WN', 'WS',
  'XL', 'XQ',
  'Y4', 'YM',
  'ZB', 'ZH'
];

export const validateFlightNumber = (flightNumber: string): { isValid: boolean; error?: string } => {
  // Remove spaces and convert to uppercase for validation
  const cleanedFlight = flightNumber.replace(/\s+/g, '').toUpperCase();
  
  if (!cleanedFlight || cleanedFlight.length < 3) {
    return { isValid: false, error: 'Flight number must be at least 3 characters' };
  }

  // Extract airline code (first 2 characters) and flight number
  const airlineCode = cleanedFlight.substring(0, 2);
  const flightNum = cleanedFlight.substring(2);

  // Validate airline code
  if (!VALID_IATA_CODES.includes(airlineCode)) {
    return { isValid: false, error: `Invalid airline code: ${airlineCode}. Please use a valid IATA airline code.` };
  }

  // Validate flight number (should be numeric)
  if (!/^\d+$/.test(flightNum)) {
    return { isValid: false, error: 'Flight number must contain only digits after the airline code' };
  }

  return { isValid: true };
};
