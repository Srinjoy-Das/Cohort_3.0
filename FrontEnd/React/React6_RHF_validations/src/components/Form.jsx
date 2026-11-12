import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setUsers, setToggle, users, updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-semibold">Create Form</h1>
      <form
        onSubmit={handleSubmit((data) => {
          if (updatedData) {
            setUsers((prev) => {
              return prev.map((val) => {
                return val.id === updatedData.id ? { ...data } : val;
              });
            });
          } else {
            let arr = [...users, { ...data, id: nanoid() }];
            setUsers(arr);
            console.log(arr);

            localStorage.setItem("users", JSON.stringify(arr));
          }
          reset();
          setToggle((prev) => !prev);
        })}
        className="w-70 border-2 border-black p-4 rounded flex flex-col gap-4 bg-white"
      >
        <input
          {...register("name", { required: "Name is required" })}
          className="p-2 border border-black rounded-lg"
          type="text"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter valid Email",
            },
          })}
          className="p-2 border border-black rounded-lg"
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("contact", {
            required: "Contact is required",
            minLength: {
              value: 10,
              message: "Minimun 10 degits are required.",
            },
            maxLength: {
              value: 12,
              message: "Maximum 12 degits are required.",
            },
          })}
          className="p-2 border border-black rounded-lg"
          type="number"
          placeholder="Enter your contact no."
        />
        {errors.contact && (
          <p className="text-red-500">{errors.contact.message}</p>
        )}
        <input
          {...register("image", { required: "Image is required" })}
          className="p-2 border border-black rounded-lg"
          type="url"
          placeholder="Enter your image url"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-400">
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;
