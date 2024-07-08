'use client'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from './button';
import { useRouter } from 'next/navigation';

const EndCallButton = () => {
    const call = useCall();
    const router = useRouter();
    const { useLocalParticipant } = useCallStateHooks();
    const localParitcipant = useLocalParticipant();
    const isMeetingOwner = localParitcipant && 
    call?.state.createdBy && localParitcipant.userId === call.state.createdBy.id;

    if (!isMeetingOwner) return null;
  return (
    <Button onClick={ async () => {
        await call.endCall();
        router.push('/');
    }} className='bg-red-700'>
        End Call For EveryOne
    </Button>
  )
}

export default EndCallButton
