import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  // Access cart and user progress contexts
  const cartCts = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  
  // Calculate total number of items in cart
  const totalCartItems = cartCts.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  // Handler to show cart
  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
