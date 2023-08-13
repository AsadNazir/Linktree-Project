import React, { useEffect, useState } from 'react'
import Links from './Links'
import profile from "/assets/profile.jpg"
import Typewriter from 'typewriter-effect';
import Loader from './Loader';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/assets/data.json'); // Update with the actual filename
      const data2 = await response.json();
      console.log(data2);
      setData(data2);
      setIsLoading(false);
    }

    fetchData();
  }, []);


  return (
    <div className=' relative z-10 mt-7 m-auto flex flex-col justify-center items-center w-[90%] min-w-min-[300px] max-w-[400px]'>
      <div className='w-[50%] rounded-full overflow-hidden'>
        <img className='' src={profile} alt="" />
      </div>
      <div className=" md:text-2xl  text-xl my-8 text-center text-white">
        <Typewriter
          options={{
            strings: ['Hello I am Asad Nazir', 'A Passionated Developer and Coder',"Connect With me"],
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
