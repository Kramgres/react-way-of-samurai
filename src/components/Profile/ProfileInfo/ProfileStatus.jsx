import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.status !== this.state.status){
            this.setState({
                status: this.state.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    </div> :
                    <div>
                        <input onChange={this.onStatusChange}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;