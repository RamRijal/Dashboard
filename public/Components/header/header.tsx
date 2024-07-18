import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className=''>
                <div className='navbar bg-base-300 p-0' >
                    <div className='navbar-start h-16'>
                        <div className='dropdown'>
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-
                                5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link tabIndex={0} href='/' className='bg-red-800'>Overview</Link></li>
                                <li><Link href='/transactions'>Transactions</Link></li>
                                <li><Link href='/categories'>Categories</Link></li>
                                <li><Link href='/bank-account'>Bank Account</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-center hidden h-6 lg:flex'>
                        <ul className="menu menu-horizontal h-full p-0">
                            <li><Link className='bg-red-800' tabIndex={0} href='/'>Overview</Link></li>
                            <li><Link href='/transactions'>Transactions</Link></li>
                            <li><Link href='/categories'>Categories</Link></li>
                            <li><Link href='/bank-account'>Bank Account</Link></li>
                        </ul>

                    </div>
                    <div className='navbar-end'>
                        <div className='dropdown dropdown-end'>
                            <label tabIndex={0} className="btn-circle btn-ghost avatar btn lg:hidden">
                            </label>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header