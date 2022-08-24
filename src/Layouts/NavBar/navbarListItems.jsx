import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {FaSearch, FaPlus} from 'react-icons/fa'


// fontawesome.library.add(faMagnifyingGlass);

const NavbarList = ({items}) => {
    const getItem = (item) =>{
        let itemList;
        switch (item.type) {
            case 'logo':
                itemList = <img src={item.src} className="h-5 min-w-[154px]" alt={item.name} />
                break;
            case 'language':
                itemList = <p className='border-white border-solid rounded-[3px] py-[1px] px-[3px] border-[1px] hover:bg-white hover:text-tmdbDarkBlue cursor-pointer '>{item.name}</p>
                break;
            case 'icon':
                itemList = <p><FaPlus/></p>
                break;
                case 'icon-search':
                    itemList = <p><FaSearch/></p>
                    break;
            default:
                itemList = <p>{item.name}</p>
                break;
        }
        return itemList;
    }


  return (
    <ul className='flex gap-7 items-center'> 
        {
            items.map(item  =>{
                return <li>{getItem(item)}</li>
                // return <li>{item.src}</li>
            })
        }
    </ul>
  )
}

export default NavbarList