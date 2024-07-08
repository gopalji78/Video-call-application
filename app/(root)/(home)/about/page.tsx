import React from 'react'

const About = () => {
  return (
    <div className="flex  flex-col bg-hero bg-cover h-full w-full">
      <div className="flex items-center justify-center pt-7 pr-0">
        <h1 className='text-white font-extrabold text-[3rem]'>
          About
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center m-10 mt-4 pr-0 mr-0">
        <ul className='list-disc'>
          <li className='text-white p-5 pl-0 m-2'>This website is a kind of clone of very popular video calling application ZOOM.</li>
          <li className='text-white p-5 pl-0 m-2'>Clerk powers the users authentication functionality to this application, with a variety login/sign-up options such as gmail, linkedIn, github etc.</li>
          <li className='text-white p-5 pl-0 m-2'>Stream Videos and Calls SDK support the video calling and recoring, functionalities.</li>
          <li className='text-white p-5 pl-0 m-2'>The application support:
            <div className="flex flex-col items-start ml-10">
              <ul className='list-dash'>
                <li className='text-white p-5 pl-0 m-2 pb-1'> Creating Instant meeting </li>
                <li className='text-white p-5 pl-0 m-2 pb-1'> Scheduling meeting for later</li>
                <li className='text-white p-5 pl-0 m-2 pb-1'> Sharing personnel-room info</li>
                <li className='text-white p-5 pl-0 m-2 pb-1'> Sharing your screen </li>
                <li className='text-white p-5 pl-0 m-2 pb-1'> Recording the meeting and viewing it later</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
