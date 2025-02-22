import React, { useState } from "react";
import Table from "./compoents/Table";
import { useDispatch,useSelector } from "react-redux";
import { addUser, deleteUser, editUser } from "./redux/action/userSlice";

function Index() {
  const dispatch = useDispatch();
  const userData=useSelector((item)=>item.user.userData)
  const [isEdit, setIsEdit] = useState(false);

  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    address: "",
  });
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEdit) {
      dispatch(editUser(data))
      setIsEdit(false);
    } else {
      dispatch(addUser(data));
    }

    setData({
      fName: "",
      lName: "",
      email: "",
      phone: "",
      address: "",
    });
  }

  const handleDelete = (phone) => {
    // let IsDelete = userData.filter((item) => item.phone !== phone);
    // setUserData(IsDelete);
    dispatch(deleteUser(phone));
  };

  const handleEdit = (phone) => {
    let isEditData = userData.find((item) => item.phone === phone);
    setIsEdit(true);
    setData(isEditData);
  };

  return (
    <div className="mx-auto container">
      <div className="grid gap-4 border p-5 py-5">
        <form action="">
          <div className="grid sm:grid-cols-12 gap-2">
            <div className="sm:col-span-6">
              <label htmlFor="" className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="fName"
                value={data.fName}
                onChange={handleChange}
                className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                value={data.lName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-12 gap-2">
            <div className=" sm:col-span-6">
              <label htmlFor="" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="numbers"
                name="phone"
                value={data.phone}
                placeholder="Phone"
                onChange={handleChange}
                className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                placeholder="Email"
                onChange={handleChange}
                className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="block text-sm font-medium mb-2">
              Address
            </label>
            <textarea
              name="address"
              value={data.address}
              placeholder="Address"
              onChange={handleChange}
              className="border border-gray-300 rounded-sm p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            className=" bg-blue-700 py-2 px-4 text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>

      <Table
        userData={userData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Index;
