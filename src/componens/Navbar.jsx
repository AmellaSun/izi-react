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
            <a href="#" className="nav__logo-link">
                <div className="nav__logo-wrapper">
                    <img
                        className="nav__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
                        alt=""
                    />
                </div>
            </a>
            <a href="#" className="nav__link--active" name="1">
                <div className="nav__boxes">
                    <HomeIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Главная
                    </span>
                </div>
            </a>
            <a href="#" className="nav__link" name="2">
                <div className="nav__boxes">
                    <LatticeIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Обзор
                    </span>
                </div>
            </a>
            <a href="#" className="nav__link">
                <div className="nav__boxes">
                    <BellIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Уведомления
                    </span>
                </div>
            </a>
            <a href="#" className="nav__link">
                <div className="nav__boxes">
                    <MessageIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Сообщения
                    </span>
                </div>
            </a>
            <a href="#" className="nav__link">
                <div className="nav__boxes">
                    <BookmarkIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Закладки
                    </span>
                </div>
            </a>
            <a href="#" className="nav__link">
                <div className="nav__boxes">
                    <SkylistsIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Списки
                    </span>
                </div>
            </a>
            <a href="#" className="nav__link">
                <div className="nav__boxes">
                    <ProfileIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Профиль
                    </span>
                </div>
            </a>
            <a href="#" className="nav__link">
                <div className="nav__boxes">
                    <OtherIcon nameOfClass="nav__icon" />
                    <span href="#" className="nav__topic">
                        Ещё
                    </span>
                </div>
            </a>
        </nav>
    );
};
export default Navbar;
