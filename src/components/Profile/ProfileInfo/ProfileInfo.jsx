import React from "react";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={profile.photos.small} alt=""/>
            </div>
            <div>{profile.fullName}</div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo;