import React, { useState } from 'react'
import SearchSVG from '../svg/SearchSVG'
import SendBtnSVG from '../svg/SendBtnSVG'

const SearchInput = ({ onPromptsHandeler, setButtonClick, btnClick }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQuery = (query) => {
        setSearchQuery(query)
        setButtonClick(btnClick + 1)
        onPromptsHandeler(query)
    }

    return (
        <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
            <div className="flex items-center">
                <SearchSVG></SearchSVG>
                <input
                    type="text"
                    placeholder="Create with Prompts"
                    className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                />
                <button
                    className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full cursor-pointer"
                    onClick={() => handleSearchQuery(searchQuery)}
                >
                    <SendBtnSVG></SendBtnSVG>
                </button>
            </div>
        </div>
    )
}

export default SearchInput
