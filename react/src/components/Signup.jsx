import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Function to handle input changes
  function onChangeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Function to handle form submission
  function onClickHandler() {
    console.log("Onclick Called", formData);
    // You can add your signup logic here (e.g., send data to the backend)
  }

  return (
    <>
      <div className="flex justify-center items-center h-[70vh]">
        <div className="border-4 border-solid border-teal-800 p-8 rounded-lg w-[50%] bg-white shadow-lg">
          <h1 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            Sign Up
          </h1>
          <div className="flex flex-col space-y-4">
            <input
              onChange={onChangeHandler}
              value={formData.username}
              className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Enter username here"
              type="text"
              name="username"
            />
            <input
              onChange={onChangeHandler}
              value={formData.email}
              className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Enter email here"
              type="email"
              name="email"
            />
            <input
              onChange={onChangeHandler}
              value={formData.password}
              className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              placeholder="Enter password here"
              type="password"
              name="password"
            />
            <button
              onClick={onClickHandler}
              className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
