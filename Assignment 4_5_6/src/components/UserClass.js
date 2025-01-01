import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
    }

    render(){
        const{ name, location } = this.props;

        return (
            <div className="user-card">
            <h2>Name: Avin</h2>
            <h3>Location: Navi Mumbai</h3>
            <h4>Contact: @avinmarch7</h4>
            </div>
        );
    };
}

export default UserClass;