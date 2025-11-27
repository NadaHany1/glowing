import React from 'react'

interface LoginProps{
    isOpen:boolean,
    toggleLogin: () => void
}

const Login = ({isOpen, toggleLogin} : LoginProps) => {
  return (
    <div>
        {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4">
          <div className="bg-white p-8 rounded-xl w-full max-w-xl shadow-2xl">
            <div className="flex justify-end">
              <button onClick={toggleLogin} className="text-xl text-gray-500 hover:text-black">
                X
              </button>
            </div>
            <h2 className="text-3xl font-semibold text-center mb-6 text-black">Login</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-primary focus:border-b-5 outline-none" required />
              <input type="text" placeholder="Phone number" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-primary focus:border-b-5 outline-none" required />
              <input type="text" placeholder="Username" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-primary focus:border-b-5 outline-none" required />
              <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded px-4 py-3 focus:border-primary focus:border-b-5 outline-none" required />
              <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-primary transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
