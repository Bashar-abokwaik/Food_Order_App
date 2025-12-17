import { createContext, useState } from "react";

// Create User Progress Context
const UserProgressContext = createContext({
  progress: "", //'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

// User Progress Context Provider component
export function UserProgressContextProvider({ children }) {
  // State to track user progress
  const [userProgress, setUserProgress] = useState("");
  // Functions to update user progress
  // Show cart
  function showCart() {
    setUserProgress("cart");
  }
  // Hide cart and reset progress
  function hideCart() {
    setUserProgress("");
  }
  // Show checkout
  function showCheckout() {
    setUserProgress("checkout");
  }
  // Hide checkout and reset progress
  function hideCheckout() {
    setUserProgress("");
  }
  // Context value to be provided to consumers
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
