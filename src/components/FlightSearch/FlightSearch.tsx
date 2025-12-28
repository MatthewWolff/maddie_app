import React from 'react';
import { validateFlightNumber } from '../../utils/flightValidation';

interface FlightSearchProps {
  flightNumber: string;
  onFlightNumberChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FlightSearch: React.FC<FlightSearchProps> = ({
  flightNumber,
  onFlightNumberChange,
  onSubmit
}) => {
  const [error, setError] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateFlightNumber(flightNumber);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid flight number');
      return;
    }
    
    setError('');
    onSubmit(e);
  };

  const handleInputChange = (value: string) => {
    setError(''); // Clear error when user types
    onFlightNumberChange(value);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className={`form-control ${error ? 'is-invalid' : ''}`}
              placeholder="Enter flight number (e.g., AS486)"
              value={flightNumber}
              onChange={(e) => handleInputChange(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Search Flight
            </button>
          </div>
          {error && (
            <div className="invalid-feedback d-block">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
