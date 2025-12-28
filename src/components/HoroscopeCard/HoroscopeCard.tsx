import React from 'react';

interface HoroscopeCardProps {
  sign: string;
  horoscope: string;
  loading: boolean;
}

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({
  sign,
  horoscope,
  loading
}) => (
  <div className="row justify-content-center mt-4">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">
          <h3>🔮 Your {sign} Fortune</h3>
        </div>
        <div className="card-body">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <p className="lead">{horoscope}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default HoroscopeCard;
