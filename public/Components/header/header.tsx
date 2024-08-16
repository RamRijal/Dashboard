import Link from 'next/link'
import React from 'react'
import NavLink from '../navigation/navlink'
/**HEADER */
/**HEADER */
/**HEADER */
/**8/7/2024 */
/**8/9/2024 */
/**8/9/2024 */
/**8/10/2024 */
/**8/11/2024 */
/**8/11/2024 */
/**8/11/2024 */
/**8/12/2024 */
/**8/12/2024 */
/**8/13/2024 */
/**8/15/2024 */
/**8/15/2024 */
/**8/16/2024 */
const Header = () => {
    return (
        <>
            <header className='z-40 flex h-16 w-full items-center justify-between'>
                <div className='navbar bg-base-300 p-0 flex items-center justify-between w-full'>
                    <div className='navbar-start'>
                        <div className='dropdown flex '>
                            <label tabIndex={0} className="btn btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu menu-compact flex lg:hidden mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li tabIndex={0}><NavLink name='Overview' href='/' bottomBorder={false} /></li>
                                <li><NavLink name="Transactions1" href='/transactions' bottomBorder={false} /></li>
                                <li><NavLink name="Categories" href='/categories' bottomBorder={false} /></li>
                                <li><NavLink name="Bank Account" href='/bank-account' bottomBorder={false} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-center hidden lg:flex '>
                        <ul className="menu menu-horizontal p-0">
                            <li tabIndex={0}><NavLink name='Overview' href='/' bottomBorder={false} /></li>
                            <li><NavLink name="Transactions" href='/transactions' bottomBorder={false} /></li>
                            <li><NavLink name="Categories" href='/categories' bottomBorder={false} /></li>
                            <li><NavLink name="Bank Account" href='/bank-account' bottomBorder={false} /></li>
                        </ul>
                    </div>
                    <div className='navbar-end hidden xl:flex'>
                        <div className='dropdown dropdown-end'>
                            <label className="btn-circle btn-ghost avatar btn lg:hidden">
                                {/* Add any additional content here if needed */}
                            </label>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
