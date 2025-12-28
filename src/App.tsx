import React from 'react';
import AgeVerification from './components/AgeVerification';
import FlightTracker from './pages/FlightTracker';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = React.useState<boolean>(false);
  const [initialFlight, setInitialFlight] = React.useState<string>('');

  const handleVerification = (verified: boolean, flight: string) => {
    setIsVerified(verified);
    setInitialFlight(flight);
  };

  return (
    <div>
      {!isVerified ? (
        <AgeVerification onVerified={handleVerification} />
      ) : (
        <FlightTracker initialFlight={initialFlight} />
      )}
    </div>
  );
};

export default App;
