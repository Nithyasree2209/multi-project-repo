import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  // Check if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-6 text-xl font-bold border-b border-gray-700">
        Technologies
      </div>
      <ul className="p-4 space-y-2 text-base">
        <li>
          <Link
            to="/htmll"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/htmll") ? "text-green-400" : ""
            }`}
          >
            HTML (Hyper Text Markup Language)
          </Link>
        </li>
        <li>
          <Link
            to="/csss"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/csss") ? "text-green-400" : ""
            }`}
          >
            CSS (Cascading Style Sheet)
          </Link>
        </li>
        <li>
          <Link
            to="/bootstrap"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/bootstrap") ? "text-green-400" : ""
            }`}
          >
            Bootstrap
          </Link>
        </li>
        <li>
          <Link
            to="/tailwind"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/tailwind") ? "text-green-400" : ""
            }`}
          >
            Tailwind CSS
          </Link>
        </li>
        <li>
          <Link
            to="/javascript"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/javascript") ? "text-green-400" : ""
            }`}
          >
            JavaScript
          </Link>
        </li>
        <li>
          <Link
            to="/react"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/react") ? "text-green-400" : ""
            }`}
          >
            React
          </Link>
        </li>
        <li>
          <Link
            to="/reactnative"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/reactnative") ? "text-green-400" : ""
            }`}
          >
            React Native
          </Link>
        </li>
        <li>
          <Link
            to="/git"
            className={`px-4 py-2 rounded block transition duration-200 hover:bg-gray-700 ${
              isActive("/git") ? "text-green-400" : ""
            }`}
          >
            Git
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
