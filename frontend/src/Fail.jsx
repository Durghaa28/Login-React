function Fail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-900">
      <div className="bg-red-800 p-10 rounded-2xl shadow-2xl text-center border border-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-red-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <h1 className="text-3xl font-bold text-white mb-2">Login Failed</h1>
        <p className="text-red-300">Invalid username or password</p>
      </div>
    </div>
  )
}

export default Fail
