import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav >
          {/* <div className='left'> */}
            <Link className="links" to='/'>
                Home
            </Link>
            <Link className="links" to='/dogs'>
                Dogs
            </Link>
          {/* </div> */}
          {/* <div className="right"> */}
            <Link className="links" to='/schedule'>
              Schedule
            </Link>
            <Link className="links" to='/dogwalkers'>
              Dog Walkers
            </Link>
          {/* </div> */}
          
        </nav>
    )
}