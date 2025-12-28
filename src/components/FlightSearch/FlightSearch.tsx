import React from 'react';

interface FlightSearchProps {
  flightNumber: string;
  onFlightNumberChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FlightSearch: React.FC<FlightSearchProps> = ({
  flightNumber,
  onFlightNumberChange,
  onSubmit
}) => (
  <div className="row justify-content-center">
    <div className="col-md-6">
      <form onSubmit={onSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter flight number (e.g., AS486)"
            value={flightNumber}
            onChange={(e) => onFlightNumberChange(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit">
            Search Flight
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default FlightSearch;
