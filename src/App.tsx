import React from "react";
import "./App.css";
import ErrorBoundary from "./utils/ErrorBoundary";
import AppRoutes from "./routes/AppRoutes"



const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </div>
  );
};

export default App;
