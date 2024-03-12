import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {

  const [watches, setwatches] = useState([]);
  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setwatches(data))
  }, [])

  // const watches = [
  //   { id: 1, name: 'Apple Watch', price: 200 },
  //   { id: 2, name: 'Samsung Watch', price: 300 },
  //   { id: 3, name: 'Mi Watch', price: 400 }
  // ]
  // const watches = [
  //   { id: 1, name: 'Apple Watch Series 7', price: 399.99 },
  //   { id: 2, name: 'Samsung Galaxy Watch 4', price: 249.99 },
  //   { id: 3, name: 'Garmin Venu 2', price: 399.99 },
  //   { id: 4, name: 'Fitbit Sense', price: 299.95 },
  //   { id: 5, name: 'Huawei Watch GT 3', price: 249.99 },
  // ];

  return (
    <>
      <h2>Vite + React</h2>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
