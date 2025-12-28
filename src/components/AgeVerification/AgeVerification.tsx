import React from 'react';

interface AgeVerificationProps {
  onVerified: (verified: boolean, flightNumber: string) => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerified }) => {
  const [flightNumber, setFlightNumber] = React.useState<string>('');
  const [isAdult, setIsAdult] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdult) {
      onVerified(true, flightNumber);
    } else {
      alert('You must be 18 or older to use this service.');
    }
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease infinite'
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
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="card-body">
                <h2 className="card-title text-center mb-4">✈️ Flight & Fortune Tracker 🔮</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="flight" className="form-label">Enter your flight number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="flight"
                      placeholder="e.g., AS486"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="ageCheck"
                      checked={isAdult}
                      onChange={(e) => setIsAdult(e.target.checked)}
                      required
                    />
                    <label className="form-check-label" htmlFor="ageCheck">
                      I am 18 years or older
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Get My Flight & Fortune
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
