"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const page = () => {

  const [form, setForm] = useState({ name: '', email: '', query: '' });
  const router = useRouter()

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form data:', form);
    // onClose();
  };

  // if (!isOpen) return null;
  const redirectHome = ()=>{
    router.push('/')
  }

  return (
    <div>
   <div className="fixed inset-0 bg-gray-800 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" ></div>
      <div className="bg-white w-1/3 p-8 rounded shadow-lg relative z-10">
      <button className="absolute top-4 right-4" onClick={redirectHome} >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Query</label>
            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="block w-full bg-blue-600 text-white py-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default page
