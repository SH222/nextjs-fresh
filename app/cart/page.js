import data from "./data.js";
import Greeting from "./greeting.js";

export default function Cart() {
  let foodCart = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {foodCart.map((item, i) => {
        return <CartItem foodCart={item} />;
      })}
    </div>
  );
}

// 파라미터 문법도 가능
function Banner(props) {
  return <h5>{props.content} 배너 어쩌고</h5>;
}

function Btn(props) {
  return (
    <button className="red-btn" style={{ backgroundColor: props.btnColor, border: "none" }}>
      button
    </button>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.foodCart}</p>
      <p>$40</p>
      <p>1</p>
    </div>
  );
}
