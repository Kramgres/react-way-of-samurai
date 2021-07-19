import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
       setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                </div> :
                <div>
                    <input onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;