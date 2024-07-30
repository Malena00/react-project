import React from 'react';
import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  render() {
    return (
      <h1>Шапочка</h1>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Header />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

