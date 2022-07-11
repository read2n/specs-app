import logo from './logo.svg';
import './App.css';

const phoneArticle = [
  {
    title: 'WHAT IS READ2N',
    content:
      'Read2N is a IP (based on NFT) Marketplace. Users could buy/sell IP NFT, lend/borrow IP NFT; Users could read/comment/discuss copyrighted literature;Read2N will help NFT users to construct IP-governing DAO.',
  },
  {
    title: 'READING CREATES CONSENSUS',
    content:
      'Reading creates consensus, consensus value feeds back into the reading.The majority of transaction fee would be awarded to all of the participants.Part of the (book) rental fee would be used as the IP-NFT governance fee.',
  },
];

const intros = [
  {
    title: 'OWN THE REAL PROPERTY',
    content:
      'NFT has the right for reading the whole novel and the right to participate in the governance of the novel’s copyright.Shares all of the resulting business benefits of the copyright. And you could get rental income by lending (your) NFT.',
    img: 'avatar',
  },
  {
    title: 'PROOF OF CONTRIBUTION',
    content:
      'Participate in the distribution to earn tokenNo matter buying NFT and lending it,Or reading a novel and write comments about it,You would receive the award from the transaction fee.',
    img: 'book',
  },
  {
    title: 'READ AND EARN EASILY',
    content:
      'No need to buy NFT,Renting a NFT would get you started on ‘read to earn’  . Your reading, brings consensus to the novel and brings more value to the novel’s metaverse.You deserve to be awarded.',
    img: 'profile',
  },
];

const footers = [
  {
    img: 'twitter',
    content: 'Twitter',
    w: 16,
    h: 16,
    lgw: 6,
    lgh: 6,
  },
  // {
  //   img: 'discord',
  //   content: 'Discorder',
  // },
  {
    img: 'read2n',
    content: 'hello@read2N.com',
    w: 40,
    h: 16,
    lgw: 13,
    lgh: 6
  },
];

const roadmaps = [
  [
    {
      title: '',
      content: ['the Read2N', 'concept is born'],
    },
  ],
  [
    {
      title: '',
      content: ['team buliding'],
    },
  ],
  [
    {
      title: '',
      content: ['community building', 'Copyrightcooperation building'],
    },
  ],
  [
    {
      title: '',
      content: ['White papers', ' Genesis books selection event'],
    },
  ],
];

