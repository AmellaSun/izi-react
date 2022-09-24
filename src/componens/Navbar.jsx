import React from "react";
import BellIcon from "../Assets/NavbarIcons/BellIcon";
import BookmarkIcon from "../Assets/NavbarIcons/BookmarkIcon";
import HomeIcon from "../Assets/NavbarIcons/HomeIcon";
import LatticeIcon from "../Assets/NavbarIcons/LatticeIcon";
import MessageIcon from "../Assets/NavbarIcons/MessageIcon";
import OtherIcon from "../Assets/NavbarIcons/OtherIcon";
import ProfileIcon from "../Assets/NavbarIcons/ProfileIcon";
import SkylistsIcon from "../Assets/NavbarIcons/SkylistsIcon";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__boxes">
                <HomeIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Главная
                </a>
            </div>
            <div  className="nav__boxes">
                <LatticeIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Обзор
                </a>
            </div>
            <div  className="nav__boxes">
                <BellIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Уведомления
                </a>
            </div>
            <div  className="nav__boxes">
                <MessageIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Сообщения
                </a>
            </div>
            <div  className="nav__boxes">
                <BookmarkIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Закладки
                </a>
            </div>
            <div  className="nav__boxes">
                <SkylistsIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Списки
                </a>
            </div>
            <div  className="nav__boxes">
                <ProfileIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Профиль
                </a>
            </div>
            <div  className="nav__boxes">
                <OtherIcon nameOfClass="nav__icon" />
                <a href="#" className="nav__a">
                    Ещё
                </a>
            </div>
        </nav>
    );
};
export default Navbar;
