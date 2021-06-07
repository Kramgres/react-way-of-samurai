import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus.jsx";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.small} alt=""/>
            </div>
            <div>{props.profile.fullName}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;