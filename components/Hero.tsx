export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          New Arrivals 2024
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Shop the Best Deals<br />
          <span className="text-yellow-300">You'll Love</span>
        </h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
          Discover thousands of products across all categories with fast shipping and easy returns.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 hover:text-blue-800 transition-all duration-200 shadow-lg">
            Shop Now
          </button>
          <button className="border-2 border-white/60 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-200">
            View Deals
          </button>
        </div>
        <div className="mt-10 flex justify-center gap-8 flex-wrap text-sm">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">10K+</span>
            <span className="text-blue-200">Products</span>
          </div>
          <div className="w-px bg-white/20 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">500K+</span>
            <span className="text-blue-200">Customers</span>
          </div>
          <div className="w-px bg-white/20 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">4.9★</span>
            <span className="text-blue-200">Avg Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
