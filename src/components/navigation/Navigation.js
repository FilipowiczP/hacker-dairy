import { navigationList } from './nav-list';
import { Link } from 'react-router-dom';
import './navigation.scss';
import { useState } from 'react';

const Navigation = () => {
    const [state, setState] = useState(null);

    const handleLinkHover = (index) =>{
        setState(index);
        console.log(state);
    }

    return(
        <nav>
            <ul>
            {navigationList.map((link, index)=>{
                return(
                    <li key={index} className={index === state ? 'link active' : 'link'} onClick={() =>handleLinkHover(index)} >
                        <Link to={link.path}>{link.name}</Link>

                        {link.subLinks ? 
                            <ul className='sublinks'>
                                {
                                    link.subLinks.map((subLink)=>{
                                        return(
                                            <li key={subLink}>
                                                <Link to={subLink.path}>{subLink.name}</Link>
                                            </li> 
                                        )
                                    })
                                }
                            </ul>
                            :<></>
                        }
                    </li>
                )
            })}
            </ul>
        </nav>
    )
};

export default Navigation;