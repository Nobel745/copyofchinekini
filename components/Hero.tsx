import React, { useState, useEffect } from 'react';
import { MOCK_LAND_DATA } from '../constants';
import { LandData } from '../types';

interface Props {
  onSelectLand: (land: LandData) => void;
}

const Hero: React.FC<Props> = ({ onSelectLand }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<LandData[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 1) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = MOCK_LAND_DATA.filter(land => 
          land.title.includes(searchTerm) || land.location.includes(searchTerm)
        );
        setResults(filtered);
        setIsSearching(false);
      }, 500); // Simulate network delay
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
          আপনার স্বপ্নের জমির <br/>
          <span className="text-primary">সঠিক যাচাই ও মূল্যায়ন</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          কৃত্রিম বুদ্ধিমত্তার সাহায্যে জমির ঝুঁকি, বাজার দর এবং আইনি জটিলতা যাচাই করুন এক ক্লিকে।
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto relative">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-800 ring-1 ring-gray-900/5 rounded-full flex items-center p-2 shadow-2xl">
              <span className="material-symbols-outlined text-gray-400 ml-4">search</span>
              <input 
                type="text"
                placeholder="এলাকার নাম বা জমির ধরণ লিখুন..."
                className="w-full bg-transparent p-4 text-gray-800 dark:text-white focus:outline-none placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-colors">
                খুজুন
              </button>
            </div>
          </div>

          {/* Search Dropdown */}
          {(searchTerm.length > 1) && (
            <div className="absolute top-full mt-4 left-0 w-full glass-panel rounded-2xl shadow-2xl overflow-hidden p-2">
              {isSearching ? (
                <div className="p-4 text-center text-gray-500 flex items-center justify-center space-x-2">
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  <span>খোঁজা হচ্ছে...</span>
                </div>
              ) : results.length > 0 ? (
                <ul>
                  {results.map(land => (
                    <li 
                      key={land.id}
                      onClick={() => onSelectLand(land)}
                      className="flex items-center p-3 hover:bg-primary/10 rounded-xl cursor-pointer transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden mr-4">
                        <img src={land.image} alt="thumb" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary">{land.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{land.price} • {land.size}</p>
                      </div>
                      <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-primary">arrow_forward_ios</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-gray-500">কোন ফলাফল পাওয়া যায়নি</div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
