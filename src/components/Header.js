import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
    const [darkmode, setDarkmode] = useState(true);
    const [icon, setIcon] = useState('moon-outline');

    const toggleTheme = () => {
        if (darkmode) {
            document.body.classList.add('darkmode');
            setDarkmode(current => current = !current);
            setIcon('moon-sharp')

            // Update darkmode in the localstorage
            localStorage.setItem('darkTheme', 'enabled');
        }
        if (!darkmode) {
            document.body.classList.remove('darkmode');
            setDarkmode(current => current = !current);
            setIcon('moon-outline')

            // Update darkmode in the localstorage
            localStorage.setItem('darkTheme', null);

        }
    }

    useEffect(() => {
        let darkTheme = localStorage.getItem('darkTheme');

        if (darkTheme === 'enabled') {
            document.body.classList.add('darkmode');
            setIcon('moon-sharp')
        }

    }, [darkmode]);

    return (
        <div className="header-container">
            <div className="header container">
                <div className="header-title">
                    <h1>Where in the world?</h1>
                </div>
                <div className="dark-mode" onClick={() => toggleTheme()}>
                    {<ion-icon name={icon}></ion-icon>}
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    );
}
