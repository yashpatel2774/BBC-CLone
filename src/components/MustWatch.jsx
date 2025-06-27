import React from "react";

const mustWatchItems = [
  {
    id: 1,
    title: "Man gets stuck driving car down Rome's Spanish Steps",
    image:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/f6f1/live/7d53f9e0-4d60-11f0-8c47-237c2e4015f5.jpg.webp",
    desc: "The 81-year-old man and his car got stuck on the way down, before a crane lifted the car away.",
  },
  {
    id: 2,
    title: "BBC on the scene at Israeli hospital struck by Iranian missile",
    image:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/6e00/live/e4964040-4d06-11f0-86d5-3b52b53af158.jpg.webp",
    desc: "The BBC's Lucy Williamson is outside Soroka Hospital in Beersheba, south of Israel, as emergency workers assess the scene.",
  },
  {
    id: 3,
    title: "Moment SpaceX rocket explodes into massive fireball",
    image:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/ed7b/live/32686170-4cd2-11f0-86d5-3b52b53af158.jpg.webp",
    desc: "A live stream has captured the moment a SpaceX Starship rocket exploded when preparing for a flight test in Texas on Wednesday.",
  },
  {
    id: 4,
    title: "Awkward White House encounter between Trump and Juventus players",
    image:
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/83cb/live/5f8652f0-4d01-11f0-8c47-237c2e4015f5.jpg.webp",
    desc: "US President Trump asks Juventus men's players if ''a woman could make the team'' during their visit to the White House",
  },
];

const MustWatch = () => {
  return (
    <section className="bg-[#141618] text-white py-10">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex border mb-2"></div>
        <h2 className="text-xl font-bold mb-6">Must Watch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 hover:cursor-pointer lg:grid-cols-4 gap-6">
          {mustWatchItems.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden shadow-lg bg-gray-900">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <button className="absolute bg-white rounded-full bottom-1 left-2">
                  <img
                    className="h-9 w-9 rounded-full border-2 border-white"
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/play-button-1816237-1539602.png?f=webp&w=256"
                    alt="Play"
                  />
                </button>
              </div>

              <div className="p-3">
                <p className="text-white font-semibold hover:underline hover:cursor-pointer">
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

export default MustWatch;
