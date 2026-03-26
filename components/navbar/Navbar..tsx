
import Link from "next/link";
import {HomeIcon} from '@primer/octicons-react'
import { ActiveLink } from "../active-link/ActiveLink";

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
        <div className="flex flex-1">

            
    
        {
            navItems.map(navItem=>(
         <ActiveLink key={navItem.path} {...navItem}/>

            ))
        }
    </div>
          
        </nav>

    )

}

