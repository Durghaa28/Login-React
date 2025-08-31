import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function handleUser(evt) {
    setUser(evt.target.value)
  }

  function handlePass(evt) {
    setPass(evt.target.value)
  }

  function check() {
    var logindetails = axios.post("http://localhost:5000/login", {
      username: user,
      password: pass,
    })
    logindetails.then(function (data) {
      if (data.data === true) {
        navigate("/success")
      } else {
        navigate("/fail")
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <input
            onChange={handleUser}
            name="username"
            placeholder="Username"
            className="px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            onChange={handlePass}
            name="password"
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={check}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
