import React from 'react'
import { Link } from 'react-router-dom'
import MustWatch from '../components/MustWatch'
import MoreWatchFromBBC from '../components/MoreWatchFromBBC'

const News = () => {
  return (
    <>

      {/* Home or Top of the page story */}
<section className="bg-white text-black py-10">
  <div className="max-w-screen-xl mx-auto px-4 md:px-16">

    <div className="flex items-center justify-center md:justify-start text-red-600 gap-2 mb-6">
      <svg width="32" height="32" viewBox="0 0 32 32" className="w-8 h-8 fill-red-600" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3922 31.3913C6.25751 30.2611 0.846472 24.5392 0.0835577 17.3057C-0.410924 12.714 1.3127 7.95289 4.63278 4.61868C12.2761 -3.01046 25.1467 -0.891255 29.922 8.78645C32.6204 14.2257 31.9988 20.5268 28.2972 25.4293C24.8924 29.922 19.0151 32.2672 13.3922 31.3913Z" />
        <path d="M13.8318 24.0437C10.5541 23.2949 7.94042 20.6671 7.24815 17.3894C6.42872 13.5042 8.40665 9.57661 12.0658 7.83886C16.2901 5.84681 21.4327 7.72584 23.4389 12.0066C25.6287 16.683 23.1422 22.2918 18.1974 23.8459C16.9965 24.2274 15.0186 24.3122 13.8318 24.0437Z" />
      </svg>
      <h5 className="font-bold text-lg">
        <Link to="/live">LIVE</Link>
      </h5>
    </div>
    <Link to="/sports" className="block text-center md:text-left mb-6 hover:underline cursor-pointer">
      <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
        Iran launches fresh air strikes on Israel after military figure killed in Tehran
      </h2>
    </Link>

    <div className="flex flex-col md:flex-row gap-6 items-start">
      
      <img
        className="w-full md:w-[700px] h-auto md:h-[350px] object-cover rounded"
        src="https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/vivo/live/images/2025/6/16/bb973115-1ac6-474b-8ae0-27fd58549d47.jpg.webp"
        alt="Iran-Israel conflict"
      />

      <div className="flex flex-col font-serif w-full md:w-[380px]">

        {[
          {
            title: ["Trump told Israel not to kill", "Iran's supreme leader -", "Report"]
          },
          {
            title: ["'Nowhere feels safe':", "Iranians on life under", "Israeli attacks"]
          },
          {
            title: ["Israeli paramedics on the", "ground of missile strike in", "Haifa"]
          }
        ].map((item, idx) => (
          <div key={idx} className="mt-2">
            <div className="text-lg md:text-xl font-semibold hover:underline cursor-pointer leading-tight">
              {item.title.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="border border-gray-300 mt-2"></div>
          </div>
        ))}
        
      </div>
    </div>

    {/* Divider */}
    <div className="border border-slate-900 mt-10"></div>
  </div>
</section>



            {/* More Top Stories */}
            <section className="py-10 bg-white text-black">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-xl font-bold mb-6">MORE TOP STORIES</div>

    <div className="flex flex-col lg:flex-row flex-wrap gap-8">

      <div className="flex flex-col gap-8 max-w-sm">
        
        <div>
          <img className="w-full h-[200px] object-cover rounded" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/35db/live/f4a07910-4a72-11f0-a696-ed7606278c94.jpg.webp" alt="" />
          <div className="mt-3 font-serif font-semibold text-base hover:underline cursor-pointer">
            Trump orders increase in migrant deportations
          </div>
          <div className="mt-2 font-serif text-gray-500 text-sm font-light hover:underline cursor-pointer">
            The president called on federal agencies to enforce the "largest mass deportation programme in history".
          </div>
          <p className="text-sm mt-2">5 Hours ago | World</p>
          <div className="border border-slate-300 mt-2"></div>
        </div>

        <div>
          <img className="w-full h-[200px] object-cover rounded" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/3a0a/live/fbecc040-4b4c-11f0-8bdb-73c0815c1d31.jpg.webp" alt="" />
          <div className="mt-3 font-serif font-semibold text-base hover:underline cursor-pointer">
            How the Air India crash investigation is unfolding
          </div>
          <div className="mt-2 font-serif text-gray-500 text-sm font-light hover:underline cursor-pointer">
            Every scorched cable, nut and bolt will be examined along with the black box to determine why it went down 30 seconds after take-off.
          </div>
          <p className="text-sm mt-2">4 Hours ago | Asia</p>
        </div>
      </div>

      <div className="w-full max-w-2xl">
        <img className="w-full h-auto object-cover rounded" src="https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/24e4/live/7da54b20-4bd4-11f0-8c47-237c2e4015f5.jpg" alt="" />
        
        <div className="flex items-center ml-25 md:ml-0 mt-3">
          <svg width="38" height="38" fill="red" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" /></svg>
          <h5 className="text-2xl font-bold text-red-600 flex ml-2">LIVE</h5>
        </div>

        <div className="mt-3 font-serif text-xl font-semibold hover:underline cursor-pointer leading-tight">
          Trump demands Iran's 'unconditional surrender' but says supreme leader is safe 'for now'
        </div>
        <div className="mt-2 font-serif text-sm text-gray-500 hover:underline cursor-pointer">
          The US president is said to be weighing whether to join Israeli strikes against Iranian nuclear facilities.
        </div>

        <div className="mt-6 font-serif font-semibold text-base space-y-3">
          <p className="hover:underline cursor-pointer">Trump's Iran dilemma exposes bitter split among Maga faithful</p>
          <p className="hover:underline cursor-pointer">▶ How one US weapon could change the course of the Israel-Iran conflict</p>
        </div>
      </div>

      <div className="flex flex-col gap-8 text-lg max-w-sm">
        {[
          {
            title: ['Trade a sudden exit, Middle East conflict – five takeaways from G7'],
            desc: ['This year\'s summit in Canada did not go as planned, but leaders of the world\'s wealthiest...'],
            meta: '4 Hours ago | US & Canada'
          },
          {
            title: ['Indonesia issues highest alert as volcano erupts'],
            desc: ['Disaster agency imposes exclusion zone around Lewotobi Laki-Laki after it spewed...'],
            meta: '9 Hours ago | Asia'
          },
          {
            title: ['Minnesota\'s "nice" culture shattered by political violence'],
            desc: ['In a place that prides itself on politeness and respect, people are reeling after the targeted...'],
            meta: '4 Hours ago | US & Canada'
          },
          {
            title: ['"Spectacular" moment an enormous tornado crosses a rainbow'],
            desc: ['Stormchasers captured footage of the major twister swirling near Dickens, Nebraska.'],
            meta: '1 Hour ago | US & Canada'
          }
        ].map((item, i) => (
          <div key={i}>
            <div className="font-semibold hover:underline cursor-pointer">{item.title.map((line, j) => <p key={j}>{line}</p>)}</div>
            <div className="mt-2 font-light text-sm text-gray-600 hover:underline cursor-pointer">{item.desc.map((line, j) => <p key={j}>{line}</p>)}</div>
            <p className="text-sm font-semibold mt-2 text-gray-500">{item.meta}</p>
            <div className="border border-slate-300 mt-2"></div>
          </div>
        ))}
      </div>
    </div>

    <div className="border border-slate-900 mt-10"></div>
  </div>
</section>




             {/* ONLY FROM THE BBC */} 


<section className="py-8 bg-white text-black">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex items-center text-xl font-bold mb-6">
      ONLY FROM THE BBC
    </div>

    <div className="flex flex-col md:flex-row gap-8">
    
      <div className="w-full md:w-1/2 hover:cursor-pointer">
        <img
          className="w-full h-auto md:h-[375px] object-cover rounded"
          src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/3798/live/5c7746b0-4b6b-11f0-8c47-237c2e4015f5.jpg.webp"
          alt="Article 1"
        />
        <div className="mt-4 font-serif px-1">
          <p className="font-semibold text-lg hover:underline">
            Martina Navratilova: 'I wouldn't have left home for Trump's America'
          </p>
          <p className="mt-2 text-sm text-gray-600">
            The tennis icon tells the BBC she doesn't think a Trump-led government would let her in.
          </p>
          <p className="mt-3 text-sm text-gray-500 font-light">8 Hours ago | US & Canada</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 hover:cursor-pointer">
        <img
          className="w-full h-auto md:h-[375px] object-cover rounded"
          src="https://ichef.bbci.co.uk/images/ic/raw/p0ljw951.jpg.webp"
          alt="Article 2"
        />
        <div className="mt-4 font-serif px-1">
          <p className="font-semibold text-lg hover:underline">
            Why people are turning to 'bibliotherapy'
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Reading fiction could improve people's wellbeing – but getting it right depends on the book,
          </p>
          <p className="text-sm text-gray-600">and the person.</p>
          <p className="mt-3 text-sm text-gray-500 font-light">21 Hours ago | Future</p>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-300 mt-10"></div>
  </div>
</section>

<section className="py-8 bg-white text-black">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex items-center text-xl font-bold mb-6">
      ONLY FROM THE BBC
    </div>

    <div className="flex flex-col md:flex-row gap-8">
     
      <div className="w-full md:w-1/2 hover:cursor-pointer">
        <img
          className="w-full h-auto md:h-[375px] object-cover rounded"
          src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/3798/live/5c7746b0-4b6b-11f0-8c47-237c2e4015f5.jpg.webp"
          alt="Article 1"
        />
        <div className="mt-4 font-serif px-1">
          <p className="font-semibold text-lg hover:underline">
            Martina Navratilova: 'I wouldn't have left home for Trump's America'
          </p>
          <p className="mt-2 text-sm text-gray-600">
            The tennis icon tells the BBC she doesn't think a Trump-led government would let her in.
          </p>
          <p className="mt-3 text-sm text-gray-500 font-light">8 Hours ago | US & Canada</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 hover:cursor-pointer">
        <img
          className="w-full h-auto md:h-[375px] object-cover rounded"
          src="https://ichef.bbci.co.uk/images/ic/raw/p0ljw951.jpg.webp"
          alt="Article 2"
        />
        <div className="mt-4 font-serif px-1">
          <p className="font-semibold text-lg hover:underline">
            Why people are turning to 'bibliotherapy'
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Reading fiction could improve people's wellbeing – but getting it right depends on the book,
          </p>
          <p className="text-sm text-gray-600">and the person.</p>
          <p className="mt-3 text-sm text-gray-500 font-light">21 Hours ago | Future</p>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-300 mt-10"></div>
  </div>
</section>


                {/* Global News Podcast */}

<section className="py-8 bg-white text-black">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex items-center text-xl font-bold mb-6">
      Global News Podcast
    </div>

    <div className="bg-gradient-to-r from-black via-[#342626] to-[#813333] text-white rounded-md p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">

        <div className="w-full md:w-2/3">
          <div className="text-2xl md:text-4xl font-semibold hover:underline cursor-pointer">
            <p>Trump demands Iran's</p>
            <p>'unconditional surrender'</p>
          </div>

          <div className="mt-3 text-sm text-gray-300 cursor-pointer">
            <p>The president is said to be deciding whether to join Israeli</p>
            <p>strikes on Iran</p>
          </div>

          <div className="flex items-center gap-6 mt-4 text-gray-200 flex-wrap">
            <div className="flex items-center">
              <img className="w-9 h-9 bg-white rounded-full border" src="https://cdn-icons-png.flaticon.com/128/0/375.png" alt="Time" />
              <p className="ml-3 text-sm font-bold font-serif">28 Mins</p>
            </div>
            <div className="flex items-center">
              <img className="w-9 h-9 bg-white rounded-full" src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png" alt="Save" />
              <p className="ml-3 text-sm font-bold font-serif">Save</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[250px] flex justify-center md:justify-end">
          <img
            className="w-[250px] h-[250px] object-cover rounded-md"
            src="https://ichef.bbci.co.uk/images/ic/1024x576/p0lhbf2q.jpg.webp"
            alt="Podcast"
          />
        </div>

      </div>
    </div>

    <div className="border-t border-slate-300 mt-8"></div>
  </div>
</section>



                    {/* MORE NEWS PART-1*/}   

<section className="bg-white text-black py-8">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex items-center text-xl font-bold mb-6">
      More news
      <img
        className="h-8 w-8 ml-2"
        src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png"
        alt=""
      />
    </div>

    <div className="flex flex-col md:flex-row gap-6">

      <div className="w-full md:w-1/3">
        <div className="text-2xl font-serif font-semibold cursor-pointer hover:underline">
          <p>Australia lifts blood,</p>
          <p>plasma donation ban</p>
          <p>for men</p>
        </div>

        <div className="mt-2 font-serif text-base text-gray-600 font-light cursor-pointer hover:underline">
          <p>The Lifeblood service says the changes will</p>
          <p>have no impact on safety but will boost the</p>
          <p>donor pool.</p>
        </div>

        <p className="mt-4 font-light text-sm text-gray-500">3 Hours ago | Health</p>
        <div className="border-t border-gray-300 mt-6"></div>
      </div>

      <div className="w-full md:w-2/5">
        <img
          className="w-full h-auto md:h-[333px] object-cover rounded"
          src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/f9e2/live/f4592070-4bde-11f0-80ce-13785641ba8f.jpg.webp"
          alt=""
        />
        <div className="border-t border-gray-300 mt-4"></div>
      </div>

      <div className="w-full md:w-[27%]">
        <img
          className="w-full h-auto md:h-[150px] object-cover rounded"
          src="https://ichef.bbci.co.uk/news/480/cpsprodpb/d0a7/live/ce756280-4b7d-11f0-86d5-3b52b53af158.png.webp"
          alt=""
        />

        <div className="text-xl font-serif font-semibold mt-2 cursor-pointer hover:underline">
          <p>'Taxi boats' pick up migrants in</p>
          <p>waist-deep water as Channel</p>
          <p>smugglers switch tactics</p>
        </div>

        <div className="mt-2 font-serif text-base text-gray-600 font-light cursor-pointer hover:underline">
          <p>They are being launched from new sites and</p>
          <p>in new ways - out of reach of French police.</p>
        </div>

        <p className="mt-3 text-sm font-light text-gray-500">7 Hours ago | Europe</p>
        <div className="border-t border-gray-300 mt-3"></div>
      </div>

    </div>
  </div>
</section>



                     {/* MORE NEWS PART-2*/}   

   <div className="flex mt-7 flex-col md:flex-row md:ml-[280px] md:gap-3 px-4 md:px-0">
  
  <div className="w-full md:w-auto">
    <img className="w-full md:w-[290px] md:h-[160px] object-cover" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/3a16/live/ac99dc00-4b40-11f0-8c47-237c2e4015f5.png.webp" alt="" />

    <div className="font-serif mt-2 font-semibold cursor-pointer hover:underline">
      <p>The teen who filmed the Air India</p>
      <p>crash video the world saw</p>
    </div>

    <div className="mt-2 font-serif font-light text-gray-500 text-sm cursor-pointer hover:underline">
      <p>Aryan Asari just wanted to film planes</p>
      <p>flying in the sky - but he ended up</p>
      <p>capturing one of the country's biggest air</p>
      <p>crashes.</p>
    </div>

    <p className="mt-3 font-light text-sm">17 Hours ago | Asia</p>
    <div className="border border-slate-300 mt-3"></div>
  </div>

  <div className="w-full md:w-auto mt-6 md:mt-0 md:ml-3">
    <img className="w-full md:w-[290px] md:h-[160px] object-cover" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/b865/live/64f374b0-4b7c-11f0-86d5-3b52b53af158.jpg.webp" alt="" />

    <div className="font-serif mt-2 font-semibold cursor-pointer hover:underline">
      <p>Police 'should have arrested' fatal</p>
      <p>crash diplomat</p>
    </div>

    <div className="mt-2 font-serif font-light text-gray-500 text-sm cursor-pointer hover:underline">
      <p>A British police force apologises over a fatal</p>
      <p>crash after which an American diplomat</p>
      <p>fled the country.</p>
    </div>

    <p className="mt-3 font-light text-sm">4 Hours ago | Northamptonshire</p>
    <div className="border border-slate-300 mt-4"></div>
  </div>

  <div className="w-full md:w-auto mt-6 md:mt-0 md:ml-3">
    <img className="w-full md:w-[300px] md:h-[160px] object-cover" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/547f/live/0ee4c630-4b56-11f0-8bdb-73c0815c1d31.jpg.webp" alt="" />

    <div className="font-serif mt-2 font-semibold cursor-pointer hover:underline">
      <p>Will Smith says Oscars slap fallout</p>
      <p>was brutal</p>
    </div>

    <div className="mt-2 font-serif font-light text-gray-500 text-sm cursor-pointer hover:underline">
      <p>The Fresh Prince actor says taking an</p>
      <p>"honest look at myself" inspired a return to</p>
      <p>music.</p>
    </div>

    <p className="mt-3 font-light text-sm">19 Hours ago | Newsbeat</p>
    <div className="border border-slate-300 mt-4"></div>
  </div>

  <div className="w-full md:w-auto mt-6 md:mt-0 md:ml-3">
    <div className="font-serif font-semibold cursor-pointer hover:underline">
      <p>Russia's deadliest attack on Kyiv for</p>
      <p>months flattens part of apartment</p>
      <p>block</p>
    </div>

    <div className="mt-2 font-serif font-light text-gray-500 text-sm cursor-pointer hover:underline">
      <p>Ukrainian officials say a drone smashed into</p>
      <p>the building, leaving a number of people</p>
      <p>dead and wounded.</p>
    </div>

    <p className="mt-3 font-light text-sm">13 Hours ago | Europe</p>

    <div className="font-serif mt-4 font-semibold cursor-pointer hover:underline">
      <p>Israeli forces kill 51 Palestinians</p>
      <p>waiting for flour at Gaza aid site,</p>
      <p>witnesses and rescuers say</p>
    </div>

    <div className="mt-2 font-serif font-light text-gray-500 text-sm cursor-pointer hover:underline">
      <p>It is potentially the deadliest of the almost</p>
      <p>daily shootings that have been taking place</p>
      <p>recently near aid distribution sites.</p>
    </div>

    <p className="mt-2 font-light text-sm">16 Hours ago | Middle East</p>
  </div>
</div>




                  {/* Must Watch */}

        <div className='mt-20'>
            <MustWatch />
        </div>



                {/* Technology > */}

<section className="bg-white text-black py-10">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="border-b border-slate-900 mb-4"></div>
    <div className="flex items-center text-xl font-bold mb-6">
      TECHNOLOGY
      <img
        className="h-6 w-6 ml-2"
        src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png"
        alt=""
      />
    </div>

    <div className="flex flex-col md:flex-row gap-8">
      
      <div className="w-full md:w-2/3">
        <img
          className="w-full h-auto md:h-[480px] object-cover rounded"
          src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/0307/live/ea26bdf0-4b80-11f0-86d5-3b52b53af158.png.webp"
          alt=""
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <div className="text-2xl font-bold hover:underline hover:cursor-pointer leading-tight">
          <h4>Print and shoot: How 3D-</h4>
          <h4>Printed guns are spreading</h4>
          <h4>online</h4>
        </div>

        <div className="mt-4 text-base text-gray-700">
          <p>BBC Trending has investigated the global spread of 3D-</p>
          <p>printed guns across social media platforms and websites</p>
          <p>offering how-to guides.</p>
        </div>

        <div className="mt-5">
          <button className="hover:bg-gray-800 hover:text-white border-2 border-black text-black font-bold px-7 py-2 rounded transition w-fit">
            See More
          </button>
        </div>
      </div>
    </div>

  </div>
</section>



                
                {/* SCIENCE AND HEALTH > */}


<section className="bg-white text-black py-10">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="border-b border-slate-900 mb-4"></div>
    <div className="flex items-center text-xl font-bold mb-6">
      SCIENCE AND HEALTH
      <img
        className="h-6 w-6 ml-2"
        src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png"
        alt=""
      />
    </div>

    <div className="flex flex-col md:flex-row items-start gap-8">
      
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="text-2xl font-semibold hover:underline hover:cursor-pointer leading-tight">
          <h3>Why your fingers wrinkle in</h3>
          <h3>the bath</h3>
        </div>

        <div className="mt-3 text-base text-gray-700">
          <p>The skin on our fingertips and toes shrivels like prunes</p>
          <p>when soaked in water. But is this an adaptation from our</p>
          <p>evolutionary past? And what can it reveal about our</p>
          <p>health today?</p>
        </div>

        <div className="mt-4">
          <button className="hover:bg-gray-700 hover:text-white border-2 border-black text-black font-bold px-7 py-2 rounded transition w-fit">
            See More
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img
          className="w-full h-auto md:h-[450px] object-cover rounded"
          src="https://ichef.bbci.co.uk/images/ic/1024xn/p0cg24kg.jpg.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</section>



                 {/* Four parts Us & Canada News , More World News , Sports , Business */}
  <section className="bg-white text-black py-10">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="border-b border-slate-900 mb-4"></div>
    <div className="flex items-center text-xl font-bold mb-6">
      US & CANADA NEWS
      <img className="h-6 w-6 ml-2" src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
    </div>

    <div className="flex flex-wrap gap-6">
      {[
        // US & Canada
        {
          img: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ff5e/live/febd36e0-4d24-11f0-9efb-9fc6c4760a4c.jpg.webp",
          items: [
            {
              title: [
                "Trump ends funding for LGBTQ",
                "youth option on national suicide",
                "hotline"
              ],
              desc: [
                "The Trevor Project, an organisation",
                "involved in the service, called the change",
                "\"incomprehensible\"."
              ],
              meta: "12 Hours ago | US & Canada"
            },
            {
              title: ["Why the Karen Read murder trial", "caused such a frenzy"],
              meta: "1 day ago | US & Canada"
            },
            {
              title: ["Karen Read found not guilty of", "murdering Boston police officer", "boyfriend"],
              meta: "1 day ago | US & Canada"
            },
            {
              title: ["Los Angeles Lakers to sell majority", "ownership in historic deal"],
              meta: "1 day ago | US & Canada"
            }
          ]
        },

        // Middle East
        {
          img: "https://ichef.bbci.co.uk/news/480/cpsprodpb/ae65/live/70f8e800-4d23-11f0-9efb-9fc6c4760a4c.jpg.webp",
          items: [
            {
              title: ["Is the UK about to get dragged into", "Iran-Israel conflict?"],
              desc: [
                "Britain is almost certain to be affected if the",
                "US gets involved - but what role could it",
                "play?"
              ],
              meta: "8 Hours ago | Middle East"
            },
            {
              title: ["Israel strikes unfinished Arak", "heavy water reactor in Iran"],
              meta: "9 Hours ago | Middle East"
            },
            {
              title: ["Trump to decide on US action in", "Israel-Iran conflict within two", "weeks"],
              meta: "10 Hours ago | Middle East"
            },
            {
              title: ["Israeli hospital hit by Iranian", "missile strike"],
              meta: "11 Hours ago | Middle East"
            }
          ]
        },

        // Sports
        {
          img: "https://ichef.bbci.co.uk/news/480/cpsprodpb/659d/live/542b3860-4d26-11f0-9b50-8f26a45d0428.jpg.webp",
          items: [
            {
              title: ["'This is it - time for England to be", "winners'"],
              desc: [
                "England's series against India, which",
                "begins on Friday, starts an era-defining 10-",
                "game spell for captain Ben Stokes and",
                "coach Brendon McCullum."
              ],
              meta: "13 Hours ago | Cricket"
            },
            {
              title: ["'He's got such an aura' - Farrell's", "rise to Lions top job"],
              meta: "1 Hour ago | British & Irish Lions"
            },
            {
              title: ["McIlroy two behind Scheffler at", "Travelers Championship"],
              meta: "8 Hours ago | Golf"
            },
            {
              title: ["Real Madrid forward Mbappe", "released from hospital"],
              meta: "10 Hours ago | European Football"
            }
          ]
        },

        // Business
        {
          img: "https://ichef.bbci.co.uk/news/480/cpsprodpb/30d3/live/e18c6dc0-4d29-11f0-9efb-9fc6c4760a4c.jpg.webp",
          items: [
            {
              title: ["Trump confirms further delay to", "TikTok ban or sale deadline"],
              desc: [
                "It's the third time the date has been moved",
                "back by Trump since he took office in",
                "January."
              ],
              meta: "12 Hours ago | Technology"
            },
            {
              title: ["Fed holds interest rates for fourth", "time despite tariff turmoil"],
              meta: "1 Day ago | US & Canada"
            },
            {
              title: ["Devastating crash threatens Air", "India's ambitious turnaround"],
              meta: "1 Day ago | Asia"
            },
            {
              title: ["Interest rates held at 4.25% by", "Bank of England"],
              meta: "16 Hours ago | Business"
            }
          ]
        }

      ].map((section, index) => (
        <div key={index} className="w-full sm:w-[48%] lg:w-[23%] flex flex-col">
          <div className="hover:cursor-pointer">
            <img className="h-[170px] w-full object-cover rounded" src={section.img} alt="" />
          </div>

          {section.items.map((item, idx) => (
            <div key={idx} className="mt-4">
              <div className="text-base font-semibold hover:underline hover:cursor-pointer">
                {item.title.map((line, i) => (
                  <h4 key={i}>{line}</h4>
                ))}
              </div>

              {item.desc && (
                <div className="mt-1">
                  {item.desc.map((line, i) => (
                    <p key={i} className="text-sm text-gray-600">{line}</p>
                  ))}
                </div>
              )}

              <p className="mt-2 text-xs text-gray-500">{item.meta}</p>
              <div className="border-b border-gray-300 my-3"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>


                  {/* Latest Audio */}

  <div className='flex border border-slate-900 mt-12 md:ml-70 md:mr-65 ml-4 mr-4'></div>

<div className='flex mt-4 md:ml-70 ml-4 font-bold text-xl'>
  Latest Audio
  <img className='h-7 w-7 ml-1' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
</div>

<div className="flex flex-wrap justify-center md:justify-start gap-8 mt-10 md:ml-70 ml-4">
  {[
    {
      img: "https://ichef.bbci.co.uk/images/ic/1024x576/p0ll62zd.jpg.webp",
      title: "Pride month special",
      channel: "The Documentary Podcast",
      duration: "52 mins"
    },
    {
      img: "https://ichef.bbci.co.uk/images/ic/1024x576/p0ll3v9s.jpg.webp",
      title: ["Andrius Kubilius, EU", "Commissioner for Defence", "and Space: a new era of", "defence readiness"],
      channel: "The Interview",
      duration: "22 mins"
    },
    {
      img: "https://ichef.bbci.co.uk/images/ic/1024x576/p0ll3j07.jpg.webp",
      title: "From pro gamer to what?",
      channel: "Business Daily",
      duration: "19 mins"
    },
    {
      img: "https://ichef.bbci.co.uk/images/ic/1024x576/p0kfs11x.jpg.webp",
      title: ["Wales prepare for Women’s", "Euros debut"],
      channel: "Football Daily",
      duration: "52 mins"
    },
    {
      img: "https://ichef.bbci.co.uk/images/ic/1024x576/p0dv471q.jpg.webp",
      title: ["Trump lands in Europe for", "NATO summit"],
      channel: "World Business Report",
      duration: "52 mins"
    },
    {
      img: "https://ichef.bbci.co.uk/images/ic/1024x576/p0ll4hhd.jpg.webp",
      title: ["President Trump lashes", "out at Iran and Israel after", "ceasefire violations"],
      channel: "Global News Podcast",
      duration: "52 mins"
    }
  ].map((audio, idx) => (
    <div key={idx} className="w-[200px] sm:w-[45%] md:w-[200px]">
      <img className='h-[170px] w-[200px] object-cover' src={audio.img} alt="" />
      <div className='flex flex-col'>
        <p className='text-sm text-gray-400 mt-2 hover:cursor-pointer'>{audio.channel}</p>
        {Array.isArray(audio.title) ? (
          <div className='hover:cursor-pointer hover:underline mt-1'>
            {audio.title.map((line, i) => (
              <p key={i} className='text-sm font-semibold'>{line}</p>
            ))}
          </div>
        ) : (
          <p className='text-sm font-semibold hover:cursor-pointer hover:underline'>{audio.title}</p>
        )}
        <div className='flex mt-6'>
          <div className="flex items-center group mb-2">
            <div className="p-1 rounded-full border transition-colors duration-300 group-hover:bg-gray-500">
              <svg width="20" height="20" viewBox="0 0 12 14" aria-hidden="true" className="fill-black">
                <path d="M5.99996 9.43351L9.46496 11.0741L9.46496 2.0125L2.53496 2.0125L2.53496 11.0741L5.99996 9.43351ZM0.959961 13.5625L0.959961 0.4375L11.04 0.4375L11.04 13.5625L5.99996 11.1761L0.959961 13.5625Z" />
              </svg>
            </div>
            <p className="ml-2 text-sm text-black font-serif hover:cursor-pointer group-hover:bg-transparent">Save</p>
          </div>
          <p className='ml-3 mt-1 text-sm text-gray-500'>{audio.duration}</p>
        </div>
      </div>
    </div>
  ))}
</div>



 


                  {/* Other Some parts like TECH , SCIENCE & HEALTH , CULTURE , ARTS */}
<div>
  <div className='flex border border-slate-900 mt-10 ml-70 mr-330'></div>   
  <div className='flex mt-4 ml-4 md:ml-70 font-bold'>
    TECH 
    <img className='h-6 w-6 ml-1' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
  </div>

  <div className='flex flex-wrap gap-8 mt-3 px-4 md:px-0 ml-0 md:ml-70'>

    {/* COLUMN 1 */}
    <div className='flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%]'>
      <div className='hover:cursor-pointer'>
        <img className='h-[170px] w-full' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/8573/live/78428f80-5110-11f0-918d-fb788d4dd5b5.jpg.webp" alt="" />
      </div>
      <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
        <h4>'Fast tech' warning as UK demand</h4>
        <h4>for cheap gadgets heats up</h4>
      </div>
      <div>
        <p>A UK not-for-profit warns cheap, quickly</p>
        <p>disposed of gadgets could become the new</p>
        <p>"fast fashion".</p>
      </div>
      <p className='mt-3 font-light'>5 Hours ago</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Google may be forced to link to</h4>
        <h4>rival search platforms in the UK</h4>
      </div>
      <p className='mt-3 font-light'>19 hours ago | Technology</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Supercell boss: 'We need to take</h4>
        <h4>bigger risks'</h4>
      </div>
      <p className='mt-3 font-light'>1 day ago</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Tesla robotaxi 'low-key' launch in</h4>
        <h4>Texas</h4>
      </div>
      <p className='mt-3 font-light'>2 day ago | Technology</p>
    </div>

    {/* COLUMN 2 */}
    <div className='flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%]'>
      <div className='hover:cursor-pointer'>
        <img className='h-[170px] w-full' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/ce01/live/c46dc790-5114-11f0-918d-fb788d4dd5b5.jpg.webp" alt="" />
      </div>
      <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Millions of children at risk as</h4>
        <h4>vaccine uptake stalls</h4>
      </div>
      <div>
        <p>A global study finds large numbers of</p>
        <p>children are unvaccinated against diseases</p>
        <p>like measles, tuberculosis and polio, which</p>
        <p>makes outbreaks more likely.</p>
      </div>
      <p className='mt-3 font-light'>5 Hours ago  | Health</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>'Best place to have herpes': New</h4>
        <h4>Zealand advert wins top prize</h4>
      </div>
      <p className='mt-3 font-light'>19 hours ago | World</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Sweets to toy swan - what Indian</h4>
        <h4>astronaut will take on historic</h4>
        <h4>space voyage</h4>
      </div>
      <p className='mt-3 font-light'>19 Hours ago | World</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>'Giving soldiers faulty ear plugs</h4>
        <h4>was a betrayal'</h4>
      </div>
      <p className='mt-3 font-light'>1 day ago | Birmingham & Black Country</p>
    </div>

    {/* COLUMN 3 */}
    <div className='flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%]'>
      <div className='hover:cursor-pointer'>
        <img className='h-[170px] w-full' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/7aa5/live/a126d390-50be-11f0-a136-53d7f1f40c12.jpg.webp" alt="" />
      </div>
      <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Singer Jessie J undergoes surgery</h4>
        <h4>for breast cancer</h4>
      </div>
      <div>
        <p>The singer reveals she has undergone</p>
        <p>surgery and is now resting at home</p>
        <p>awaiting her results.</p>
      </div>
      <p className='mt-3 font-light'>1 day ago  | Culture</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Mott The Hoople's Mick Ralphs</h4>
        <h4>dies aged 81</h4>
      </div>
      <p className='mt-3 font-light'>14 hours ago | Hereford & Worcester</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>As Diddy prosecution rests, how</h4>
        <h4>compelling is the case against</h4>
        <h4>him?</h4>
      </div>
      <p className='mt-3 font-light'>1 day ago | US & Canada</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Glastonbury Festival: Five</h4>
        <h4>newcomers you don't want to miss</h4>
      </div>
      <p className='mt-3 font-light'>1 day ago | Somerset</p>
    </div>

    {/* COLUMN 4 */}
    <div className='flex flex-col w-full sm:w-[48%] md:w-[48%] lg:w-[23%]'>
      <div className='hover:cursor-pointer'>
        <img className='h-[170px] w-full' src="https://ichef.bbci.co.uk/images/ic/480x270/p0lkjbr0.jpg.webp" alt="" />
      </div>
      <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
        <h4>The Scandi homeware style that</h4>
        <h4>Swedish people love</h4>
      </div>
      <div>
        <p>Scandinavian interior style isn’t all about</p>
        <p>minimalist living and identikit furniture.</p>
        <p>Here's why abundance, exuberance and</p>
        <p>"luxe cosiness" are still popular today.</p>
      </div>
      <p className='mt-3 font-light'>3 day ago  | Culture</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>Serpents to saints: The fascinating</h4>
        <h4>journey of India's spiritual art</h4>
      </div>
      <p className='mt-3 font-light'>4 day ago | Asia</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>For 50 years, Sydney Opera House</h4>
        <h4>has had one man on speed dial</h4>
      </div>
      <p className='mt-3 font-light'>3 day ago | Australia</p>
      <div className='flex border mt-1 border-gray-400'></div>
      <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
        <h4>'Smoke and mirrors': Who was the</h4>
        <h4>real Andy Warhol?</h4>
      </div>
      <p className='mt-3 font-light'>13 June 2025 | Culture</p>
    </div>

  </div>
</div>




            {/* Watch Part */}

<section className="bg-[#141618] text-white py-10">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Divider and Heading */}
    <div className="border-b border-white mb-2"></div>
    <h2 className="flex items-center text-xl font-bold mb-6">
      Watch
      <img
        className="h-7 w-7 ml-2 filter invert"
        src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png"
        alt="Watch Icon"
      />
    </h2>

    {/* Responsive Flex Container */}
    <div className="flex flex-col lg:flex-row gap-6 bg-black p-4 rounded">
      
      {/* Video Section */}
      <div className="relative w-full lg:w-[60%] hover:cursor-pointer">
        <img
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[535px] object-cover rounded"
          src="https://ichef.bbci.co.uk/images/ic/1920x1080/p0ll128c.jpg.webp"
          alt="Main video"
        />
        <img
          className="h-12 w-12 rounded-full border absolute bottom-3 left-3 bg-white"
          src="https://static.thenounproject.com/png/1917910-200.png"
          alt="Play icon"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center w-full lg:w-[40%] px-1">
        <div className="text-2xl sm:text-3xl font-bold hover:underline hover:cursor-pointer">
          <p>Hungry cub makes bold</p>
          <p>move to beat the pack</p>
        </div>

        <div className="mt-4 text-sm sm:text-base text-gray-300">
          <p>Miss too many opportunities and these young Arctic</p>
          <p>foxes could become too weak to survive.</p>
        </div>

        <div className="mt-5">
          <button className="hover:bg-[#D2D4D6] hover:text-black border-2 border-white text-white font-bold px-7 py-2 rounded transition w-fit">
            See More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>






            {/* Other Some Parts pf Travel , World's Table , Earth , Video */}


<section className="bg-white text-black py-10">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Divider & Title */}
    <div className="border-b border-slate-900 mb-4"></div>
    <div className="flex items-center text-xl font-bold mb-6 pl-4 md:pl-0">
      Travel
      <img
        className="h-6 w-6 ml-2 mt-1"
        src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png"
        alt=""
      />
    </div>

    {/* Responsive 4-Column Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Each Column */}
      {[...Array(4)].map((_, idx) => (
        <div key={idx} className="flex flex-col space-y-3">
          {/* Top Image & Title */}
          <img
            className="h-[170px] w-full object-cover rounded hover:cursor-pointer"
            src={[
              "https://ichef.bbci.co.uk/images/ic/480x270/p0lkzgg9.jpg.webp",
              "https://ichef.bbci.co.uk/images/ic/480x270/p0lgs9gh.jpg.webp",
              "https://ichef.bbci.co.uk/images/ic/480x270/p0lkhpby.jpg.webp",
              "https://ichef.bbci.co.uk/images/ic/480x270/p0ljyb2w.jpg.webp"
            ][idx]}
            alt=""
          />

          <div className="text-xl font-semibold hover:underline hover:cursor-pointer">
            {[
              "How to explore Glastonbury's Pagan side",
              "Is there such a thing as American cuisine?",
              "After a deadly mudslide, this town tried to stop the next one",
              "The science behind brewing tastier non-alcoholic beer"
            ][idx]}
          </div>

          <p className="text-sm text-gray-600">
            {[
              "Rollo Maughfling helped pioneer Glastonbury’s Druidic revival. Here’s how to enjoy the spiritual side beyond the festival.",
              "Food writer Felicity Cloake travels across the US to understand its national cuisine in her new book.",
              "Montecito, California, is taking action after a devastating mudslide in 2018.",
              "Tech Now explores a UK brewery’s innovative approach to alcohol-free beer."
            ][idx]}
          </p>

          <p className="font-light text-sm">
            {[
              "15 Hours ago | Travel",
              "9 June 2025 | Travel",
              "18 Hours ago | Future",
              "5 days ago | Tech Now"
            ][idx]}
          </p>

          <div className="border-t border-gray-300 my-3"></div>

          {/* List Items */}
          {[
            [
              "Paddling the dramatic 'Grand Canyon of Canada'",
              "How self-drive tuk-tuks are transforming travel in Sri Lanka",
              "A technicolour visit to Morocco's holiest town"
            ],
            [
              "Has matcha madness gone too far?",
              "How WW2 changed the French diet",
              "Eight rare juices you can only try in the Amazon"
            ],
            [
              "Electric cars and heat pumps making progress, UK climate advisers say",
              "Mexico's hidden 'bat volcano'",
              "Remembering India's iconic crocodile-hunting tigress"
            ],
            [
              "The ancient Mexican temple built to honour a serpent God",
              "Even giant dinosaurs have a soft spot",
              "Baby elephant takes a muddy tumble"
            ]
          ][idx].map((title, i) => (
            <div key={i}>
              <p className="font-semibold text-lg hover:underline hover:cursor-pointer">
                {title}
              </p>
              <p className="mt-1 font-light text-sm">
                {[
                  ["2 days ago", "3 days ago", "4 days ago"],
                  ["7 June 2025", "6 June 2025", "2 June 2025"],
                  ["2 hours ago", "2 days ago | The Travel Show", "22 hrs ago | Asia"],
                  ["6 days ago | The Travel Show", "7 days ago | Natural wonders", "8 days ago | Natural wonders"]
                ][idx][i]}
              </p>
              <div className="border-t border-gray-300 my-3"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>





           {/* Discover more from the BBC */}

        <div className='mt-20'>
          <MoreWatchFromBBC />
        </div>

      <div className='flex border border-slate-900 mt-12 mb-6'></div>


        {/* Home Page Ends Here And Footer Are below the home starts here */}


        


</>
  )
}

export default News
