import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav >
            <Link className="links" to='/' style={{padding: 5}}>
              Home
            </Link>
            <Link className="links" to='/dogs' style={{padding: 5}}>
              Dogs
            </Link>
            <Link className="links" to='/dogwalkers' style={{padding: 5}}>
              Dog Walkers
            </Link>
        </nav>
    )
}