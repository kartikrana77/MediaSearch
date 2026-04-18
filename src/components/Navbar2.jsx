import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="flex md:hidden bg-(--c6) px-5 py-5 rounded-xl items-center w-100 fixed bottom-0 left-1 justify-between z-10">
   <div className="bg-[url(https://img.freepik.com/premium-photo/green-black-logo-with-green-leaves-it_1308175-138988.jpg)] h-12 w-12 object-contain bg-contain rounded-full"></div>
      <Link
        to="/"
        className="text-(--c9) w-30 px-12  hover:cursor-pointer hover:text-green-500 duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </Link>
      <Link
        to="/collections"
        className=" text-(--c9)  w -30 px-12  hover:cursor-pointer hover:text-green-500 duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faBox} size="lg" />
      </Link>
      <div className="bg-[url(https://i.pinimg.com/736x/be/8f/e9/be8fe982888e315960eff170cad9c275.jpg)] h-12 w-12 object-contain bg-contain rounded-xl cursor-pointer"></div>
</div>

  )
}

export default Navbar2