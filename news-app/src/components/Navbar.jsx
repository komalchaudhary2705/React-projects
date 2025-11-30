
import { Link } from "react-router-dom";
const Navbar = () => {


  return (
    <nav className="bg-teal-900 fixed w-full text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-teal-100">
          News
        </Link>
        <Link to="/" className="text-lg font-bold hover:text-teal-100">
         <span>Home</span>
         <hr className="border-b-2 w-4 "/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
