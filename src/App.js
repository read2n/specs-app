import logo from './logo.svg';
import './App.css';

const phoneArticle = [
  {
    title: 'WHAT IS READ2N',
    content:
      'We take small taxes from in-app activities, such as NFT trading, Book-minting and Book-rental.  All assets in the Read2N app are owned by individual users and majority of earnings in app are made by users. ',
  },
  {
    title: 'THE WELL OF GOODWILL',
    content: 'ortion of Read2N’s profit goes to buy Carbon Removal Credit on the blockchain to let children in the poorest areas eat bread while reading. '
  },
];

const intros = [
  {
    title: 'EVERYONE CAN USE',
    content:
      'With a little bit of gamification and read2earn as the core mechanic, Read2N can nudge million to embrace reader iftestyle.',
    img: 'avatar',
  },
  {
    title: 'ZERO ENTRY BARRIER',
    content:
      'Read2N does not require people to own NFT assets toread2earn. Instead,  they can rent them for free from other users to get started,  with the earnings split later.',
    img: 'book',
  },
  {
    title: 'LEARN AFTER EARN',
    content: 'Non-crypto natives can earn before they learn how to use a Decentralized Wallet. This will also be their first step in the Web3 world. ',
    img: 'profile'
  },
];

const footers = [
  {
    img: 'twitter',
    content: 'Twitter',
  },
  {
    img: 'discord',
    content: 'Discorder',
  },
  {
    img: 'logo',
    content: 'hello@read2N.com',
  },
];

const roadmaps = [
  [
    {
      title: '10TH',
      content: ['THE MOVE2EARN CONCEPT IS BORN'],
    },
    {
      title: '14TH',
      content: ['FEASIBILITY', 'STUDY'],
    },
  ],
  [
    {
      title: '4TH',
      content: ['TTEAM BUILDING'],
    },
    {
      title: '18TH',
      content: ['STEPN is a Web3 lifestyle app with'],
    },
  ],
  [
    {
      title: '10TH',
      content: ['THE MOVE2EARN CONCEPT IS BORN'],
    },
    {
      title: '14TH',
      content: ['FEASIBILITY', 'STUDY'],
    },
  ],
  [
    {
      title: '4TH',
      content: ['TTEAM BUILDING'],
    },
    {
      title: '18TH',
      content: ['STEPN is a Web3 lifestyle app with'],
    },
  ],
];

