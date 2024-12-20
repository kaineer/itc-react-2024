import { data } from './data'

function App() {
  return (
    <>
      <table>
        <tbody>
          {
            data.map((user) => (
              <tr>
                <td>{ user.name }</td>
                <td>{ user.username }</td>
                <td>{ user.email }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default App
