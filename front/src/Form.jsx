import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function RegisterForm() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    try {
      const jsonData = JSON.stringify(data);
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      navigate('/ticket');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex bg-[url(src/assets/images/background-desktop.png)] h-svh justify-center items-center flex-col">
      <h5 className="text-white text-center text-xl mb-10 flex items-center">
  <img className="inline-block align-middle w-5 mx-1" src="src/assets/images/logo-mark.svg" alt="" />
  Coding Conf
</h5>
        <h1 className="text-white text-center text-5xl">Your journey to coding conf <br />2025 starts here!</h1>
        <p className="text-white text-center mt-5">Secure your spot at next years biggest coding conference</p>
      <form onSubmit={handleSubmit(submitHandler)} className="flex-col mt-10 mb-30">
      <div className="mb-6">
  <label
    htmlFor="default-input"
    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
  >
    Username
  </label>
  <input
    type="text"
    {...register("fullname", {
      required: "Full Name cannot be empty", 
    })}
    placeholder="Full Name"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[28.8rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  {errors.fullname && (
    <p className="mt-1 text-xs text-red-600 dark:text-red-500">
      {errors.fullname.message}
    </p>
  )}
</div>
        <div className="mb-6">
  <label
    htmlFor="default-input"
    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
  >
    Email address
  </label>
  <input
    type="text"
    {...register("email", {
      required: "Email is required", 
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email format"
      }
    })}
    placeholder="Email"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[28.8rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  {errors.email && (
    <p className="mt-1 text-xs text-red-600 dark:text-red-500">
      {errors.email.message}
    </p>
  )}
</div>
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Github Username
          </label>
          <input
            type="text"
            {...register("github", {
              required: "Github Username cannot be empty", 
            })}
            placeholder="Github Username"
            className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-white block w-[28.8rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />  {errors.github && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-500">
              {errors.github.message}
            </p>
          )}
        </div>
        <button onClick={handleSubmit(submitHandler)} type="submit" className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[28.8rem] px-5 py-2.5 text-center">Generate my ticket</button>
      </form>
    </div>
  );
}
export default RegisterForm;
