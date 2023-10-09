import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page() {
    return (
        <>
            <div className='p-4'><Link className='py-2 px-8 hover:bg-slate-600 font-bold text-3xl' href={'/dashboad'}>Back</Link></div>
            <div className='p-4'>
                <div className='text-center'>
                    <h1 className='text-center font-bold text-3xl p-2'>New orders</h1>
                </div>
                <div className='space-y-5'>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>

                </div>
            </div>
            <div className='p-4'>

                <div className='text-center'>
                    <h1 className='text-center font-bold text-3xl p-2'>Completed orders</h1>
                </div>
                <div className='space-y-5'>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>
                    <div className='cursor-pointer p-4 flex items-center hover:bg-slate-300 rounded-full shadow-xl justify-center'>
                        <h1 className='w-3/12 text-xl font-bold'>MD Naiem Hosen</h1>
                        <h1 className='w-6/12 text-2xl font-bold'>item name</h1>
                        <button className='w-3/12 text-xl hover:bg-slate-500 py-2 px-8 font-bold text-center'>view</button>
                    </div>

                </div>
            </div>
        </>
    );
}
