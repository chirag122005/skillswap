import React, { Component } from 'react';
import img from '../Components/unnamed.png';

export default function SecondaryHome() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-blue-300 px-2">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-9xl max-h-3xl bg-gray-100 rounded-xl px-20 py-41 shadow-lg">
    <div className="p-6  mx-auto w-full max-w-[1600px] mx-auto ">

      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <h1 className="font-bold text-xl text-blue-900">SkillSwap</h1>
          <nav className="space-x-6 text-base text-gray-700">
            <a href="#" className="hover:underline">Browse</a>
            <a href="#" className="hover:underline">Post</a>
            <a href="#" className="hover:underline">About</a>
          </nav>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-gray-700 hover:underline">Login</a>
          <button className="border border-gray-700 rounded px-4 py-1 hover:bg-gray-100">Sign</button>
        </div>
      </header>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Skill Marketplace</h2>

      {/* Search Input */}
      <div className="mb-6">
        <label htmlFor="search" className="sr-only">Search skills</label>
        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
          <svg
            className="w-5 h-5 text-gray-400 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
          <input
            type="text"
            id="search"
            placeholder="Search skills"
            className="flex-grow outline-none"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-3 mb-6">
        <button className="border border-gray-400 rounded-full px-4 py-1">All</button>
        <button className="border border-gray-400 rounded-full px-4 py-1">Tech</button>
        <button className="border border-gray-400 rounded-full px-4 py-1">Music</button>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Guitar Card */}
        <div className="border border-gray-300 rounded-lg p-4 flex space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            
            <img src="unnamed.png" alt="Guitar icon" className="w-12 h-12" />
              
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Guitar</h3>
            <p className="text-gray-700">Learn to play</p>
          </div>
        </div>
        {/* Cooking Card */}
        <div className="border border-gray-300 rounded-lg p-4 flex space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4zM6 8v12h12V8" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Cooking</h3>
            <p className="text-gray-700">Share your favorite</p>
          </div>
        </div>
      </div>
    </div></div></div>
  );
}
