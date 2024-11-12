import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fees = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); // Ensure it's true initially
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    // console.log(cartData)
    if (token) {
      try {
        await axios.post(
          "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
        console.log(cartData);
        toast("added cart");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (erroe) {}
      }
    }
    return totalCount;
  };
  // const updateQuantity = async (itemId, size, quantity) => {
  //   let cartData = structuredClone(cartItems);
  //   cartData[itemId][size] = quantity;
  //   setCartItems(cartData);
  // };
  // const updateQuantity = async (itemId, size, quantity) => {
  //   // Clone the cart data
  //   let cartData = structuredClone(cartItems);

  //   // Update the quantity in the local cart data
  //   cartData[itemId][size] = quantity;
  //   setCartItems(cartData);

  //   // Send the updated quantity to the backend
  //   if (token) {
  //     try {
  //       await axios.post(
  //         "/api/cart/add",
  //         { itemId, size, quantity },
  //         { headers: { token } }
  //       );
  //       // toast("Cart added");
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Failed to update cart quantity on server");
  //     }
  //   }
  // };
  const updateQuantity = async (itemId, size, quantity) => {
    // Clone the cart data
    let cartData = structuredClone(cartItems);

    // Update the quantity in the local cart data
    if (quantity === 0) {
      // If quantity is 0, delete the item locally
      delete cartData[itemId][size];

      // If no sizes remain for this item, remove the item itself
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }

      setCartItems(cartData); // Update local state to reflect deletion

      // Send delete request to the backend
      if (token) {
        try {
          await axios.post(
            "/api/cart/delete",
            { itemId, size },
            { headers: { token } }
          );
          // Optionally, display a success message
          // toast("Item removed from cart");
        } catch (error) {
          console.log(error);
          toast.error("Failed to delete item from cart on server");
        }
      }
    } else {
      // For non-zero quantities, just update the cart locally
      cartData[itemId][size] = quantity;
      setCartItems(cartData);

      // Send the updated quantity to the backend
      if (token) {
        try {
          await axios.post(
            "/api/cart/add",
            { itemId, size, quantity },
            { headers: { token } }
          );
          // Optionally, display a success message
          // toast("Cart updated");
        } catch (error) {
          console.log(error);
          toast.error("Failed to update cart quantity on server");
        }
      }
    }
  };


  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };
  const getProductData = async () => {
    try {
      const response = await axios.get("/api/product/list");
      // console.log(response)
      if (response.data.success) {
        setProducts(response.data.product);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const getUseCart = async (token) => {
    try {
      const response = await axios.post(
        "/api/cart/get",
        {},
        { headers: { token } }
      );
      // console.log(response);
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUseCart(localStorage.getItem("token"));
    }
  });
  useEffect(() => {
    // console.log("Updated products:", products);
  }, [products]);
  const value = {
    products,
    currency,
    delivery_fees,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
