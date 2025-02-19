
import React from 'react'

const Video = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <p className='text-center py-4'>Trying out this video demo</p>
        <div className='border border-green-500 p-12 w-full max-w-7xl'>
          <iframe 
            src="https://telemed.afri-health.com/join-room?host=true&meetingId=16107330-ec8f-11ef-9315-2b936ed7419c&name=henry_eyo" 
            className='w-[900px] h-[600px]'
            title="Video Teleconference"
            allow="camera; microphone; display-capture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  )
}

export default Video