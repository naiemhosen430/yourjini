import Link from 'next/link';
import React from 'react';

export default function Menu() {
    return (
        <>
            <div className='p-4 px-4 bg-slate-700 sticky top-0 flex items-center justify-center'>
                <h1 className='w-6/12 text-3xl text-white font-bold'>
                    <Link href={'/'}>YourJini</Link>
                </h1>
            </div>
        </>
    );
}
