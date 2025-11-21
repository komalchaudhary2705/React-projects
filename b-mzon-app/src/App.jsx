import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";

import Saved from "./components/pages/Saved";
import Notification from "./components/pages/Notification";
import MyAdverts from "./components/pages/MyAdverts";
import Faq from "./components/pages/Faq";
import Settings from "./components/pages/Setting";
import Feedback from "./components/pages/Feedback";
import List from "./components/pages/List";
import Message from "./components/pages/Message";
import Home from "./pages/Home";
import Login from "./pages/Login";
import user from "./components/UserExist";
import SellerForm from "./pages/SellerForm";
import TableList from "./components/pages/TableList";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-6xl font-bold">
              Oops Page Not Found
            </h1>
          }
        />
        {user && <Route path="/seller-form" element={<SellerForm />} />}

        {/* USER DASHBOARD ROUTES */}
        {user ? (
          <Route path="/user" element={<UserDashboard />}>
            {/* Default Page */}
            <Route index element={<Saved />} />

            {/* Child pages */}
            <Route path="saved" element={<Saved />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="my-adverts" element={<MyAdverts />} />
            <Route path="my-adverts" element={<TableList/>} />
            <Route path="faq" element={<Faq />} />
            <Route path="message" element={<Message />} />
            <Route path="list" element={<List />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        ) : (
          // If user is not logged in, redirect /user routes to login
          <Route path="/user/*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </>
  );
};

export default App;
