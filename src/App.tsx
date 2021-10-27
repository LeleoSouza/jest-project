import { useState } from 'react';

export const replaceCamelWithSpace = (colorName: string) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [btnColor, setBtnColor] = useState('MediumVioletRed');
  const [btnState, setBtnState] = useState(false);
  const textColor = btnColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className='App'>
      {console.log('State:', btnColor)}
      {console.log('const:', textColor)}
      <button
        style={{ backgroundColor: btnState ? 'gray' : btnColor, color: 'white' }}
        onClick={() => setBtnColor(textColor)}
        disabled={btnState}
      >
        Change to {textColor}
      </button>
      <input type='checkbox' id='enable-disable-checkbox' onClick={() => setBtnState(!btnState)} />
      <label htmlFor='enable-disable-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
