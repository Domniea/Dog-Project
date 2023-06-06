import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to='/' style={{padding: 5}}>
              Home
            </Link>
            <Link to='/dogs' style={{padding: 5}}>
              Dogs
            </Link>
            <Link to='/dogwalkers' style={{padding: 5}}>
              Dog Walkers
            </Link>
        </nav>
    )
}