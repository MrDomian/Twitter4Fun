import React, { useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox() {
    // Wyłączam możliwość tweetowania, kiedy nic nie jest napisane w polu "what's up?"
    const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
        <img 
            className="mt-4 h-14 w-14 rounded-full object-cover" src="https://links.papareact.com/gll" 
            alt="" 
        />

        <div className="flex flex-1 items-center pl-2">
            <form className="flex flex-1 flex-col">
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="What's up?" 
                    className="h-24 w-full text-xl outline-none placeholder:text-xl" />
                <div className="flex items-center">
                    <div className="flex flex-1 space-x-2 text-twitter">
                        <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 hover:scale-150 ease-out" />
                        <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 hover:scale-150 ease-out" />
                        <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 hover:scale-150 ease-out" />
                        <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 hover:scale-150 ease-out" />
                        <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 hover:scale-150 ease-out" />
                    </div>

                    <button 
                        disabled={!input}
                        className="bg-twitter px-5 py-2 font-bold text-white rounded-full">Tweet
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox