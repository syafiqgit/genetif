import { Link } from "react-router-dom";
import logo2 from "@/assets/Gawean-01.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="w-full md:px-10 px-5 py-5 bg-color_2 fixed top-0 shadow-md">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src={logo2} alt="" className="lg:w-44 md:w-40 w-32" />
        </Link>
        <div className="md:flex hidden items-center gap-7">
          <Link to="/">
            <div className="text-white lg:text-lg">
              <p className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Home
              </p>
            </div>
          </Link>
          <Link to="/services">
            <div className="text-white lg:text-lg">
              <p className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Services
              </p>
            </div>
          </Link>
          <Link to="/works">
            <div className="text-white lg:text-lg">
              <p className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Works
              </p>
            </div>
          </Link>
          <Link to="/blogs">
            <div className="text-white lg:text-lg">
              <p className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                Blogs
              </p>
            </div>
          </Link>
        </div>
        <Link to="/contact">
          <div className="md:block hidden bg-blue-700 hover:bg-blue-500 transition-all px-5 py-2 rounded-md border border-blue-400">
            <p className="text-white lg:text-2xl md:text-xl font-semibold tracking-wide">
              Contact
            </p>
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="md:hidden">
              <i className="fa-solid fa-bars fa-2xl" style={{color: "#3B82F6"}}></i>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-color_2 text-white ">
            <DropdownMenuItem>Services</DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Works</DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Blogs</DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Contacts</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
