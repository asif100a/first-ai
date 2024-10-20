'use client'
import React, { useState } from 'react';
import SearchField from './SearchField/SearchField';

const ShowData = () => {
    const [geminiData, setGeminiData] = useState('');
    const [loading, setLoading] = useState(true);

    return (
        <section className="my-12 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-orange-600 text-center capitalize">Ask something and get answer</h1>
            <SearchField setGeminiData={setGeminiData} setLoading={setLoading} />

            <div className='mt-12'>
                {
                    loading ? <div className='text-white text-3xl font-bold'>Loading..........</div>
                    : <div>{geminiData}</div>
                }
            </div>
        </section>
    );
};

export default ShowData;