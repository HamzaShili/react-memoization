import { memo, useState } from 'react';
import './App.css';


const Swatch = ({ color }) => {
  console.log(`Swatch rendered ${color}`)
  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: color
      }}
    ></div>
  )
}

const SwatchMemo = memo(Swatch)

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')
  console.log(`App rendered ${appRenderIndex}`)


  return (
    <div className='App'>
      <div>
        <button
          onClick={() => setAppRenderIndex(appRenderIndex + 1)}
        >
          Re-Render App
        </button>
        <button
          onClick={() => setColor(color === 'red' ? 'blue' : 'red')}
        >
          Change color
        </button>
      </div>
      <div>
        <SwatchMemo color={color} />
        <SwatchMemo color={color === 'red' ? 'blue' : 'red'} />

      </div>
    </div>
  );
}

export default App;
