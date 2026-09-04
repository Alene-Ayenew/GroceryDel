import { BikeIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const user: any = {
    name: "John Doe",
    email: "john@example.com",
    isAdmin: true,
  };
  const { cartCount, setCartOpen } = {
    cartCount: 5,
    setCartOpen: (_data: any) => {},
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-app-border ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center gap-2  text-[22px] font-medium shrink-0"
        >
          <BikeIcon size={24} />
          Instacart
        </Link>
        <div className="w-full flex items-center justify-end gap-4 lg:gap-10"  >
          {/* nav links  */}
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/" className="">Home</Link>
            <Link to="/products" className="">Products</Link>
            <Link to="/deals" className="text-app-orange">Deals</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
