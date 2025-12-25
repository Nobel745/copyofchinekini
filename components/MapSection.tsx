import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="h-[500px] w-full relative">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0, filter: 'grayscale(30%)' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1716383000000!5m2!1sen!2sbd"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      <div className="absolute inset-0 bg-black/10 pointer-events-none flex items-center justify-center">
        <div className="glass-panel px-8 py-4 rounded-full pointer-events-auto cursor-pointer hover:scale-105 transition-transform flex items-center space-x-2">
          <span className="material-symbols-outlined text-secondary animate-bounce">location_on</span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">লোকেশন সিলেক্ট করুন</span>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