function App() {
  return (
    <div className='wrap w-full h-full bg-[#121212]'>
      {/**  ------------------ header ------------------*/}
      <header className='header-wrap h-[63rem] text-center'>
        <div className='pt-20 ml-20 w-[5rem]'>
          <img src='static/imgs/logo.png' />
        </div>
        <p className='text-6xl text-white mt-20'>Read the novels you love</p>
        <p className='text-6xl text-white mt-10 mb-24'>
          Get involved in your metaverse
        </p>
        <button className='text-4xl px-5 py-3 text-white bg-blue-500 rounded-full border border-blue-500'>
          Get Started
        </button>
      </header>
      {/**  ------------------ main content ------------------*/}
      <main>
        {/**  ------------------ info ------------------*/}
        <div className='pt-20 flex items-center justify-center pb-24 relative'>
          <div className="absolute top-[12.75rem] left-0 w-[58.4rem] h-[41rem] bg-[#222222]">

          </div>
          <div className='w-[41rem] h-[55rem] mr-9 z-50'>
            <img src='static/imgs/phone.png' />
          </div>
          <article>
            {phoneArticle.map((item, index) => (
              <div className='w-[38rem] mt-24'>
                <h2 className='text-4xl text-white mb-7'>{item.title}</h2>
                <p
                  className='text-2xl text-white indent-16 leading-9 font-thin'
                  style={{ whiteSpace: 'break-spaces' }}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </article>
        </div>
        {/**  ------------------ intro ------------------*/}
        <div className='mt-20'>
          <h2 className='text-4xl text-white text-center'>
            FUNCTION INTRODUCTION
          </h2>
          <div className='mt-20 flex justify-center text-center'>
            {
              // render intro card
              intros.map((item, index) => (
                <div
                  className={`px-7 py-7 w-[23rem] bg-[#222222] ${
                    index !== intros.length - 1 ? 'mr-6' : ''
                  }`}
                >
                  <div className='w-32 h-32 mx-auto mb-6'>
                    <img
                      className='w-full h-full'
                      src={`static/imgs/${item.img}.png`}
                    />
                  </div>
                  <h2 className='text-2xl text-white mb-7'>{item.title}</h2>
                  <p className='text-[1.18rem] font-thin ml-5 text-white leading-7 break-words text-left h-48'>
                    {item.content}
                  </p>
                  <div className='flex justify-end items-center'>
                    <span className='text-sm text-[#4186e6] mr-1'>More</span>
                    <img src='static/imgs/next.png' className='w-7 h-7' />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/**  ------------------ roadmap ------------------*/}
        <div className='pt-32 pb-60'>
          <h2 className='text-white text-4xl text-center'>ROADMAP</h2>
          <div className='pt-20'>
            <div className='roadmap-main w-[76rem] h-[27rem] mx-auto'>
              <div>
                <button className='ml-[19px] mt-[9px] px-20 py-2 text-[#030316] text-3xl bg-[#4286E7] rounded-full h-[3.75rem]'>
                  AUGUST
                </button>
                <span className='text-3xl ml-10 text-white text-opacity-75'>
                  SEPTEMBER
                </span>
              </div>
              <div className='flex ml-[4.3rem] overflow-hidden'>
                {roadmaps.map((items, rindex) =>
                  rindex !== roadmaps.length - 1 ? (
                    <div className='mr-20 w-52 h-72 bg-[#222222] rounded-md -mt-12'>
                      {items.map((item, index) => (
                        <div
                          className={`${
                            index === 0 ? 'mt-[4.37rem]' : 'mt-3'
                          } ml-4`}
                        >
                          <p className='text-white text-[1.12rem] mb-3'>
                            {item.title}
                          </p>
                          {item.content.map((content, ci) => (
                            <p
                              className={`text-base text-white opacity-80 ${
                                ci !== item.content.length - 1 ? 'mb-2' : ''
                              } w-[10.6875rem] break-all`}
                            >
                              {content}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null
                )}
              </div>
              <div className='flex ml-[4.3rem] mt-24 overflow-hidden'>
                {roadmaps.map((items, rindex) => (
                  <div className='mr-20 w-52 h-72 bg-[#222222] rounded-md -mt-12'>
                    {items.map((item, index) => (
                      <div
                        className={`${
                          index === 0 ? 'mt-[4.37rem]' : 'mt-3'
                        } ml-4`}
                      >
                        <p className='text-white text-[1.12rem] mb-3'>
                          {item.title}
                        </p>
                        {item.content.map((content, ci) => (
                          <p
                            className={`text-base text-white opacity-80 ${
                              ci !== item.content.length - 1 ? 'mb-2' : ''
                            } w-[10.6875rem] break-all`}
                          >
                            {content}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/**  ------------------ our ------------------*/}
        <div className='pt-32'>
          <h2 className='text-white text-4xl text-center'>OUR BAKERS</h2>
          <div className='pt-16 pb-32'>
            <div className='h-[36rem]'>
              <img src='static/imgs/info.png' className='h-full mx-auto' />
            </div>
          </div>
        </div>
      </main>
      {/**  ------------------ footer ------------------*/}
      <footer className='bg-[#222222] filter-[blur(50px)] pt-12 pb-10'>
        <div className='flex justify-center'>
          {footers.map((item, index) => {
            return (
              <div
                className={`flex flex-col justify-center items-center ${
                  index === 0 ? 'mr-36' : index === 1 ? 'mr-28' : ''
                }`}
              >
                <img
                  src={`static/imgs/${item.img}.png`}
                  className='w-16 h-16'
                />
                <p className='text-xl text-white'>{item.content}</p>
              </div>
            );
          })}
        </div>
        <p className='mt-[5.5rem] text-white text-opacity-75 text-base text-center'>
          COPYRIGHT READ2N LAB LTD. 2022 - ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}

export default App;
