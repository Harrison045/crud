import UserItem from "./UserItem";

function UserList(props) {
  return (
    <>
      <h1>User List Component</h1>
      {props.user.map((users) => {
        return <UserItem  key={users.id} details={users} />;
      })}
    </>
  );
}

export default UserList;
