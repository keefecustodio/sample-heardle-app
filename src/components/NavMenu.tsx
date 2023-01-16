import { Link, NavLink } from 'react-router-dom'

export function NavMenu() {
    return (
        <nav className="hidden xl:mx-16 xl:block xl:max-w-3xl xl:justify-self-end">
            <ul className="flex items-center gap-12 text-red-600 font-DM text-mid">
                <li>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}