import './App.css'
import {Filter} from './components/Filter'
import { UserRow } from './components/UserRow'
import { useState, useEffect } from 'react'

function App() {
  const [ data, setData ] = useState([]);
  const [ filter, setFilter ] = useState("");

  useEffect(() => {
    const url = "http://localhost:3000/users";

    fetch(url).then(function(resp) {
      return(resp.json())
    }).then(function(users) {
      setData(users)
    })
  }, [])
console.log(filter);
  return (
    <>
    <Filter filter={filter} setFilter={setFilter}></Filter>
      <table>
        <tbody>
          { data.filter(function(user) {
            return(user.name.includes(filter))
          }).map(User => {
            return(<UserRow user={User}/>)
          })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
