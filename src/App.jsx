import './App.css'
import {Filter} from './components/Filter'
import { UserRow } from './components/UserRow'
import { useState, useEffect } from 'react'

function App() {
  const [ data, setData ] = useState([]);
  const [ filter, setFilter ] = useState("");

  const filteredData = ((data || [])
    .filter((user) => user.name.includes(filter)));

  useEffect(() => {
    const url = "http://localhost:3000/users";

    fetch(url)
      .then((resp) => resp.json())
      .then(setData)
  }, [])

  return (
    <>
    <Filter filter={filter} setFilter={setFilter}></Filter>
      <table>
        <tbody>
          { filteredData.map(
              user => <UserRow user={user}/>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
