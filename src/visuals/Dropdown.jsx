import React, { useState } from "react";

export default function Dropdown(){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
        <button nav className = "button2" onClick = { toggleDropdown }> Projects</button>
            {dropdownOpen && (
            <ul className = "dropdown">
                <li>Dog-a-doo Card Games</li>
                <li>Pacman thing</li>
            </ul>
            )}
        </div>
    )
}