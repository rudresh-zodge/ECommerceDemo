import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory(); // will  give the browzer's hsitory
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"></input>
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // code inside reducer.js
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          history.push("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
