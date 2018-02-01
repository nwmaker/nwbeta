function formatName(user) {
  return (
    user.firstName + ' ' + user.lastName 
  );
}
const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const UserName = (
  <h1>Hello, {formatName(user)}!</h1>
)

export default UserName
