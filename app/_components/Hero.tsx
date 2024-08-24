import React, { useState } from 'react';
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from 'next/navigation';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const openModal = () =>{
    router.push('/contactus')
  }
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <section className="flex-grow bg-gray-900  flex flex-col w-full">
        <div className="flex items-center justify-center pt-20">
          <h2 className="text-white border border-white px-4 py-2 rounded-full text-center">
            Explore Our Features |{" "}
            <span className="text-blue-400">AI Diagram Tools</span>
          </h2>
        </div>
        <div className="mx-auto max-w-screen lg:flex mt-20">
          <div className="mx-auto text-center">
            <h1 className="text-6xl text-blue-400 font-bold sm:text-6xl">
              Transforming Ideas into Reality
              <strong className="block text-white">
                with Seamless Collaboration
              </strong>
            </h1>

            <div className="flex flex-row justify-center items-center">
              <p className="mt-6 text-3xl w-1/2 text-center text-gray-300">
                The ultimate toolkit for drafting, designing, and visualizing
                engineering solutions.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <LoginLink
                  postLoginRedirectURL="/dashboard"
                  className="block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Login
                </LoginLink>
                <RegisterLink className="block rounded-md bg-gray-100 px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200">
                  Register
                </RegisterLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-center text-gray-600 py-4">
        <p>&copy; 2024 HARISH. All rights reserved.</p>
      </footer>
      <div className="absolute top-4 right-4">
        <button
          onClick={openModal}
          className="block rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Contact Us
        </button>
      </div>
      
    </div>
  );
}

export default Hero;
