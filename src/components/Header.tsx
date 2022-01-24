import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
            <header className={s.header}>
                <img className={s.img}
                     src="https://img.search.brave.com/VQtKjHeni0eFuWjVdWdgpfV9UvzMf-0rireieM7yPDU/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/MUVlTXE1NEZreXA0/U2daclNXMi1RSGFF/OCZwaWQ9QXBp"
                     alt=""/>
            </header>
    );
};

export default Header