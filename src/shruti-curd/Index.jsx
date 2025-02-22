import React, { useState } from "react";
import Table from "./components/Table";

function Index() {
  const [userData, setUserData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");
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
      const EditData = userData.map((item) =>
        item.phone === data.phone ? data : item
      );
      setUserData(EditData);
    } else {
      let isPhoneExit = userData.some((item) => item.phone === data.phone);
      if (isPhoneExit) {
        alert("phone number already exist");
      } else {
        setUserData([...userData, data]);
      }
    }

    setData({
      fName: "",
      lName: "",
      email: "",
      phone: "",
      address: "",
    });
  }

  function handleDelete(phone) {
    const isDelete = userData.filter((item) => item.phone !== phone);
    alert("delete your data !!!");
    setUserData(isDelete);
  }
  function handleEdit(phone) {
    const isEdit = userData.find((item) => item.phone === phone);
    console.log(isEdit, "edit data");
    // setData(isEdit);
    setIsEdit(true);
  }
  const filterData = userData.filter(
    (item) =>
      item.fName.toLowerCase().includes(search.toLowerCase()) ||
      item.lName.toLowerCase().includes(search.toLowerCase())
  );
 console.log(filterData);
 
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
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-[25%] bg-gray-300"
        />
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
