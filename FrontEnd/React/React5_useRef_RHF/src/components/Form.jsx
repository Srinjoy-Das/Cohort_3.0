import React, { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      pName: formRef.current.productName.value,
      price: formRef.current.price.value,
      catagory: formRef.current.catagory.value,
      image: formRef.current.image.value,
    };

    console.log(obj);
  };

  return (
    <div className="w-80 h-fit">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-6 rounded-lg"
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="border-gray-400 border p-2 rounded"
          type="text"
          placeholder="Enter Product Name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          className="border-gray-400 border p-2 rounded"
          type="text"
          placeholder="Enter Price"
        />
        <span>Select a catagory:</span>
        <select
          ref={(e) => (formRef.current.catagory = e)}
          className="border-gray-600 border p-2 rounded"
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.image = e)}
          className="border-gray-400 border p-2 rounded"
          type="url"
          placeholder="Enter Image Url"
        />
        <button className="bg-blue-400 text-white p-2 rounded">CREATE</button>
      </form>
    </div>
  );
};

export default Form;
