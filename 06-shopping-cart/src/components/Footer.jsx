import React from "react";
import "./footer.css";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";
const Footer = () => {
  const { filters } = useFilters();
  const { cart } = useCart();
  return (
    <footer className="footer">
      {/* <h4>
        Prueba técnica de React <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContest & useReducer</h5> */}
      {/* {JSON.stringify(filters, null, 2)} */}
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  );
};

export default Footer;
