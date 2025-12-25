import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">নির্ভুল ল্যান্ড সার্ভিস</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              আমরা দিচ্ছি ডিজিটাল ল্যান্ড সার্ভে, আইনি পরামর্শ এবং রিয়েল এস্টেট ভ্যালুয়েশন সেবা। আপনার জমির সঠিক তথ্য যাচাই করতে আমাদের বিশেষজ্ঞদের সাহায্য নিন।
            </p>
            <ul className="space-y-4">
              {['ডিজিটাল সার্ভে', 'দলিল যাচাইকরণ', 'মাটির গুণাগুণ পরীক্ষা', 'রিয়েল টাইম মনিটরিং'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-800 dark:text-gray-200">
                  <span className="material-symbols-outlined text-primary mr-3">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Services" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-80 border-4 border-white dark:border-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
