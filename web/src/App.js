import { useEffect, useState } from 'react'
import { getUser } from './api'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  const getUserInfo = async () => {
    try {
      const res = await getUser()
      setUsers(res.data)
      console.log(res.data)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <div className="App">
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  )
}

export default App
