import { Link } from 'react-router-dom';
import { NavMenu } from '../../components/NavMenu'

export function Header () {
    return (
        <header className="relative z-30 grid items-center h-20 grid-cols-2 bg-black">
            
            <Link to="/">
                <img src="" alt="" />
            </Link>
            
            <NavMenu/>

        </header>
    )
}