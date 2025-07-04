import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoHome, IoSearch } from "react-icons/io5";
import { IoMdContact, IoMdInformationCircle } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function NavBar({ searchText, setSearchText }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/home"); // Ensure it navigates to the home page for search results
  };

  return (
    <div className="navBar">
      <div>
        <img className="logo" src="logo.png" alt="can't load img" />
      </div>
      <div className="navContent">
        <div className="SearchContainer">
          <IoSearch className="SearchIcon" />
          <input 
  className="search border border-red-500 focus:border-red-700 rounded-md px-3 py-2 outline-none"
  type="text"
  placeholder="Search restaurants..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>

          
        </div>
        <Link to="/home" className="nav-link"><IoHome /> Home</Link>
        <Link to="/about" className="nav-link"><IoMdInformationCircle /> About</Link>
        <Link to="/contact" className="nav-link"><IoMdContact /> Contact</Link>
        <Link to="/cart" className="nav-link"><CiShoppingCart /> Cart</Link>
        <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
      </div>
    </div>
  );
}

export default NavBar;
