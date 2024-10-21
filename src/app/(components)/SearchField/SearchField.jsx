'use client'
import { getGeminiData } from '@/utils/geminiApi';
import React from 'react';
import { FcPlus, FcSearch } from 'react-icons/fc';

const SearchField = ({ setGeminiData, setLoading, setSearchTerm }) => {

    const handleAiSearch = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        const file = e.target.file.files[0];
        console.log(file);
        setSearchTerm(text);

        const data = await getGeminiData(text);
        setGeminiData(data);
        console.log(data);
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleAiSearch}
            className="mt-6 border-4 border-double border-orange-600 rounded-full py-2 flex items-center"
        >
            <label htmlFor='dropzone-file' className='pl-3'>
                <input type="file"
                    name="file"
                    id="dropzone-file"
                    className='hidden'
                />
                <FcPlus className='text-xl' />
            </label>
            <input
                type="text"
                name="text"
                id="text"
                className="rounded-l-full focus:outline-none w-[400px] pl-3"
            />
            <button type="submit" className="pr-6">
                <FcSearch className='text-2xl' />
            </button>
        </form>
    );
};

export default SearchField;