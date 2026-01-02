import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Trading Platform</h1>
          <p className="text-xl text-gray-300">Professional Trading Education & Tools</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Trading Signals</h2>
            <p className="text-gray-300 mb-4">Real-time trading signals powered by AI</p>
            <Link to="/dashboard" className="text-blue-400 hover:text-blue-300">Get Started →</Link>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p className="text-gray-300 mb-4">Learn from professional traders</p>
            <Link to="/dashboard" className="text-blue-400 hover:text-blue-300">Learn More →</Link>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">MT5 Bots</h2>
            <p className="text-gray-300 mb-4">Automated trading solutions</p>
            <Link to="/dashboard" className="text-blue-400 hover:text-blue-300">Explore →</Link>
          </div>
        </div>

        <div className="text-center mt-16 space-x-4">
          <Link to="/signin" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            Sign In
          </Link>
          <Link to="/signup" className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

function SimpleDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your trading dashboard</p>
      <Link to="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">← Back to Home</Link>
    </div>
  );
}

function SimpleSignIn() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-700 text-white" />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input type="password" className="w-full p-2 rounded bg-gray-700 text-white" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold">
            Sign In
          </button>
        </form>
        <Link to="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">← Back to Home</Link>
      </div>
    </div>
  );
}

function SimpleSignUp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-700 text-white" />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input type="password" className="w-full p-2 rounded bg-gray-700 text-white" />
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-semibold">
            Sign Up
          </button>
        </form>
        <Link to="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">← Back to Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<SimpleDashboard />} />
        <Route path="/signin" element={<SimpleSignIn />} />
        <Route path="/signup" element={<SimpleSignUp />} />
        <Route path="/admin" element={<SimpleDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
