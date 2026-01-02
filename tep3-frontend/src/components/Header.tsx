import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Trading Platform</Link>
        <div className="space-x-4">
          <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
          <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
