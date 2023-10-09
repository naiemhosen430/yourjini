import Link from 'next/link';
import React from 'react';

export default function page() {
    return (
        <>
            <div className='p-4'>
                <div className='text-center space-x-5'>
                    <div className='border border-x-2 border-y-2 bg-slate-800 border-yellow-900 rounded-2xl p-4 inline-block'>
                        <p className='text-4xl font-bold text-white'>00</p>
                        <h1 className='text-xl font-bold p-2 text-slate-400'>Total Users</h1>
                    </div>
                    <Link href={'/dashboad/item'}>
                        <div className='border border-x-2 border-y-2 bg-slate-800 border-yellow-900 rounded-2xl p-4 inline-block'>
                            <p className='text-4xl font-bold text-white'>00</p>
                            <h1 className='text-xl font-bold p-2 text-slate-400'>Total Items</h1>
                        </div>
                    </Link>
                    <Link href={'/dashboad/order'}>
                        <div className='border border-x-2 border-y-2 bg-slate-800 border-yellow-900 rounded-2xl p-4 inline-block'>
                            <p className='text-4xl font-bold text-white'>00</p>
                            <h1 className='text-xl font-bold p-2 text-slate-400'>New order</h1>
                        </div>
                    </Link>
                    <div className='border border-x-2 border-y-2 bg-slate-800 border-yellow-900 rounded-2xl p-4 inline-block'>
                        <p className='text-4xl font-bold text-white'>00</p>
                        <h1 className='text-xl font-bold p-2 text-slate-400'>Balance</h1>
                    </div>
                    <Link href={'/dashboad/order'}>
                        <div className='border border-x-2 border-y-2 bg-slate-800 border-yellow-900 rounded-2xl p-4 inline-block'>
                            <p className='text-4xl font-bold text-white'>00</p>
                            <h1 className='text-xl font-bold p-2 text-slate-400'>Order complete</h1>
                        </div>
                    </Link>

                </div>

                <div className='py-20 lg:w-10/12 m-auto'>
                    <h1 className='p-4 text-4xl font-bold border-x-0 border-t-0 border-b-4 border-yellow-950'>Report from users</h1>
                    <div className='py-4'>
                        <div className='border border-x-2 border-y-2 border-yellow-950 rounded-3xl hover:bg-slate-400 p-4'>
                            <h1 className='p-1'>
                                Name: <span className='font-bold px-4'>MD Naiem Hosen</span>
                            </h1>
                            <h1 className='p-1'>
                                Email: <span className='font-bold px-4'>naiem@gmail.com</span>
                            </h1>
                            <h1 className='p-1'>
                                Phone number: <span className='font-bold px-4'>+8801795444122</span>
                            </h1>
                            <h1 className='p-1'>
                                Message:
                                <span className='font-bold px-4'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse alias quaerat, consectetur deleniti nemo magni laboriosam hic voluptate ex perferendis maxime, et minima, vero quasi nihil ducimus. Delectus, veniam odio!
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
