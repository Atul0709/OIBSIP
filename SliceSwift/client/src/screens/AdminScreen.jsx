import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "./../components/Admin/EditPizza";

const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-dark text-light text-center py-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-4">
            <div className="space-y-4">
              <Link
                to="/admin/userlist"
                className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                All Users
              </Link>
              <Link
                to="/admin/pizzalist"
                className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                All Pizzas
              </Link>
              <Link
                to="/admin/addnewpizza"
                className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add New Pizza
              </Link>
              <Link
                to="/admin/orderlist"
                className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                All Orders
              </Link>
            </div>
          </div>
          <div className="md:w-3/4 p-4">
            <Switch>
              <Route path="/admin" component={Userlist} exact />
              <Route path="/admin/userlist" component={Userlist} exact />
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
              <Route path="/admin/pizzalist" component={Pizzaslist} exact />
              <Route
                path="/admin/addnewpizza"
                component={AddNewPizza}
                exact
              />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
