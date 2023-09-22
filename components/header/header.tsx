import Link from "next/link";
import { useTranslation } from 'next-i18next';
import cn from "classnames";
import { useState } from 'react';

const Header = () => {
  const {t} = useTranslation('main');
  const [active, setActive] = useState<number>(1);
  const [navActive, setNavActive] = useState<boolean>(false);

  const arrLink = [
    {content: t('home'), href: '/', id: 1},
    {content: t('products'), href: '/', id: 2},
    {content: t('entertainment'), href: '/', id: 3},
    {content: t('support'), href: '/', id: 4},
  ]

  const onSetActive = (id: number) => {
    setActive(id);
  }

  return(
    <header className="header header_main-bg">
      <div className="container">
       <div className="header__wrapper">
        <nav className={cn("header__nav", {["header__nav_active"]: navActive})}>
          <ul className="header__nav-list">
             {arrLink.map(({content, id, href}) => {
                return <li key={id}>
                  <Link onClick={() => onSetActive(id)} className={cn("header__nav-link", {['header__nav-link_active']: active === id})} href={href}>{content}
                  </Link>
                </li>
             })}
             <li className="header__basket-auth">
              <Link className="header__basket-nav" href={'/'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7.66071 18.755H16.5201C17.974 18.755 18.8178 17.9112 18.8178 16.2991V8.50192C18.8178 6.88975 17.9665 6.046 16.3393 6.046H15.2771C15.2394 4.3585 13.8005 2.95728 12 2.95728C10.207 2.95728 8.76059 4.3585 8.72293 6.046H7.66071C6.03347 6.046 5.18219 6.88975 5.18219 8.50192V16.2991C5.18219 17.9112 6.03347 18.755 7.66071 18.755ZM12 4.2907C13.0321 4.2907 13.793 5.06665 13.8231 6.046H10.1769C10.207 5.06665 10.9679 4.2907 12 4.2907ZM7.75864 17.2558C7.06556 17.2558 6.68135 16.8942 6.68135 16.1635V8.63752C6.68135 7.91431 7.06556 7.5527 7.75864 7.5527H16.2413C16.9269 7.5527 17.3186 7.91431 17.3186 8.63752V16.1635C17.3186 16.8942 16.9269 17.2558 16.4221 17.2558H7.75864Z" fill="#181818"/>
                  </svg>
              </Link>
              <Link className="header__auth-nav" href={'/'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 11.8695C13.8231 11.8695 15.2997 10.2573 15.2997 8.28353C15.2997 6.3399 13.8231 4.79553 12 4.79553C10.1844 4.79553 8.69281 6.3625 8.70034 8.2986C8.70788 10.2648 10.1769 11.8695 12 11.8695ZM12 10.5511C10.9604 10.5511 10.079 9.56423 10.079 8.2986C10.0714 7.06311 10.9529 6.11389 12 6.11389C13.0547 6.11389 13.921 7.04804 13.921 8.28353C13.921 9.54916 13.0472 10.5511 12 10.5511ZM7.29912 18.8756H16.6934C17.9967 18.8756 18.6219 18.4613 18.6219 17.5723C18.6219 15.5006 16.038 12.7434 12 12.7434C7.96206 12.7434 5.37054 15.5006 5.37054 17.5723C5.37054 18.4613 5.99582 18.8756 7.29912 18.8756ZM7.06558 17.5573C6.88477 17.5573 6.81697 17.497 6.81697 17.3614C6.81697 16.2088 8.67774 14.0617 12 14.0617C15.3147 14.0617 17.1755 16.2088 17.1755 17.3614C17.1755 17.497 17.1077 17.5573 16.9269 17.5573H7.06558Z" fill="#181818"/>
                  </svg>
              </Link>
             </li>
          </ul>
        </nav>
         
        <Link className="header__logo" href={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M34.1 40.56C32.14 42.46 30 42.16 27.94 41.26C25.76 40.34 23.76 40.3 21.46 41.26C18.58 42.5 17.06 42.14 15.34 40.56C5.58 30.5 7.02 15.18 18.1 14.62C20.8 14.76 22.68 16.1 24.26 16.22C26.62 15.74 28.88 14.36 31.4 14.54C34.42 14.78 36.7 15.98 38.2 18.14C31.96 21.88 33.44 30.1 39.16 32.4C38.02 35.4 36.54 38.38 34.08 40.58L34.1 40.56ZM24.06 14.5C23.76 10.04 27.38 6.36 31.54 6C32.12 11.16 26.86 15 24.06 14.5Z" fill="black"/>
         </svg>
        </Link>

        <div className="header__content">
          <form className="header__content-form">
            <div className="header__input-wrap">
              <input className="header__search" type="text" placeholder={t('search')}/>
            </div>
          </form>

          <Link className="header__basket" href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.66071 18.755H16.5201C17.974 18.755 18.8178 17.9112 18.8178 16.2991V8.50192C18.8178 6.88975 17.9665 6.046 16.3393 6.046H15.2771C15.2394 4.3585 13.8005 2.95728 12 2.95728C10.207 2.95728 8.76059 4.3585 8.72293 6.046H7.66071C6.03347 6.046 5.18219 6.88975 5.18219 8.50192V16.2991C5.18219 17.9112 6.03347 18.755 7.66071 18.755ZM12 4.2907C13.0321 4.2907 13.793 5.06665 13.8231 6.046H10.1769C10.207 5.06665 10.9679 4.2907 12 4.2907ZM7.75864 17.2558C7.06556 17.2558 6.68135 16.8942 6.68135 16.1635V8.63752C6.68135 7.91431 7.06556 7.5527 7.75864 7.5527H16.2413C16.9269 7.5527 17.3186 7.91431 17.3186 8.63752V16.1635C17.3186 16.8942 16.9269 17.2558 16.4221 17.2558H7.75864Z" fill="#181818"/>
            </svg>
          </Link>

          <Link className="header__auth" href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 11.8695C13.8231 11.8695 15.2997 10.2573 15.2997 8.28353C15.2997 6.3399 13.8231 4.79553 12 4.79553C10.1844 4.79553 8.69281 6.3625 8.70034 8.2986C8.70788 10.2648 10.1769 11.8695 12 11.8695ZM12 10.5511C10.9604 10.5511 10.079 9.56423 10.079 8.2986C10.0714 7.06311 10.9529 6.11389 12 6.11389C13.0547 6.11389 13.921 7.04804 13.921 8.28353C13.921 9.54916 13.0472 10.5511 12 10.5511ZM7.29912 18.8756H16.6934C17.9967 18.8756 18.6219 18.4613 18.6219 17.5723C18.6219 15.5006 16.038 12.7434 12 12.7434C7.96206 12.7434 5.37054 15.5006 5.37054 17.5723C5.37054 18.4613 5.99582 18.8756 7.29912 18.8756ZM7.06558 17.5573C6.88477 17.5573 6.81697 17.497 6.81697 17.3614C6.81697 16.2088 8.67774 14.0617 12 14.0617C15.3147 14.0617 17.1755 16.2088 17.1755 17.3614C17.1755 17.497 17.1077 17.5573 16.9269 17.5573H7.06558Z" fill="#181818"/>
            </svg>
          </Link>
        </div>

        <div onClick={() => setNavActive(active => !active)} className={cn('header__burger', {['header__burger_burger-active']: navActive})}>
          <div></div>
          <div></div>
          <div></div>
        </div>
       </div>
      </div>
    </header>
  )
}

export default Header;