import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bgDark pt-16 pb-8 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="material-symbols-outlined text-3xl text-primary">landscape</span>
            <span className="text-xl font-bold">চিনেকিনি</span>
          </div>
          <p className="text-gray-400 text-sm">
            বাংলাদেশের সবচেয়ে নির্ভরযোগ্য ল্যান্ড ইন্টেলিজেন্স প্ল্যাটফর্ম।
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">দ্রুত লিংক</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-primary">হোম</a></li>
            <li><a href="#" className="hover:text-primary">ফিচার</a></li>
            <li><a href="#" className="hover:text-primary">সেবা</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">যোগাযোগ</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">call</span> +৮৮০ ১৭১১ ০০০০০০
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">mail</span> info@chinekini.com
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">location_on</span> ঢাকা, বাংলাদেশ
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">নিউজলেটার</h4>
          <div className="flex">
            <input type="email" placeholder="ইমেইল দিন" className="bg-white/10 p-2 rounded-l-md w-full focus:outline-none text-sm" />
            <button className="bg-primary px-4 py-2 rounded-r-md hover:bg-green-600">সাবস্ক্রাইব</button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        &copy; ২০২৪ চিনেকিনি। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;
