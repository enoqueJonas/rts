import React from 'react';
import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';

const App = () => {
  return(
    <div>
      <GuestList />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
