import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;