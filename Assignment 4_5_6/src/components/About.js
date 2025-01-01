import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Avin Dsouza {function}"}/>
            <UserClass name={"Avin Dsouza (Class based component)"}/>
        </div>
    );
};

export default About;