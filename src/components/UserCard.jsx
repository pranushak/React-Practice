
const UserCard = (props) => {

    return (
        <div>
            <h2>Hello,{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.age}</p>
        </div>
    );
}

export default UserCard;