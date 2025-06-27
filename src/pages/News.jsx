import React from 'react'
import { Link } from 'react-router-dom'
import MustWatch from '../components/MustWatch'
import MoreWatchFromBBC from '../components/MoreWatchFromBBC'

const News = () => {
  return (
    <>

    {/* Home or Top of the page story */}


    <div className='flex items-center justify-center mt-8'>
        <div className='flex items-center justify-center h-14 w-14 text-red-600'>
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-testid="live-icon-svg-styled" class="sc-c0c6cf11-1 gnvphf sc-9c8c5e05-0 kHfxfq"><path id="outer" d="M13.3922 31.3913C6.25751 30.2611 0.846472 24.5392 0.0835577 17.3057C-0.410924 12.714 1.3127 7.95289 4.63278 4.61868C12.2761 -3.01046 25.1467 -0.891255 29.922 8.78645C32.6204 14.2257 31.9988 20.5268 28.2972 25.4293C24.8924 29.922 19.0151 32.2672 13.3922 31.3913ZM19.0858 28.6505C20.329 28.3255 22.2363 27.4778 23.2394 26.7856C24.2142 26.1215 25.8955 24.4686 26.616 23.4655C27.4213 22.3352 28.2972 20.4986 28.6787 19.0999C29.1167 17.4611 29.1167 14.0986 28.6787 12.4597C28.0288 10.0721 26.7573 7.96702 24.963 6.22927C23.6774 5.01426 22.9003 4.4774 21.3745 3.75687C19.3683 2.81029 18.3087 2.59837 15.7939 2.59837C13.2791 2.59837 12.2195 2.81029 10.2134 3.75687C8.68753 4.4774 7.91049 5.01426 6.62484 6.22927C4.83058 7.96702 3.57318 10.0721 2.90916 12.488C2.4712 14.0703 2.4712 17.4893 2.90916 19.0717C3.57318 21.4876 4.83058 23.5926 6.62484 25.3304C8.15067 26.7856 9.35155 27.5344 11.386 28.2973C13.5193 29.1026 16.7829 29.258 19.0858 28.6505Z"></path><path id="inner" d="M13.8318 24.0437C10.5541 23.2949 7.94042 20.6671 7.24815 17.3894C6.42872 13.5042 8.40665 9.57661 12.0658 7.83886C16.2901 5.84681 21.4327 7.72584 23.4389 12.0066C25.6287 16.683 23.1422 22.2918 18.1974 23.8459C16.9965 24.2274 15.0186 24.3122 13.8318 24.0437Z"></path></svg>
            <h5 className=' font-bold'><Link to='/live'>LIVE</Link></h5>
        </div>

    </div>  

    <div className='hover:underline hover:cursor-pointer'>
      <Link to='/sports'>
       <div className='flex items-center justify-center'>
      <h2 className='text-5xl text-slate-900 font-serif font-extralight'>Iran launches fresh air strikes on israel</h2>
      </div>
      <div className='flex items-center justify-center '>
      <h2 className='text-5xl text-slate-900 font-serif font-extralight'>after military figure killed in Tehran</h2>
      </div>
      </Link>
    </div>
   

    <div className='flex items-center justify-center mt-10'>
        <div className='flex '>
            <img className='h-[350px] w-[700px]' src="https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/vivo/live/images/2025/6/16/bb973115-1ac6-474b-8ae0-27fd58549d47.jpg.webp" alt="Pic From Iran-Israel" />
          
          <div className='flex flex-col font-serif'>
            <div className='hover:underline text-2xl font-bold mt-2 ml-5'>
            <div className=' flex text-lg font-semibold'>
               Trump told Israel not to kill
            </div>
            <div className='flex text-lg font-semibold'>
                Iran'supreme leader-
            </div>
            <div className='flex text-lg font-semibold'>
                Report
            </div>
            </div>
            <div className='flex border border-gray-300 mt-2 ml-3'></div>

         <div className='hover:underline text-2xl font-bold mt-2 ml-5'>
           <div className='flex text-lg font-semibold'>
                Nowhere feels safe':  
            </div>
            <div className='flex text-lg font-semibold'>
                Iranians on life under
            </div>
            <div className='flex text-lg font-semibold'>
               Israeli attacks
            </div>
         </div>

         <div className='flex border border-gray-300 mt-2 ml-3'></div>

         <div className='hover:underline text-2xl font-bold mt-2 ml-5'>
           <div className='flex text-lg font-semibold'>
                Israeli paramedics on the
            </div>
            <div className='flex text-lg font-semibold'>
                 ground of missile strike in 
            </div>
            <div className='flex text-lg font-semibold'>
               Haifa 
            </div>
         </div>

          </div>

        </div>
    </div>

        <div className='flex border border-slate-900 mt-8 ml-70 mr-65 '></div>
   

                         {/* More Top Stories */}


   <div className='flex mt-3 ml-70 font-bold text-xl'>
    MORE TOP STORIES
   </div>

<div className='flex mt-3 ml-70 '>
    <div>
        <img className='h-[200px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/35db/live/f4a07910-4a72-11f0-a696-ed7606278c94.jpg.webp" alt="" />

        <div className='flex flex-col font-serif mt-2 font-semibold hover:cursor-pointer hover:underline'>
        <p> Trump orders increase in migrant  </p>
        <p>deportations</p>
        </div>

         <div className='flex flex-col font-serif mt-2 font-light text-gray-500 hover:cursor-pointer hover:underline'>
        <p>The president called on federal agencies to  </p>
        <p>enforce the "largest mass deportation</p>
        <p>programme in history".</p>

        </div>
        <p className='mt-3'>5 Hours ago  | World</p>
         <div className='flex border border-slate-900 mt-2 '></div>


    <div className='mt-6'>
        <img className='h-[200px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/3a0a/live/fbecc040-4b4c-11f0-8bdb-73c0815c1d31.jpg.webp" alt="" />
    </div>

    
        <div className='flex flex-col font-serif mt-2 font-semibold hover:cursor-pointer hover:underline'>
        <p> How the Air India crash</p>
        <p> investigation is unfolding</p>
        </div>

         <div className='flex flex-col font-serif mt-2 font-light text-gray-500 hover:cursor-pointer hover:underline'>
        <p>Every scorched cable, nut and bolt will be</p>
        <p>examined along with the black box to</p>
        <p>determine why it went down 30 seconds</p>
        <p>after take-off</p>

        </div>
        <p className='mt-3'>4 Hours ago  | Asia</p>

    </div>


     <div className='ml-10'>
        <img className='h-[370px] w-[520px  ]' src="https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/24e4/live/7da54b20-4bd4-11f0-8c47-237c2e4015f5.jpg" alt="" />

        <div className='flex items-center justify-center h-20 w-20 '>
            <svg width="38" height="38" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-testid="live-icon-svg-styled" class="sc-c0c6cf11-1 gnvphf sc-9c8c5e05-0 kHfxfq"><path id="outer" d="M13.3922 31.3913C6.25751 30.2611 0.846472 24.5392 0.0835577 17.3057C-0.410924 12.714 1.3127 7.95289 4.63278 4.61868C12.2761 -3.01046 25.1467 -0.891255 29.922 8.78645C32.6204 14.2257 31.9988 20.5268 28.2972 25.4293C24.8924 29.922 19.0151 32.2672 13.3922 31.3913ZM19.0858 28.6505C20.329 28.3255 22.2363 27.4778 23.2394 26.7856C24.2142 26.1215 25.8955 24.4686 26.616 23.4655C27.4213 22.3352 28.2972 20.4986 28.6787 19.0999C29.1167 17.4611 29.1167 14.0986 28.6787 12.4597C28.0288 10.0721 26.7573 7.96702 24.963 6.22927C23.6774 5.01426 22.9003 4.4774 21.3745 3.75687C19.3683 2.81029 18.3087 2.59837 15.7939 2.59837C13.2791 2.59837 12.2195 2.81029 10.2134 3.75687C8.68753 4.4774 7.91049 5.01426 6.62484 6.22927C4.83058 7.96702 3.57318 10.0721 2.90916 12.488C2.4712 14.0703 2.4712 17.4893 2.90916 19.0717C3.57318 21.4876 4.83058 23.5926 6.62484 25.3304C8.15067 26.7856 9.35155 27.5344 11.386 28.2973C13.5193 29.1026 16.7829 29.258 19.0858 28.6505Z"></path><path id="inner" d="M13.8318 24.0437C10.5541 23.2949 7.94042 20.6671 7.24815 17.3894C6.42872 13.5042 8.40665 9.57661 12.0658 7.83886C16.2901 5.84681 21.4327 7.72584 23.4389 12.0066C25.6287 16.683 23.1422 22.2918 18.1974 23.8459C16.9965 24.2274 15.0186 24.3122 13.8318 24.0437Z"></path></svg>
            <h5 className='text-2xl font-bold ml-1  text-red-600'><Link to='/live'>LIVE</Link></h5>
        </div>

        <div className='flex flex-col text-2xl font-serif mt-1 font-semibold hover:cursor-pointer hover:underline'>
          <p>Trump demands Iran's 'unconditional</p> 
          <p>surrender' but says supreme leader is safe 'for</p>
          <p>now'</p>
        </div>

         <div className='flex flex-col font-serif mt-2 font-light text-gray-500 hover:cursor-pointer hover:underline'>
        <p>The US president is said to be weighing whether to join Israeli strikes against Iranian </p>
        <p>nuclear facilities.</p>
        </div>


        <div className='mt-14 font-semibold'>
            <p className='hover:underline'>Trump's Iran dilemma exposes bitter split among Mega faithful </p>
            <p className='mt-3 hover:underline'><Link to='/video'> ▶ How one US weapon could change the course of the Israel-Iran conflict</Link> </p>
        </div>
    </div>


    <div className='ml-4 font-semibold text-xl'>
        <div className='hover:underline cursor-pointer'>
            <p>Trade a sudden exit, middle East</p>
            <p>conflict - five takeaways from G7</p>
        </div>

        <div className='mt-4 font-light text-black hover:cursor-pointer'>
            <p> This year's summit in canada did not go as </p>
            <p>planned, but leaders of the world's wealthiest...</p>
            <p className='mt-3 font-semibold text-sm text-gray-500'>4 Hours ago  | Us & Canada</p>
             <div className='flex border border-slate-900 mt-2'></div>
        </div>
        

        
    <div className='mt-6'>
        <div className='hover:underline cursor-pointer'>
            <p>Indonesia issues highest alert as</p>
            <p> volcano erupts</p>
        </div>

        <div className='mt-4 font-light text-black hover:cursor-pointer'>
            <p>Disaster agency imposes exclusion zone </p>
            <p>around Lewotobi Laki-Laki after it spewed...</p>
            <p className='mt-3 font-semibold text-sm text-gray-500'>9 Hours ago  | Asia</p>
             <div className='flex border border-slate-900 mt-2'></div>
        </div>

    </div>


     <div className='mt-6'>
        <div className='hover:underline cursor-pointer'>
            <p>Minnesota's 'nice' culture shattered</p>
            <p>by political violence</p>
        </div>

        <div className='mt-4 font-light text-black hover:cursor-pointer'>
            <p>In a place that prides itself on politeness and</p>
            <p>respect, people are reeling after the targeted...</p>
            <p className='mt-3 font-semibold text-sm text-gray-500'>4 Hours ago  | US & Canada</p>
             <div className='flex border border-slate-900 mt-2'></div>
        </div>

    </div>


     <div className='mt-6'>
        <div className='hover:underline cursor-pointer'>
            <p>'Spectacular' moment an</p>
            <p>enormous tornado crosses a</p>
            <p>rainbow</p>
        </div>

        <div className='mt-4 font-light text-black hover:cursor-pointer'>
            <p>Stormchasers captured footage of the major</p>
            <p>twister swirling near Dickens, Nebraska.</p>
            <p className='mt-3 font-semibold text-sm text-gray-500'>1 Hours ago  | US & Canada</p>
        </div>

    </div>


    </div>

</div>

<div className='flex border border-slate-900 mt-10 ml-70 mr-65 '></div>


             {/* ONLY FROM THE BBC */} 


    <div className='flex mt-3 ml-70 font-bold text-xl'>
        ONLY FROM THE BBC
    </div>
<div className="flex ml-70 gap-8 mt-6">
 
  <div className="hover:cursor-pointer">
    <img className="w-[670px] h-[375px] object-cover" src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/3798/live/5c7746b0-4b6b-11f0-8c47-237c2e4015f5.jpg.webp" alt="Article 1" />
    <div className="mt-4 px-2 font-serif">
      <p className="font-semibold hover:underline"> Martina Navratilova: 'I wouldn't have left home for Trump's America'</p>
      <p className="mt-2 text-gray-600 text-sm"> The tennis icon tells the BBC she doesn't think a Trump-led government would let her in. </p>
      <p className='mt-3 font-light text-sm text-gray-500'>8 Hours ago  | Us & Canada</p>
    </div>
  </div>

  <div className=" hover:cursor-pointer">
    <img className="w-[670px] h-[375px] object-cover" src="https://ichef.bbci.co.uk/images/ic/raw/p0ljw951.jpg.webp" alt="Article 2"/>
    <div className="mt-4 px-2 font-serif">
      <p className="font-semibold hover:underline"> Why people are turning to 'bibliotherapy'</p>
      <p className="mt-2 text-gray-600 text-sm"> Reading fiction could improve people's wellbeing - but getting it right depends on the book, </p>
      <p className="mt-2 text-gray-600 text-sm"> and the person. </p>
      <p className='mt-3 font-light text-sm text-gray-500'>21 Hours ago  | Future</p>
    </div>
  </div>

</div>

<div className='flex border border-slate-900 mt-10 ml-70 mr-65 '></div>

                {/* Global News Podcast */}

    <div className='flex mt-3 ml-70 font-bold text-xl'>
        Global News Podcast
    </div>

    <div className='flex justify-center mt-6'>
  <div className='bg-gradient-to-r from-[#000000] via-[#342626] to-[#813333] text-white h-full w-[1400px] p-6'>

    <div className='flex justify-between items-start mt-4 ml-50'>

      <div className='mt-10'>
        <div className='ml-10 text-4xl hover:underline font-semibold hover:cursor-pointer'>
          <p>Trump demands Iran's</p>
          <p>'unconditional surrender'</p>
        </div>

        <div className='mt-3 text-sm hover:cursor-pointer ml-10 text-gray-400'>
          <p>The president is said to be deciding whether to join Israeli</p>
          <p>strikes on Iran</p>
        </div>

        <div className='flex mt-3 ml-10 text-gray-400'>
          <img className='bg-white w-9 h-9 rounded-full border' src="https://cdn-icons-png.flaticon.com/128/0/375.png" alt="" />
          <p className='mt-2 ml-3 text-sm text-white font-bold font-serif'>28 Mins</p>

          <div className='flex ml-5'>
            <img className='bg-white w-9 h-9 rounded-full' src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png" alt="" />
            <p className='mt-2 ml-3 text-sm text-white font-bold font-serif'>Save</p>
          </div>
        </div>
      </div>

      <div className='mr-95 mt-1'>
        <img className='w-[250px] h-[250px] rounded-md object-cover' src="https://ichef.bbci.co.uk/images/ic/1024x576/p0lhbf2q.jpg.webp" alt="" />
      </div>
    </div>

  </div>
</div>


<div className='flex border border-slate-900 mt-5 ml-70 mr-65 '></div>


                    {/* MORE NEWS PART-1*/}   

    <div className='flex mt-3 ml-70 font-bold text-xl'>
        More news <img className='h-8 w-8 ml-1 ' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
    </div>

    <div className='flex mt-3 ml-70'>
         <div>
            <div className='flex flex-col text-2xl font-serif mt-9 font-semibold hover:cursor-pointer hover:underline'>
            <p>Australia lifts blood,</p>
            <p>plasma donation ban</p>
            <p>for men</p>
            </div>

            <div className='flex flex-col font-serif mt-2 font-light text-gray-500 hover:cursor-pointer hover:underline'>
            <p>The Lifeblood service says the changes will </p>
            <p>have no impact on safety but will boost the</p>
            <p>donor pool.</p>

            </div>
            <p className='mt-4 font-light'>3 Hours ago  | Health</p>

            <div className='flex border border-slate-300 mt-24 '></div>
         </div>
         <div>
            <img className='h-[333px] w-[600px] ml-6' src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/f9e2/live/f4592070-4bde-11f0-80ce-13785641ba8f.jpg.webp" alt="" />
            <div className='flex border border-slate-300 mt-4 '></div>
         </div>
         

         <div>
            <img className='w-[300px] h-[150px] ml-4' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/d0a7/live/ce756280-4b7d-11f0-86d5-3b52b53af158.png.webp" alt="" />


            <div className='flex flex-col text-xl font-serif mt-2 ml-4 hover:cursor-pointer hover:underline'>
                <p>'Taxi boats' pick up migrants in</p>
                <p>waist-deep water as Channel</p>
                <p>smugglers switch tactics</p>
            </div>

             <div className='flex flex-col font-serif mt-2 ml-4 font-light text-gray-500 hover:cursor-pointer hover:underline'>
            <p>They are being launched from new sites and </p>
            <p>in new ways - out of reach of French police.</p>

            </div>
            <p className='mt-3 ml-4 font-light'>7 Hours ago  | Europe</p>
            <div className='flex border border-slate-300 mt-3'></div>
         </div>
    </div>

                     {/* MORE NEWS PART-2*/}   

    <div className='flex mt-7 ml-70'>
        <div>
            <img className='h-[160px] w-[290px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/3a16/live/ac99dc00-4b40-11f0-8c47-237c2e4015f5.png.webp" alt="" />
            <div className='flex flex-col font-serif mt-2 font-semibold hover:cursor-pointer hover:underline'>
                <p>The teen who filmed the Air India</p>
                <p>crash video the world saw</p>
            </div>

            <div className='flex flex-col font-serif mt-2 font-light text-gray-500 hover:cursor-pointer hover:underline'>
                <p>Aryan Asari just wanted to film planes</p>
                <p>flying in the sky - but he ended up</p>
                <p>capturing one of the country's biggest air</p>
                <p>crashes.</p>
            </div>
             <p className='mt-3 font-light'>17 Hours ago  | Asia</p>
             <div className='flex border border-slate-300 mt-3'></div>

        </div>

         <div className='ml-3'>
             <img className='h-[160px] w-[290px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/b865/live/64f374b0-4b7c-11f0-86d5-3b52b53af158.jpg.webp" alt="" />
            <div className='flex flex-col font-serif mt-2 font-semibold hover:cursor-pointer hover:underline'>
                <p>Police 'should have arrested' fatal</p>
                <p>crash diplomat</p>
            </div>

            <div className='flex flex-col font-serif mt-2 font-light text-gray-500 hover:cursor-pointer hover:underline'>
                <p>A British police force apologises over a fatal</p>
                <p>crash after which an American diplomat</p>
                <p>fled the country.</p>
            </div>
             <p className='mt-3 font-light'>4 Hours ago  | Northamptonshire</p>
             <div className='flex border border-slate-300 mt-4'></div>
       
        </div>


            <div className='ml-3'>
                <img className='h-[160px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/547f/live/0ee4c630-4b56-11f0-8bdb-73c0815c1d31.jpg.webp" alt="" />
                <div className='flex flex-col font-serif mt-2 font-semibold hover:cursor-pointer hover:underline'>
                    <p>Will Smith says Oscars slap fallout</p>
                    <p>was brutal</p>
                </div>

                <div className='flex flex-col font-serif mt-2 font-light text-gray-500 hover:cursor-pointer hover:underline'>
                    <p>The Fresh Prince actor says taking an</p>
                    <p>"honest look at myself" inspired a return to</p>
                    <p>music.</p>
                </div>
                <p className='mt-3 font-light'>19 Hours ago  | Newsbeat</p>
                <div className='flex border border-slate-300 mt-4'></div>
       
            </div>

            <div className='ml-3'>
                <div className='flex flex-col font-serif font-semibold hover:cursor-pointer hover:underline'>
                    <p>Russia's deadliest attack on Kyiv for</p>
                    <p>months flattens part of apartment</p>
                    <p>block</p>
                </div>

                <div className='flex flex-col font-serif mt-2 text-sm font-light text-gray-500 hover:cursor-pointer hover:underline'>
                    <p>Ukrainian officials say a drone smashed into</p>
                    <p>the building, leaving a number of people</p>
                    <p>dead and wounded.</p>
                </div>
                <p className='mt-3 font-light'>13 Hours ago  | Europe</p>


                 <div className='flex flex-col font-serif mt-4 font-semibold hover:cursor-pointer hover:underline'>
                    <p>Israeli forces kill 51 Palestinians</p>
                    <p>waiting for flour at Gaza aid site,</p>
                    <p>witnesses and rescuers say</p>
                </div>

                <div className='flex flex-col font-serif mt-2 text-sm font-light text-gray-500 hover:cursor-pointer hover:underline'>
                    <p>It is potentially the deadliest of the almost</p>
                    <p>daily shootings that have been taking place</p>
                    <p>recently near aid distribution sites.</p>
                </div>
                <p className='mt-2 font-light'>16 Hours ago  | Middle East</p>

       
            </div>
            

    </div>



                  {/* Must Watch */}

        <div className='mt-20'>
            <MustWatch />
        </div>



                {/* Technology > */}

   <div className='flex border border-slate-900 mt-5 ml-70 mr-65 '></div>

    <div className='flex mt-3 ml-70 font-bold'>
        TECHNOLOGY <img className='h-6 w-6 ml-1 ' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
    </div>

    <div className="flex ml-70 gap-8 mt-6">
        <div>
            <img className='h-[480px] w-[900px]' src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/0307/live/ea26bdf0-4b80-11f0-86d5-3b52b53af158.png.webp" alt="" />
        </div>

        <div className='flex flex-col mt-34'>
            <div className='text-2xl font-bold hover:underline hover:cursor-pointer'>
                <h4>Print and shoot: How 3D-</h4>
                <h4>Printed guns are spreaning</h4>
                <h4>online</h4>
            </div>

            <div className='mt-3'>
                <p>BBC Trending has investigated the global spread of 3D-</p>
                <p>printed guns across social media platforms and websites</p>
                <p>offering how-to guides.</p>
            </div>
            
            <div className='mt-3 py-2 px-2'>
               <button className=" hover:bg-[#545658] border-2 border-black hover:cursor-pointer text-black font-bold px-7 py-2 rounded transition hover:text-white w-fit"> See More </button>
            </div>
              
        </div>
    </div>


                
                {/* SCIENCE AND HEALTH > */}

       <div className='flex border border-slate-900 mt-10 ml-70 mr-65 '></div>    

       <div className='flex mt-4 ml-70 font-bold'>
          SCIENCE AND HEALTH <img className='h-6 w-6 ml-1 ' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
       </div>
        
       
       <div className="flex ml-70 gap-8 mt-6">

        <div className='flex flex-col mt-30'>
            <div className='text-2xl font-semibold hover:underline hover:cursor-pointer'>
                <h3>Why your fingers wrinkle in</h3>
                <h3>the bath</h3>
            </div>
            
             <div className='mt-3'>
                <p>The skin on our fingertips and toes shrivels like prunes</p>
                <p>when soaked in water. But is this an adaptation from our</p>
                <p>evolutionary past? And what can it reveal about our</p>
                <p>health today?</p>
            </div>


             <div className='mt-3 py-2 px-2'>
               <button className=" hover:bg-[#545658] border-2 border-black hover:cursor-pointer text-black font-bold px-7 py-2 rounded transition hover:text-white w-fit"> See More </button>
            </div>
        </div>

        <div>
            <img className='h-[450px] w-[950px]' src="https://ichef.bbci.co.uk/images/ic/1024xn/p0cg24kg.jpg.webp" alt="" />
        </div>

       </div>
        


                 {/* Four parts Us & Canada News , More World News , Sports , Business */}
    <div>
             <div className='flex border border-slate-900 mt-10 ml-70 mr-330'></div>   
           <div className='flex mt-4 ml-70 font-bold'>
             Us & CANADA NEWS <img className='h-6 w-6 ml-1 ' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
           </div>
           <div className='flex ml-70 gap-8 mt-3'>
              <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/ff5e/live/febd36e0-4d24-11f0-9efb-9fc6c4760a4c.jpg.webp" alt="" />
              </div>

              <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Trump ends funding for LGBTQ</h4>
                <h4>youth option on national suicide</h4>
                <h4>hotline</h4>
              </div>

              <div>
                <p>The Trevor Project, an organisation</p>
                <p>involved in the service, called the change</p>
                <p>"incomprehensible".</p>
              </div>

                <p className='mt-3 font-light'>12 Hours ago  | US & Canada</p>

                <div className='flex border border-gray-400'></div>

                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Why the Karen Read murder trial</h4>
                <h4>caused such a frenzy</h4>
              </div>

                 <p className='mt-3 font-light'>1 day ago | US & Canada</p>
                <div className='flex border border-gray-400'></div>


                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Karen Read found not guilty of</h4>
                   <h4>murdering Boston police officer</h4>
                   <h4> boyfriend</h4>
                </div>
                <p className='mt-3 font-light'>1 day ago | US & Canada</p>
                <div className='flex border border-gray-400'></div>


                <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Los Angeles Lakers to sell majority</h4>
                   <h4>ownership in historic deal</h4>
                </div>
                <p className='mt-3 font-light'>1 day ago | US & Canada</p>


              </div>



                        {/* More World News Part */}

    
               
                <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/ae65/live/70f8e800-4d23-11f0-9efb-9fc6c4760a4c.jpg.webp" alt="" />
              </div>

              <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Is the UK about to get dragged into</h4>
                <h4>Iran-Israel conflict?</h4>
              </div>

              <div>
                <p>Britain is almost certain to be affected if the</p>
                <p>US gets involved - but what role could it</p>
                <p>play?</p>
              </div>

                <p className='mt-3 font-light'>8 Hours ago  | Middle East</p>

                <div className='flex border border-gray-400'></div>

                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Israel strikes unfinished Arak</h4>
                <h4>heavy water reactor in Iran</h4>
              </div>

                 <p className='mt-3 font-light'> 9 hours ago | Middle Easta</p>
                <div className='flex border border-gray-400'></div>


                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Trump to decide on US action in</h4>
                   <h4>Israel-Iran conflict within two</h4>
                   <h4>weeks</h4>
                </div>
                <p className='mt-3 font-light'>10 Hours ago | Middle East</p>
                <div className='flex border border-gray-400'></div>


                <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Israeli hospital hit by Iranian</h4>
                   <h4>missile strike</h4>
                </div>
                <p className='mt-3 font-light'>11 Hours ago | Middle East</p>


              </div>
              

                  {/* Sports Part */}


             <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/659d/live/542b3860-4d26-11f0-9b50-8f26a45d0428.jpg.webp" alt="" />
              </div>

              <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                <h4>'This is it - time for England to be</h4>
                <h4>winners'</h4>
              </div>

              <div>
                <p>England's series against India, which</p>
                <p>begins on Friday, starts a era-defining 10-</p>
                <p>game spell for captain Ben Stokes and</p>
                <p>coach Brendon McCullum, writes chief</p>
                <p>cricket reporter Stephan Shemilt.</p>
              </div>

                <p className='mt-3 font-light'>13 Hours ago  | Cricket</p>

                <div className='flex border border-gray-400'></div>

                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                <h4>'He's got such an aura' - Farrell's</h4>
                <h4>rise to Lions top job</h4>
              </div>

                 <p className='mt-3 font-light'> 1 hours ago | British & Irish Lions</p>
                <div className='flex border border-gray-400'></div>


                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>McIlroy two behind Scheffler at</h4>
                   <h4>Travelers Championship</h4>
                </div>
                <p className='mt-3 font-light'>8 Hours ago | Golf</p>
                <div className='flex border border-gray-400'></div>


                <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Real Madrid forward Mbappe</h4>
                   <h4>released from hospital</h4>
                </div>
                <p className='mt-3 font-light'>10 Hours ago | European Football</p>

              </div>


                  {/* Business Part */}


              <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/30d3/live/e18c6dc0-4d29-11f0-9efb-9fc6c4760a4c.jpg.webp" alt="" />
              </div>

              <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Trump confirms further delay to</h4>
                <h4>TikTok ban or sale deadline</h4>
              </div>

              <div>
                <p>It's the third time the date has been moved</p>
                <p>back by Trump since he took office in</p>
                <p>January.</p>
              </div>

                <p className='mt-3 font-light'>12 Hours ago  | Technology</p>

                <div className='flex border border-gray-400'></div>

                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Fed holds interest rates for fourth</h4>
                <h4>time despite tariff turmoil</h4>
              </div>

                 <p className='mt-3 font-light'> 1 day ago | US & Canada</p>
                <div className='flex border border-gray-400'></div>


                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Devastating crash threatens Air</h4>
                   <h4>India's ambitious turnaround</h4>
                </div>
                <p className='mt-3 font-light'>1 day ago | Asia</p>
                <div className='flex border border-gray-400'></div>


                <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Interest rates held at 4.25% by</h4>
                   <h4>Bank of England</h4>
                </div>
                <p className='mt-3 font-light'>16 Hours ago | Business</p>

              </div>


           </div>
 
         
</div>

                  {/* Latest Audio */}

           <div className='flex border border-slate-900 mt-12 ml-70 mr-65 '></div> 

          <div className='flex mt-4 ml-70 font-bold text-xl'>
             Latest Audio<img className='h-7 w-7 ml-1 ' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
         </div>


         <div className="flex ml-70 gap-8 mt-10">
            <div>
                <img className='h-[170px] w-[200px] object-cover' src="https://ichef.bbci.co.uk/images/ic/1024x576/p0ll62zd.jpg.webp" alt="" />
                
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400 mt-2 hover:cursor-pointer'>The Documentary Podcast</p>
                    <p className='text-sm font-semibold hover:cursor-pointer hover:underline'>Pride month special</p>
                     <div className='flex mt-24'>
                      <div className="flex items-center group mb-2">
                      <div className="p-1 rounded-full border transition-colors duration-300 group-hover:bg-gray-500">
                        <svg width="20" height="20" viewBox="0 0 12 14" aria-hidden="true" className="fill-black">
                          <path d="M5.99996 9.43351L9.46496 11.0741L9.46496 2.0125L2.53496 2.0125L2.53496 11.0741L5.99996 9.43351ZM0.959961 13.5625L0.959961 0.4375L11.04 0.4375L11.04 13.5625L5.99996 11.1761L0.959961 13.5625Z" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-black font-serif hover:cursor-pointer group-hover:bg-transparent">
                        Save
                      </p>
                    </div>

                      <p className='ml-3 mt-1 text-sm text-gray-500'>52 mins</p>
                    </div>

                </div>
                
            </div>

            <div>
                <img className='h-[170px] w-[200px] object-cover' src="https://ichef.bbci.co.uk/images/ic/1024x576/p0ll3v9s.jpg.webp" alt="" />
                
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400 mt-2 hover:cursor-pointer'>The Interview</p>
                        <div className='hover:cursor-pointer hover:underline mt-1'>
                          <p className='text-sm font-semibold'>Andrius Kubilius, EU</p>
                          <p className='text-sm font-semibold'>Commissioner for Defence</p>
                          <p className='text-sm font-semibold'>and Space: a new era of</p>
                          <p className='text-sm font-semibold'>defence readiness</p>
                        </div>

                     <div className='flex mt-8'>
                      <div className="flex items-center group mb-2">
                      <div className="p-1 rounded-full border transition-colors duration-300 group-hover:bg-gray-500">
                        <svg width="20" height="20" viewBox="0 0 12 14" aria-hidden="true" className="fill-black">
                          <path d="M5.99996 9.43351L9.46496 11.0741L9.46496 2.0125L2.53496 2.0125L2.53496 11.0741L5.99996 9.43351ZM0.959961 13.5625L0.959961 0.4375L11.04 0.4375L11.04 13.5625L5.99996 11.1761L0.959961 13.5625Z" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-black font-serif hover:cursor-pointer group-hover:bg-transparent">
                        Save
                      </p>
                    </div>
                      <p className='ml-3 mt-1 text-sm text-gray-500'>22 mins</p>
                    </div>

                </div>
                
            </div>


            <div>
                <img className='h-[170px] w-[200px] object-cover' src="https://ichef.bbci.co.uk/images/ic/1024x576/p0ll3j07.jpg.webp" alt="" />
                
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400 mt-2 hover:cursor-pointer'>Business Daily</p>
                    <p className='text-sm font-semibold hover:cursor-pointer hover:underline'>From pro gamer to what?</p>
                     <div className='flex mt-24'>
                        <div className="flex items-center group mb-2">
                      <div className="p-1 rounded-full border transition-colors duration-300 group-hover:bg-gray-500">
                        <svg width="20" height="20" viewBox="0 0 12 14" aria-hidden="true" className="fill-black">
                          <path d="M5.99996 9.43351L9.46496 11.0741L9.46496 2.0125L2.53496 2.0125L2.53496 11.0741L5.99996 9.43351ZM0.959961 13.5625L0.959961 0.4375L11.04 0.4375L11.04 13.5625L5.99996 11.1761L0.959961 13.5625Z" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-black font-serif hover:cursor-pointer group-hover:bg-transparent">
                        Save
                      </p>
                    </div>
                      <p className='ml-3 mt-1 text-sm text-gray-500'>19 mins</p>
                    </div>

                </div>
                
            </div>

            <div>
                <img className='h-[170px] w-[200px] object-cover' src="https://ichef.bbci.co.uk/images/ic/1024x576/p0kfs11x.jpg.webp" alt="" />
                
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400 mt-2 hover:cursor-pointer'>Football Daily</p>
                    <div className='hover:cursor-pointer hover:underline mt-1'>
                    <p className='text-sm font-semibold'>Wales prepare for Women’s</p>
                    <p className='text-sm font-semibold'>Euros debut</p>
                    </div>
                     <div className='flex mt-19'>
                        <div className="flex items-center group mb-2">
                      <div className="p-1 rounded-full border transition-colors duration-300 group-hover:bg-gray-500">
                        <svg width="20" height="20" viewBox="0 0 12 14" aria-hidden="true" className="fill-black">
                          <path d="M5.99996 9.43351L9.46496 11.0741L9.46496 2.0125L2.53496 2.0125L2.53496 11.0741L5.99996 9.43351ZM0.959961 13.5625L0.959961 0.4375L11.04 0.4375L11.04 13.5625L5.99996 11.1761L0.959961 13.5625Z" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-black font-serif hover:cursor-pointer group-hover:bg-transparent">
                        Save
                      </p>
                    </div>
                      <p className='ml-3 mt-1 text-sm text-gray-500'>52 mins</p>
                    </div>

                </div>
                
            </div>

            <div>
                <img className='h-[170px] w-[200px] object-cover' src="https://ichef.bbci.co.uk/images/ic/1024x576/p0dv471q.jpg.webp" alt="" />
                
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400 mt-2 hover:cursor-pointer'>World Business Report</p>
                    <div className='hover:cursor-pointer hover:underline mt-1'>
                    <p className='text-sm font-semibold'>Trump lands in Europe for</p>
                    <p className='text-sm font-semibold'>NATO summit</p>
                    </div>
                     <div className='flex mt-19'>
                        <div className="flex items-center group mb-2">
                      <div className="p-1 rounded-full border transition-colors duration-300 group-hover:bg-gray-500">
                        <svg width="20" height="20" viewBox="0 0 12 14" aria-hidden="true" className="fill-black">
                          <path d="M5.99996 9.43351L9.46496 11.0741L9.46496 2.0125L2.53496 2.0125L2.53496 11.0741L5.99996 9.43351ZM0.959961 13.5625L0.959961 0.4375L11.04 0.4375L11.04 13.5625L5.99996 11.1761L0.959961 13.5625Z" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-black font-serif hover:cursor-pointer group-hover:bg-transparent">
                        Save
                      </p>
                    </div>
                      <p className='ml-3 mt-1 text-sm text-gray-500'>52 mins</p>
                    </div>

                </div>
                
            </div>

            <div>
                <img className='h-[170px] w-[200px] object-cover' src="https://ichef.bbci.co.uk/images/ic/1024x576/p0ll4hhd.jpg.webp" alt="" />
                
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400 mt-2 hover:cursor-pointer'>Global News Podcast</p>
                    <div className='hover:cursor-pointer hover:underline mt-1'>
                    <p className='text-sm font-semibold'>President Trump lashes</p>
                    <p className='text-sm font-semibold'>out at Iran and Israel after</p>
                    <p className='text-sm font-semibold'>ceasefire violations</p>
                    </div>
                     <div className='flex mt-14'>
                        <div className="flex items-center group mb-2">
                      <div className="p-1 rounded-full border transition-colors duration-300 group-hover:bg-gray-500">
                        <svg width="20" height="20" viewBox="0 0 12 14" aria-hidden="true" className="fill-black">
                          <path d="M5.99996 9.43351L9.46496 11.0741L9.46496 2.0125L2.53496 2.0125L2.53496 11.0741L5.99996 9.43351ZM0.959961 13.5625L0.959961 0.4375L11.04 0.4375L11.04 13.5625L5.99996 11.1761L0.959961 13.5625Z" />
                        </svg>
                      </div>
                      <p className="ml-2 text-sm text-black font-serif hover:cursor-pointer group-hover:bg-transparent">
                        Save
                      </p>
                    </div>
                      <p className='ml-3 mt-1 text-sm text-gray-500'>52 mins</p>
                    </div>

                </div>
                
            </div>


         </div>
 


                  {/* Other Some parts like TECH , SCIENCE & HEALTH , CULTURE , ARTS */}

   <div>
             <div className='flex border border-slate-900 mt-10 ml-70 mr-330'></div>   
              <div className='flex mt-4 ml-70 font-bold'>
                TECH <img className='h-6 w-6 ml-1 ' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
              </div>
              <div className='flex ml-70 gap-8 mt-3'>
                <div className='flex flex-col'>
                  <div className='hover:cursor-pointer'>
                    <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/8573/live/78428f80-5110-11f0-918d-fb788d4dd5b5.jpg.webp" alt="" />
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



                        {/* SCEINCE & HEALTH Part */}

    
               
                <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/ce01/live/c46dc790-5114-11f0-918d-fb788d4dd5b5.jpg.webp" alt="" />
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

                 <p className='mt-3 font-light'> 19 hours ago | World</p>
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
              

                  {/* Sports Part */}


             <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/news/480/cpsprodpb/7aa5/live/a126d390-50be-11f0-a136-53d7f1f40c12.jpg.webp" alt="" />
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

                 <p className='mt-3 font-light'> 14 hours ago | Hereford & Worcester</p>
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


                  {/* Business Part */}


              <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/images/ic/480x270/p0lkjbr0.jpg.webp" alt="" />
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

                 <p className='mt-3 font-light'> 4 day ago | Asia</p>
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
                <p className='mt-3 font-light'>13 June 2025 | Cultuire</p>

              </div>


           </div>
 
         
</div>


            {/* Watch Part */}


             <section className="bg-[#141618] text-white py-10">
              <div className="max-w-[1400px] mx-auto px-4">
                <div className="flex border mb-2"></div>
                <h2 className="flex text-xl font-bold mb-6 text-white">Watch<img className="h-7 w-7 ml-1 filter invert" src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt=""/></h2>
                <div className='flex bg-black'>
                 <div className="relative hover:cursor-pointer">
                  <img
                    className="h-[535px] w-full object-cover"
                    src="https://ichef.bbci.co.uk/images/ic/1920x1080/p0ll128c.jpg.webp"
                    alt=""
                  />

                  <img
                    className="h-12 w-12 rounded-full border absolute bottom-3 left-3 bg-white"
                    src="https://static.thenounproject.com/png/1917910-200.png"
                    alt="play"
                  />
                </div>

                   <div className=' ml-3 mt-45 flex flex-col hover:cursor-pointer'>
                    <div className='text-bold text-3xl hover:underline hover:cursor-pointer'>
                      <p>Hungry cub makes bold</p>
                      <p>move to beat the pack</p>
                    </div>

                    <div className='mt-4 text-sm'>
                      <p>Miss too many opportunities and these young Arctic</p>
                      <p>foxes could become too weak to survive.</p>
                    </div>

                    <div className='mt-3 py-2 px-2'>
                      <button className=" hover:bg-[#D2D4D6] hover:text-black border-2 border-white hover:cursor-pointer text-white font-bold px-7 py-2 rounded transition w-fit"> See More </button>
                    </div>

                  
                   </div>
                </div>
                
              </div>
            </section>




            {/* Other Some Parts pf Travel , World's Table , Earth , Video */}



             <div>
             <div className='flex border border-slate-900 mt-10 ml-70 mr-330'></div>   
              <div className='flex mt-4 ml-70 font-bold text-xl'>
                Travel <img className='h-6 w-6 ml-1 mt-1 ' src="https://cdn-icons-png.flaticon.com/128/10561/10561059.png" alt="" />
              </div>
              <div className='flex ml-70 gap-8 mt-4'>
                <div className='flex flex-col'>
                  <div className='hover:cursor-pointer'>
                    <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/images/ic/480x270/p0lkzgg9.jpg.webp" alt="" />
                  </div>

                  <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                    <h4>How to explore Glastonbury's</h4>
                    <h4>Pagan side</h4>
                  </div>

                  <div>
                    <p>Rollo Maughfling helped pioneer</p>
                    <p>Glastonbury's modern Druidic revival. Here</p>
                    <p>are his top ways to enjoy the spiritual town</p>
                    <p>beyond its famous festival, from sacred</p>
                    <p>sites to Pagan wares.</p>
                  </div>

                    <p className='mt-3 font-light'>15 Hours ago | Travel</p>

                    <div className='flex border mt-1 border-gray-400'></div>

                  <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                    <h4>Paddling the dramatic 'Grand</h4>
                    <h4>Canyon of Canada'</h4>
                  </div>

                  <p className='mt-3 font-light'>2 days ago | Travel</p>
                  <div className='flex border mt-1 border-gray-400'></div>

                  <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                    <h4>How self-drive tuk-tuks are</h4>
                    <h4>transforming travel in Sri Lanka</h4>
                  </div>
                  <p className='mt-3 font-light'>3 days ago | Travel</p>
                  <div className='flex border mt-1 border-gray-400'></div>

                  <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                    <h4>A technicolour visit to Morocco's </h4>
                    <h4>holiest town</h4>
                  </div>
                  <p className='mt-3 font-light'>4 days ago | Travel</p>


                </div>  



                        {/* WORLD"S TABLE Part */}

    
               
                <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/images/ic/480x270/p0lgs9gh.jpg.webp" alt="" />
              </div>

              <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Is there such a thing as American</h4>
                <h4>cuisine?</h4>
              </div>

              <div>
                <p>For her new book, Peach Street to Lobster</p>
                <p>Lane, British food writer Felicity Cloake</p>
                <p>cycles across the US from coast to coast in</p>
                <p>search of a definition for its national</p>
                <p>cuisine.</p>
              </div>

                <p className='mt-3 font-light'>9 June 2025  | Travel</p>

                <div className='flex border mt-1 border-gray-400'></div>

                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Has matcha madness gone too far?</h4>
              </div>

                 <p className='mt-3 font-light'> 7 June 2025 | Travel</p>
                <div className='flex border mt-1 border-gray-400'></div>


                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>How WW2 changed the Frenc</h4>
                   <h4>diet</h4>
                </div>
                <p className='mt-3 font-light'>6 June 2025 | Travel</p>
                <div className='flex border mt-1 border-gray-400'></div>


                <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Eight rare juices you can only try</h4>
                   <h4>in the Amazon</h4>
                </div>
                <p className='mt-3 font-light'>2 June 2025 | Travel</p>


              </div>
              

                  {/* Earth Part */}


             <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/images/ic/480x270/p0lkhpby.jpg.webp" alt="" />
              </div>

              <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                <h4>After a deadly mudslide, this town</h4>
                <h4>tried to stop the next one</h4>
              </div>

              <div>
                <p>California's Montecito suffered a</p>
                <p>devastating mudslide in 2018. Now the</p>
                <p>community has rallied to try to make sure</p>
                <p>the same thing will never happen again.</p>
              </div>

                <p className='mt-3 font-light'>18 Hours ago  | Future</p>

                <div className='flex border mt-1 border-gray-400'></div>

                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                <h4>Electric cars and heat pumps</h4>
                <h4>making progress, UK climate</h4>
                <h4>advisers say</h4>
              </div>

                 <p className='mt-3 font-light'> 2 hours ago </p>
                <div className='flex border mt-1 border-gray-400'></div>


                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Mexico's hidden 'bat volcano'</h4>
                </div>
                <p className='mt-3 font-light'>2 days ago | The Travel Show</p>
                <div className='flex border mt-1 border-gray-400'></div>


                <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Remembering India's iconic</h4>
                   <h4>crocodile-hunting tigress</h4>
                </div>
                <p className='mt-3 font-light'>22 hrs ago | Asia</p>

              </div>


                  {/* VIDEO Part */}


              <div className='flex flex-col'>
              <div className='hover:cursor-pointer'>
                <img className='h-[170px] w-[300px]' src="https://ichef.bbci.co.uk/images/ic/480x270/p0ljyb2w.jpg.webp" alt="" />
              </div>

              <div className='text-xl mt-2 font-semibold hover:underline hover:cursor-pointer'>
                <h4>The science behind brewing tastier</h4>
                <h4>non-alcoholic beer</h4>
              </div>

              <div>
                <p>UK brewery Wiper and True shows the</p>
                <p>BBC's Tech Now team a pioneering</p>
                <p>technique to craft alcohol-free beer.</p>
              </div>

                <p className='mt-3 font-light'>5 days ago  | Tech Now</p>

                <div className='flex border mt-1 border-gray-400'></div>

                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                <h4>The ancient Mexican temple</h4>
                <h4>built to honour a serpent God</h4>
              </div>

                 <p className='mt-3 font-light'> 6 days ago | The Travel Show</p>
                <div className='flex border mt-1 border-gray-400'></div>


                 <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Even giant dinosaurs have a</h4>
                   <h4>soft spot</h4>
                </div>
                <p className='mt-3 font-light'>7 days ago | Natural wonders</p>
                <div className='flex border mt-1 border-gray-400'></div>


                <div className='text-xl mt-3 font-semibold hover:underline hover:cursor-pointer'>
                   <h4>Baby elephant takes a muddy</h4>
                   <h4>tumble</h4>
                </div>
                <p className='mt-3 font-light'>8 days ago | Natural wonders</p>

              </div>


           </div>
 
         
</div>



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
