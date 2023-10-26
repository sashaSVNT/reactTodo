import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>Hello</div>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />);