import React from "react";
import Header from "../inc/Header";

const Login = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex pt-20">
        <div className="flex-1 w-96 text-center pt-96"></div>
        <div className="pt-20">
          <div class="text-center">
            <img
              class="mx-auto w-48"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              alt="logo"
            />
            <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
              We are The Lotus Team
            </h4>
          </div>
          <form>
            <p class="mb-4">Please login to your account</p>
            <div class="mb-4">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Username"
              />
            </div>
            <div class="mb-4">
              <input
                type="password"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
            </div>
            <div class="text-center pt-1 mb-12 pb-1">
              <button
                class="inline-block px-6 py-2.5 text-white bg-indigo-400 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Log in
              </button>
              <a class="text-gray-500" href="#!">
                Forgot password?
              </a>
            </div>
            <div class="flex items-center justify-between pb-6">
              <p class="mb-0 mr-2">Don't have an account?</p>
              <button
                type="button"
                class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Danger
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
