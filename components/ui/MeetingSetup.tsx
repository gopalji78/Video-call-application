'use client'
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './button';

const MeetingSetup = ({ setIsSetupComplete } : {
  setIsSetupComplete: (val: boolean ) => void }) => {
  const [isMicCammToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) throw new Error('useCall must be used in Stream Client Component');

  useEffect(() => {
    if (isMicCammToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCammToggledOn, call?.camera, call?.microphone])
  return (
    <div className='flex flex-col h-screen w-full flex-call items-center justify-center gap-3 text-white'>
      <h1 className="text-2xl font-bold"> Setup </h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className='flex items-center justify-center gap-2 font-medium'>
          <input 
            type="checkbox" 
            checked={isMicCammToggledOn} 
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)} 
          />
          Switch Mic and Cam
        </label>
        <DeviceSettings />
      </div>
      <Button className='rounded-md bg-green-500 px-4 py-2.5'
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting 
      </Button>

    </div>
  )
}

export default MeetingSetup
