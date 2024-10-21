'use client'
import React, { useState } from 'react';
import SearchField from './SearchField/SearchField';

const ShowData = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [geminiData, setGeminiData] = useState('');
    const [loading, setLoading] = useState(true);

    return (
        <section className="my-12 flex flex-col justify-center items-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-orange-600 text-center capitalize">Ask something and get answer</h1>
            <SearchField
                setGeminiData={setGeminiData}
                setLoading={setLoading}
                setSearchTerm={setSearchTerm}
            />

            <div className='mt-12 w-full'>
                <div className='text-black text-base bg-gray-100 rounded-full px-3 py-1 font-bold w-fit'>{searchTerm}</div>

                <div>
                    <div dangerouslySetInnerHTML={{ __html: geminiData }}></div>
                </div>
            </div>
        </section>
    );
};

export default ShowData;