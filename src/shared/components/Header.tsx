import Logo from "../../assets/logo/logo.png"
import Avatar from "../../assets/avatar/avatar-women.jpg"
import { useState } from "react";
const Header = () => {
    const [isShowProfile, setIsShowProfile] = useState<boolean>(false)
    const toggleProfile = () => {
        setIsShowProfile(true)
    }
    return (
      <header className="bg-white">
        <nav className='navbar w-4/5 m-auto flex justify-between items-center'>
          <a href='/' className='flex gap-4 items-center'>
            <img src={Logo} alt='Logo' className='w-14' />
            <span className='text-3xl font-bold'>Todo App</span>
          </a>
          <ul className='flex justify-center items-center'>
            <li className='hover:bg-amber-300'>
              <a href='/' className="block p-5 hover:bg-[#33adff] hover:text-white">Home</a>
            </li>
            <li className='hover:bg-amber-300'>
              <a href='/about' className="block p-5 hover:bg-[#33adff] hover:text-white">About</a>
            </li>
            <li className='hover:bg-amber-300'>
              <a href='/contact' className="block p-5 hover:bg-[#33adff] hover:text-white">Contact</a>
            </li>
            
          </ul>
          <div className="profile-menu relative" onClick={toggleProfile} aria-hidden="true">
          <div className="profile-menu relative">
            <div className="profile-avatar w-12 rounded-full border border-[#33adff] overflow-hidden cursor-pointer">
                <img src={Avatar} title='Avatar' alt='avatar.png' className='' />
            </div>
            <div className={`dropdown-menu absolute top-12 right-0 bg-white shadow-md w-[200px] ${isShowProfile ? 'block' : 'hidden'}`}>
                <div className="dropdown-item">
                <a href="/profile" className='block p-4 hover:bg-[#33adff] hover:text-white hover: rounded-t-md'>Profile</a>
                </div>
                <div className="dropdown-item">
                <button type='button' className='block w-full p-4 text-left hover:bg-[#33adff] hover:text-white cursor-pointer hover: rounded-b-md'>Logout</button>
                </div>
            </div>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  
  