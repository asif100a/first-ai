'use client'
import { getGeminiData } from '@/app/utils/geminiApi';
import React from 'react';
import { FcSearch } from 'react-icons/fc';

const SearchField = ({setGeminiData, setLoading}) => {

    const handleAiSearch = async (e) => {
        e.preventDefault();
        const searchTerm = (e.target.text.value);

        const data = await getGeminiData(searchTerm);
        setGeminiData(data);
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleAiSearch}
            className="mt-6 border-4 border-double border-orange-600 rounded-full py-2 flex items-center"
        >
            <input
                type="text"
                name="text"
                id="text"
                className="rounded-l-full bg-black focus:outline-none w-[400px] pl-6"
            />
            <button type="submit" className="pr-6">
                <FcSearch className='text-2xl' />
            </button>
        </form>
    );
};

export default SearchField;