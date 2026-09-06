import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import SearchResults from "./pages/SearchResults";
import FlashDealsPage from "./pages/FlashDealsPage";
import CheckOut from "./pages/CheckOut";
import MyOrders from "./pages/MyOrders";
import OrderTracking from "./pages/OrderTracking";
import Address from "./pages/Address";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: { background: "#1B3022", fontSize: "14px", color: "#fff" },
        }}
      />
      <Routes>
        {/* auth pages => no navbar and footer */}
        <Route path="/login" element={<Login />} />
        {/* main pages with navbar and footer */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home/>} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="deals" element={<FlashDealsPage />} />
          {/* protected routes */}
          <Route element={<ProtectedRoute/>}>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="orders" element={<MyOrders/>}/>
            <Route path="orders/:id" element={<OrderTracking/>}/>
            <Route path="addresses" element={<Address/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
