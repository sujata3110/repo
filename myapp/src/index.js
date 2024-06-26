import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



function Form() {
  return (
    <form> 
      Name: <input type="text" id="name" name="name" /><br />
      Password: <input type="password" name="password" /><br />
      Email: <input type="email" name="email" /><br />
     DOB:<input type="date" name="dob"/><br/>
     Repassword:<input type="password"name=""/><br/>
      <input type="submit" name="submit" value="Submit" />

    </form>
  )
}
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<Form />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
