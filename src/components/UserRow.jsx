export const UserRow = (props) => {
  const user = props.user;

  return(<tr>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.address.city}</td>
    <td>{user.phone}</td>
  </tr>)
}