import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav >
            <Link className="links" to='/' style={{padding: '3vh'}}>
              Home
            </Link>
            <Link className="links" to='/dogs' style={{padding: '3vh'}}>
              Dogs
            </Link>
            <Link className="links" to='/schedule' style={{padding: '3vh'}}>
              Schedule
            </Link>
            <Link className="links" to='/dogwalkers' style={{padding: '3vh'}}>
              Dog Walkers
            </Link>
        </nav>
    )
}