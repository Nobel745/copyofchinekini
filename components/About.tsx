import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">আমাদের সম্পর্কে</h2>
        <p className="max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-12 text-lg">
          'চিনেকিনি' বাংলাদেশের প্রথম এআই-চালিত ল্যান্ড ইন্টেলিজেন্স প্ল্যাটফর্ম। আমাদের লক্ষ্য হলো জমি কেনাবেচার ক্ষেত্রে স্বচ্ছতা ও নিরাপত্তা নিশ্চিত করা। আমরা আধুনিক প্রযুক্তি ব্যবহার করে সাধারণ মানুষকে জমির প্রকৃত তথ্য প্রদান করি।
        </p>
        
        <div className="flex justify-center gap-8 flex-wrap">
          {[
            { label: 'সন্তুষ্ট গ্রাহক', val: '৫০০০+' },
            { label: 'যাচাইকৃত জমি', val: '১২০০+' },
            { label: 'পার্টনার', val: '৫০+' },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel px-10 py-6 rounded-2xl text-center min-w-[150px]">
              <div className="text-3xl font-bold text-primary mb-2">{stat.val}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
