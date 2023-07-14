import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingProvider } from "./ShoppingContext";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";

export default function App() {
  const renderPage = () => {
    switch (page) {
      case "catalog":
        return <Catalog />;

      case "cart":
        return <Cart />;

      default:
        return "";
    }
  };

  const [page, setPage] = useState("catalog");
  const changePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#top"
                onClick={() => changePage("catalog")}
              >
                Product Catalog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#top"
                onClick={() => changePage("cart")}
              >
                Shopping Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <ShoppingProvider>{renderPage()}</ShoppingProvider>
      </div>
    </div>
  );
}
