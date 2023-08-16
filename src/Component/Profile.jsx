import React, { useEffect, useState } from 'react'
import Links from './Links';
import Typewriter from 'typewriter-effect';
import Loader from './Loader';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/assets/data.json'); // Update with the actual filename
      const response2 = await fetch('/assets/Profile.json'); // Update with the actual filename

      const data = await response2.json();
      setData2(data);     
      
      const data2 = await response.json();
      setData(data2);
      setIsLoading(false);
    }

    fetchData();
  }, []);


  return (
    <div className=' relative z-10 mt-7 m-auto flex flex-col justify-center items-center w-[90%] min-w-min-[300px] max-w-[400px]'>
      <div className='w-[50%] rounded-full overflow-hidden'>
        <img className='' src={"/assets/"+data2.ProfileImage} alt="" />
      </div>
      <div className=" md:text-2xl  text-xl my-8 text-center text-white">
        <Typewriter
          options={{
            strings: data2.Intro,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            cursor: '😁',
          }}

        />
      </div>
      {
        !isLoading ?
          data.map((link, index) => {
            return <Links key={index} linkTitle={link.linkTitle} linkImg={"assets/" + link.linkImg} linkUrl={link.linkUrl}></Links>
          })

          : (<Loader />)
      }
    </div>
  )
}
