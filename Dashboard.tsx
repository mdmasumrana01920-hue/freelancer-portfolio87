// src/components/Dashboard.tsx ফাইলে এই কোডটি ব্যবহার করুন
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white hidden md:block">
        <div className="p-6 text-xl font-bold border-b border-slate-800">MR Panel</div>
        <nav class="mt-6">
          <a href="#" className="block py-3 px-6 bg-blue-600">ড্যাশবোর্ড</a>
          <a href="#" className="block py-3 px-6 hover:bg-slate-800 transition">আমার প্রজেক্ট</a>
          <a href="#" className="block py-3 px-6 hover:bg-slate-800 transition">মেসেজ</a>
          <a href="#" className="block py-3 px-6 hover:bg-slate-800 transition">সেটিংস</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">স্বাগতম, মাসুম রানা!</h2>
          <div className="flex items-center gap-3">
             <img src="your-profile-pic-url" className="w-10 h-10 rounded-full border" alt="Profile" />
          </div>
        </header>

        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <p className="text-slate-500">মোট প্রজেক্ট</p>
              <h3 className="text-3xl font-bold text-blue-600">১২টি</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <p className="text-slate-500">রানিং সার্ভিস</p>
              <h3 className="text-3xl font-bold text-green-600">০৩টি</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <p className="text-slate-500">নোটিফিকেশন</p>
              <h3 className="text-3xl font-bold text-orange-500">০৫টি</h3>
            </div>
          </div>

          {/* Service Section Like Fiverr/Freelancer */}
          <h4 className="text-lg font-bold mb-4">আপনার সার্ভিসসমূহ</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Web Dev', 'Security', 'SEO', 'Graphics'].map(item => (
               <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition cursor-pointer border border-slate-100">
                 <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <i className="fas fa-layer-group text-blue-600"></i>
                 </div>
                 <p className="font-medium text-sm">{item}</p>
               </div>
             ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
