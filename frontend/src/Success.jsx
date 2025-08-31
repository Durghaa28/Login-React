function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-900">
      <div className="bg-green-800 p-10 rounded-2xl shadow-2xl text-center border border-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-green-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>

        <h1 className="text-3xl font-bold text-white mb-2">Login Successful!</h1>
        <p className="text-green-300">Welcome back 🎉</p>
      </div>
    </div>
  )
}

export default Success
