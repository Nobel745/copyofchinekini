import React, { useState } from 'react';
import { LandData } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Props {
  land: LandData;
  onBack: () => void;
}

const DetailsPage: React.FC<Props> = ({ land, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const chartData = land.details.historicalPrices.map((price, idx) => ({
    year: `২০১${8 + idx}`,
    price: price
  }));

  const riskFactors = [
    { label: 'ভূমিকম্প', value: land.details.quakeRisk, color: '#EAB308' }, // Yellow
    { label: 'বন্যা', value: land.details.floodRisk, color: '#00C714' }, // Green (Primary)
    { label: 'খরা', value: land.details.droughtRisk, color: '#FF2A2A' }, // Red (Secondary)
  ];

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark pb-20">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            ফিরে যান
          </button>
          <h1 className="text-xl font-bold truncate max-w-[200px] md:max-w-none text-gray-900 dark:text-white">{land.title}</h1>
          <button className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Image & Key Stats */}
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <img src={land.image} alt={land.title} className="w-full h-64 object-cover" />
            <div className="bg-white dark:bg-slate-800 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-primary">{land.price}</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-sm">{land.size}</span>
              </div>
              <p className="flex items-center text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
                {land.location}
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl">
            <h3 className="font-bold mb-4 border-b pb-2 dark:border-gray-700 text-gray-900 dark:text-white">মূল বৈশিষ্ট্য</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">রাস্তার দূরত্ব</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{land.details.roadDistance}</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">পানির গভীরতা</span>
                <span className="font-medium text-gray-800 dark:text-gray-200">{land.details.waterDepth}</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">গ্যাস লাইন</span>
                <span className={`font-medium ${land.details.gasAvailability ? 'text-green-500' : 'text-red-500'}`}>
                  {land.details.gasAvailability ? 'আছে' : 'নেই'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Col: Dashboard */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {['overview', 'utility', 'risk', 'legal'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab === 'overview' ? 'ওভারভিউ' : tab === 'utility' ? 'সুবিধাসমূহ' : tab === 'risk' ? 'ঝুঁকি বিশ্লেষণ' : 'আইনি তথ্য'}
              </button>
            ))}
          </div>

          {/* Tab Content: Overview (Focus on Price & Risk) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Risk Meter Area */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="material-symbols-outlined text-secondary">warning</span>
                সামগ্রিক ঝুঁকি
              </h3>
              
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>নিরাপদ</span>
                  <span>ঝুঁকিপূর্ণ</span>
                </div>
                <div className="h-4 bg-gradient-to-r from-green-500 via-yellow-400 to-red-600 rounded-full relative">
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-gray-800 rounded-full shadow-lg transition-all duration-1000"
                    style={{ left: `${land.details.riskScore}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-center font-bold text-gray-700 dark:text-gray-300">
                  স্কোর: {land.details.riskScore}/১০০
                </p>
              </div>

              {/* Vertical Progress Bars */}
              <div className="flex justify-around items-end h-40 space-x-4">
                {riskFactors.map((risk, i) => (
                  <div key={i} className="flex flex-col items-center w-full group">
                    <div className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity text-gray-700 dark:text-gray-300">
                      {risk.value}%
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-t-lg relative h-32 overflow-hidden">
                       <div 
                        className="absolute bottom-0 left-0 w-full transition-all duration-1000 rounded-t-lg"
                        style={{ height: `${risk.value}%`, backgroundColor: risk.color }}
                       ></div>
                    </div>
                    <span className="text-xs mt-2 text-gray-500">{risk.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Price Chart */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">trending_up</span>
                মূল্য ইতিহাস (লক্ষ টাকা)
              </h3>
              <div className="flex-1 w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="year" tick={{fontSize: 12, fill: '#888'}} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: '#fff' }}
                      cursor={{fill: 'transparent'}}
                    />
                    <Bar dataKey="price" radius={[4, 4, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#00C714' : '#94a3b8'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">গত ৬ বছরের বাজার দরের গ্রাফ</p>
            </div>
            
            {/* Map (Small Preview) */}
            <div className="md:col-span-2 glass-panel p-2 rounded-2xl h-48 relative overflow-hidden group cursor-pointer">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, opacity: 0.7 }}
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.2542!2d${land.coordinates.lng}!3d${land.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v162!5m2!1sen!2sbd`}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg font-bold text-sm pointer-events-none group-hover:opacity-0 transition-opacity">
                  ম্যাপে দেখুন
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
