import React, { useState } from 'react';
import { Play, Info, Bell, Search, ChevronDown } from 'lucide-react';

// Mock data for movies
const movies = {
  trending: [
    { id: 1, title: "Inception", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop" },
    { id: 2, title: "The Matrix", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop" },
    { id: 3, title: "Interstellar", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop" }
  ],
  popular: [
    { id: 4, title: "Dune", image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=800&auto=format&fit=crop" },
    { id: 5, title: "Avatar", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop" },
    { id: 6, title: "The Dark Knight", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop" }
  ]
};

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
    <div className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center space-x-8">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
        <div className="hidden md:flex space-x-4 text-sm text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">TV Shows</a>
          <a href="#" className="hover:text-white">Movies</a>
          <a href="#" className="hover:text-white">New & Popular</a>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <Search className="w-5 h-5" />
        <Bell className="w-5 h-5" />
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop"
            alt="Profile"
            className="w-8 h-8 rounded"
          />
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative h-[80vh] text-white">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&auto=format&fit=crop"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
    </div>
    <div className="relative h-full flex items-center px-8">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4">Inception</h1>
        <p className="text-lg mb-6">
          A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center px-6 py-2 bg-white text-black rounded hover:bg-white/90">
            <Play className="w-5 h-5 mr-2" /> Play
          </button>
          <button className="flex items-center px-6 py-2 bg-gray-500/70 text-white rounded hover:bg-gray-500/50">
            <Info className="w-5 h-5 mr-2" /> More Info
          </button>
        </div>
      </div>
    </div>
  </div>
);

const MovieRow = ({ title, movies }: { title: string; movies: any[] }) => (
  <div className="px-8 mb-8">
    <h2 className="text-xl text-white font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="relative aspect-video group cursor-pointer"
        >
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover rounded transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
            <div className="absolute bottom-2 left-2">
              <h3 className="text-white text-sm">{movie.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div className="relative z-10 -mt-32">
        <MovieRow title="Trending Now" movies={movies.trending} />
        <MovieRow title="Popular on Netflix" movies={movies.popular} />
      </div>
    </div>
  );
}

export default App;