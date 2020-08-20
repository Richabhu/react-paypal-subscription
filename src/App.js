import React from 'react';
import logo from './logo.svg';
import './App.css';
import PayPalBtn from './components/PayPalBtn'

const paypalSubscribe = (data, actions) => {
  return actions.subscription.create({
    'plan_id': "Plan-ID",
  });
};

const paypalOnError = (err) => {
  console.log("Error")
}

const paypalOnApprove = (data, detail) => {
  console.log("Payapl approved")
};


function App() {
  return (
    <div className="App">
              <PayPalBtn
                amount = "50"
                currency = "USD"
                createSubscription={paypalSubscribe}
                onApprove={paypalOnApprove}
                catchError={paypalOnError}
                onError={paypalOnError}
                onCancel={paypalOnError}
            />
    </div>
  );
}

export default App;
