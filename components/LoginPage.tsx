import React, { useState } from 'react';

interface Props {
  onBack: () => void;
}

const LoginPage: React.FC<Props> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 w-full max-w-md">
        <button 
          onClick={onBack}
          className="mb-6 flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          ফিরে যান
        </button>

        <div className="glass-panel p-8 rounded-3xl shadow-2xl">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-5xl text-primary mb-2">landscape</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">স্বাগতম চিনেকিনি-তে</h2>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 dark:bg-slate-800 rounded-lg p-1 mb-6">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'login' ? 'bg-white dark:bg-slate-700 shadow text-primary' : 'text-gray-500'}`}
            >
              লগইন
            </button>
            <button 
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'register' ? 'bg-white dark:bg-slate-700 shadow text-primary' : 'text-gray-500'}`}
            >
              রেজিস্টার
            </button>
          </div>

          <form className="space-y-4">
            {activeTab === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">পুরো নাম</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-primary" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ইমেইল / ফোন</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">পাসওয়ার্ড</label>
              <input type="password" className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-primary" />
            </div>

            <button type="button" className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-primary/30 mt-4">
              {activeTab === 'login' ? 'প্রবেশ করুন' : 'অ্যাকাউন্ট খুলুন'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            অথবা সোশ্যাল মিডিয়া দিয়ে {activeTab === 'login' ? 'লগইন' : 'রেজিস্টার'} করুন
            <div className="flex justify-center space-x-4 mt-4">
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">f</button>
              <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">G</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