function App() {
  return (
    <div className='wrap w-full h-full bg-[#121212]'>
      {/**  ------------------ header ------------------*/}
      <header className='header-wrap h-[63rem] lg:h-72 text-center'>
        <div className='pt-20 ml-20 w-[5rem] lg:pt-5 lg:ml-5 lg:w-8'>
          <img src='static/imgs/logo.png' />
        </div>
        <p className='text-6xl text-white mt-20 lg:text-xl lg:mt-6'>
          Read the novels
        </p>
        <p className='text-6xl text-white mt-10 lg:text-xl lg:mt-2'>
          Participate in the construction of Metaverse
        </p>
        <p className='text-6xl text-white mt-10 mb-24 lg:text-xl lg:mt-2 lg:mb-5'>
          Get rewards
        </p>
        <button className='text-4xl px-5 py-3 text-white bg-blue-500 rounded-full border border-blue-500 lg:text-sm lg:py-1 lg:px2'>
          Get Started
        </button>
      </header>
      {/**  ------------------ main content ------------------*/}
      <main>
        {/**  ------------------ info ------------------*/}
        <div className='pt-20 flex items-center justify-center pb-24 relative lg:pt-2 lg:block lg:pb-5'>
          <div className='absolute top-[12.75rem] left-0 w-[58.4rem] h-[41rem] bg-[#222222] lg:top-[4.75rem] lg:w-[11.687rem] lg:h-[44.6875rem]'></div>
          <div className='w-[41rem] h-[55rem] mr-9 z-50 lg:w-[16.4375rem] lg:h-96 lg:mx-auto relative'>
            <img src='static/imgs/phone.png' className='w-full h-full' />
          </div>
          <article className='relative lg:w-[20.93rem] lg:mt-3 lg:mx-auto'>
            {phoneArticle.map((item, index) => (
              <div
                className='w-[38rem] mt-24 lg:mb-7 lg:mt-0 lg:w-auto'
                key={index}
              >
                <h2 className='text-4xl text-white mb-7 lg:text-xl lg:mb-4 lg:text-center'>
                  {item.title}
                </h2>
                <p
                  className='text-2xl text-white leading-9 font-thin lg:text-sm lg:leading-6'
                  style={{ whiteSpace: 'break-spaces' }}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </article>
        </div>
        {/**  ------------------ intro ------------------*/}
        <div className='mt-20 lg:mt-7'>
          <h2 className='text-4xl text-white text-center lg:text-xl'>
            FUNCTION INTRODUCTION
          </h2>
          <div className='mt-20 flex justify-center text-center lg:mt-4 lg:px-5'>
            {
              // render intro card
              intros.map((item, index) => (
                <div
                  key={index}
                  className={`px-6 py-7 w-[24rem] h-auto bg-[#222222] ${
                    index !== intros.length - 1 ? 'mr-6 lg:mr-3' : ''
                  } lg:py-2 lg:px-1 lg:flex-1 lg:w-auto lg:rounded-[3px] flex flex-col`}
                >
                  <div className='w-32 h-32 mx-auto mb-6 lg:w-7 lg:h-7 lg:mb-1'>
                    <img
                      className='w-full h-full'
                      src={`static/imgs/${item.img}.png`}
                    />
                  </div>
                  <h2 className='text-2xl text-white mb-7 lg:text-[0.4375rem] lg:mb-1'>
                    {item.title}
                  </h2>
                  <p className='flex-1 text-xl font-thin ml-5 text-white leading-7 break-words text-left min-h-[13.875rem] lg:min-h-[20px] lg:text-[0.375rem] lg:ml-0 lg:leading-[0.625rem]'>
                    {item.content}
                  </p>
                  <div className='flex justify-end items-center mt-2'>
                    <span className='text-sm text-[#4186e6] mr-1 lg:text-[0.25rem]'>
                      More
                    </span>
                    <img
                      src='static/imgs/next.png'
                      className='w-7 h-7 lg:w-3 lg:h-3'
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/**  ------------------ roadmap ------------------*/}
        <div className='pt-32 pb-32 lg:pt-7 lg:pb-7'>
          <h2 className='text-white text-4xl text-center lg:text-xl'>
            ROADMAP
          </h2>
          <div className='pt-20 lg:pt-5'>
            <div className='roadmap-main w-[77.5rem] h-[38.5rem] mx-auto lg:w-[21.6875rem] lg:h-44'>
              {/* <img src='static/imgs/roadmap-bg.png' className='w-full h-full' /> */}
              {/* <div>
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
              </div> */}
            </div>
          </div>
        </div>
        {/**  ------------------ our ------------------*/}
        {/* <div className='pt-32 lg:pt-6'>
          <h2 className='text-white text-4xl text-center lg:text-xl'>
            OUR BAKERS
          </h2>
          <div className='pt-16 pb-32 lg:pt-5 lg:pb-7'>
            <div className='h-[36rem] lg:w-96 lg:h-40 lg:mx-auto'>
              <img
                src='static/imgs/info.png'
                className='h-full w-full mx-auto'
              />
            </div>
          </div>
        </div> */}
      </main>
      {/**  ------------------ footer ------------------*/}
      <footer className='bg-[#222222] filter-[blur(50px)] pt-12 pb-10 lg:pt-4 lg:pb-6'>
        <div className='flex justify-center'>
          {footers.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center 
                ${index === footers.length - 1 ? '' : 'mr-28 lg:mr-11'}
                `}
              >
                <img
                  src={`static/imgs/${item.img}.png`}
                  className={`w-${item.w} h-${item.h} lg:w-${item.lgw} lg:h-${item.lgh}`}
                />
                <p className='text-xl text-white mt-2 lg:text-[0.45rem] leading-[0.5625rem] lg:mt-1'>
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
        <p className='mt-[5.5rem] text-white text-opacity-75 text-base text-center lg:mt-7 lg:text-[0.3375rem]'>
          Copyright MetaNovel Lab Ltd. 2022 All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
