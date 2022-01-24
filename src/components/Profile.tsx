import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src="https://img.search.brave.com/uA39iedoEahn1BHqZqOWK9AjnQUDk27eUNaOvGNm9bg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/cDJNOWdwN2hzWWFP/YmExLTZ2dnB3SGFF/SyZwaWQ9QXBp"
                alt=""/>
            <div>Ava + description</div>
            <div>My Posts
                <div>
                    New Post
                </div>
            </div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    );
};

export default Profile;