import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-20 flex flex-col min-h-screen bg-(--c6) px-15 py-5 rounded-xl items-center gap-4">
      <div className="bg-[url(https://img.freepik.com/premium-photo/green-black-logo-with-green-leaves-it_1308175-138988.jpg)] h-15 w-15 object-contain bg-contain rounded-full"></div>
      <Link
        to="/"
        className="text-(--c9) border-t-3 pt-6 pb-2 w-30 px-12 border-(--c8) hover:cursor-pointer hover:text-green-500 duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </Link>
      <Link
        to="/collections"
        className=" text-(--c9) border-t pt-5 w-15 px-5 border-(--c7) hover:cursor-pointer hover:text-green-500 duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faBox} size="lg" />
      </Link>
      <div className="mt-150 bg-[url(https://i.pinimg.com/736x/be/8f/e9/be8fe982888e315960eff170cad9c275.jpg)] h-15 w-15 object-contain bg-contain rounded-xl cursor-pointer"></div>
    </div>
  );
};

export default Navbar;
