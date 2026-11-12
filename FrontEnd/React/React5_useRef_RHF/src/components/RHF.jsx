import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="w-80 h-fit">
        <form onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
          
        })} className="flex flex-col gap-3 bg-white p-6 rounded-lg">
          <input
            {...register("productName")}
            className="border-gray-400 border p-2 rounded"
            type="text"
            placeholder="Enter Product Name"
          />
          <input
            {...register("price")}
            className="border-gray-400 border p-2 rounded"
            type="text"
            placeholder="Enter Price"
          />
          <span>Select a catagory:</span>
          <select { ...register("option.value")} className="border-gray-600 border p-2 rounded">
            <option value="MENS">
              Mens
            </option>
            <option value="WOMEN">
              Women
            </option>
            <option value="KIDS">
              Kids
            </option>
          </select>
          <input
            {...register("image")}
            className="border-gray-400 border p-2 rounded"
            type="url"
            placeholder="Enter Image Url"
          />
          <button className="bg-blue-400 text-white p-2 rounded">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default RHF;
