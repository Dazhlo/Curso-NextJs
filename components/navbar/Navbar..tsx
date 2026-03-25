
import Link from "next/link";
import {HomeIcon} from '@primer/octicons-react'
 
const navItems = [
    {path: 'about', text:'About'},
    {path: 'pricing', text:'Pricing'},
    {path: 'contact', text:'Contact'}
]



export const Navbar = async() => {
    return (
        <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded ">
     
        <Link  href={'/'} className="flex items-center"> 
        <HomeIcon/>
          <span className="px-10">Home</span>
        </Link>
        {
            navItems.map(navItem=>(
               <Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.path}  </Link>

            ))
        }

            <div className="flex flex-1">
                {/* <Link className="mr-2" href="/about">about</Link>
                <Link className="mr-2" href="/contact">contect</Link>
                <Link className="mr-2" href="/pricing">pricing</Link> */}
            </div>
        </nav>

    )

}

