// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import TestComponent from '../src/components/Test';
// import TestComponent_3 from '../src/components/Test_3';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <TestComponent></TestComponent>
//       <TestComponent_3></TestComponent_3>
//     </>
//   );
// }

// export default App;

// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TestComponent from '../src/components/Test';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auction" element={<TestComponent />} />
        {/* <Route path="/auction" element={<TestComponent />} />
        <Route path="/check-in" element={<CheckInVenuesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
    </Layout>
  </Router>
);

export default App;
