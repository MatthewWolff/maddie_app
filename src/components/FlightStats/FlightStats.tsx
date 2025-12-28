import React from 'react';

interface FlightData {
  onTimePercentage: number;
  avgDelay: number;
  totalFlights: number;
  flight?: string;
}

interface FlightStatsProps {
  flightData: FlightData;
}

const FlightStats: React.FC<FlightStatsProps> = ({ flightData }) => (
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">
          <h3>Flight {flightData.flight} Statistics</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 text-center">
              <h4 className="text-success">{flightData.onTimePercentage}%</h4>
              <p>On-Time Performance</p>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="text-warning">{flightData.avgDelay} min</h4>
              <p>Average Delay</p>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="text-info">{flightData.totalFlights}</h4>
              <p>Total Flights Analyzed</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: `${flightData.onTimePercentage}%` }}
              >
                {flightData.onTimePercentage}% On Time
              </div>
            </div>
          </div>
          {flightData.onTimePercentage < 75 && (
            <div className="alert alert-danger mt-3 text-center">
              <strong>🔮 ur fucked</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default FlightStats;
