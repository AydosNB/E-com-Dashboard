import React from 'react'

const SearchInput = () => {
    return (
        <div className='relative'>
            <input className='py-[6px] w-full px-[15px] border-[1px] rounded-full outline-none' type='text' placeholder='Search...' />
            <div className='absolute top-0 right-0 bottom-0 p-[3px]'>
                <button className='px-[10px] h-full bg-indigo-600 text-white text-[16px] font-semibold rounded-full hover:bg-indigo-700 active:scale-95'>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchInput
