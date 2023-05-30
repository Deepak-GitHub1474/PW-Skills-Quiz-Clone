import React from "react";
import profileImg from  "../MyProject/Images/profile-img.jpg"
import logoImg from  "../MyProject/Images/pw-logo.png"
export default function QuizNav() {
    return (
        <header className="header-section">
            <img src={logoImg} className="logo" alt="pw-logo" />
            <nav>
                <ul className="nav-ul">
                    <li>Dashboard</li>
                    <li>Courses</li>
                    <li>PW Skills Lab</li>
                    <li>Job Portal</li>
                    <li>Experience Portal</li>
                    <li>Become an affiliate</li>
                    <li>Hall of Fame</li>
                </ul>
            </nav>
            <div className="my-account">
                <div className="my-account-li">
                    <li><i className="fa-solid fa-book"></i>My Courses</li>
                    <li><i className="fa-solid fa-user"></i>My Profile</li>
                    <li><i className="fa-solid fa-right-from-bracket"></i>Logout</li>
                </div>
                <li>Deepak Kumar Chaudhary <span>&#9660;</span></li>
                <img src={profileImg} alt="profile-img" />
            </div>
        </header>
    )
}