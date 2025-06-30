import React from "react";

const mustWatchItems = [
  {
    id: 1,
    title: "Tech Decoded",
    image: "https://ichef.bbci.co.uk/images/ic/raw/p0hdrsmy.jpg.webp",
    desc: "Get timely, trusted tech news from BBC correspondents around the world, every Monday and Friday.",
  },
  {
    id: 2,
    title: "Download the BBC app",
    image: "https://ichef.bbci.co.uk/images/ic/raw/p0kd4xrj.png.webp",
    desc: "Click here to download the BBC app for Apple and Android devices.",
  },
  {
    id: 3,
    title: "US Politics Unspun",
    image: "https://ichef.bbci.co.uk/images/ic/raw/p0kkgb4b.jpg.webp",
    desc: "No noise. No agenda. Just expert analysis of the issues that matter most from Anthony Zurcher, every Wednesday",
  },
  {
    id: 4,
    title: "Register for a BBC account",
    image: "https://ichef.bbci.co.uk/images/ic/raw/p0k21mq7.jpg.webp",
    desc: "Don't have time to read everything right now? Your BBC account lets you save articles and videos for later.",
  },
];

const MoreWatchFromBBC = () => {
  return (
    <section className="bg-[#141618] text-white py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-gray-700 mb-4"></div>
        <h2 className="text-xl font-bold mb-6">Discover more from the BBC</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 hover:cursor-pointer">
          {mustWatchItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="p-3">
                <p className="text-white font-semibold hover:underline">
                  {item.title}
                </p>
              </div>
              <div className="px-3 pb-4">
                <p className="text-white text-sm font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreWatchFromBBC;
