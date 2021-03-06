import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import React from 'react'

function Widgets() {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
        {/* Wyszukiwarka */}
        <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search Twitter" className="flex-1 bg-transparent outline-none" />
        </div>

        {/* Wtyczka Twittera */}
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="si_org_pl"
            options={{height: 700}}
        />
    </div>
  )
}

export default Widgets