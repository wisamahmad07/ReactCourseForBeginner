import UserService, { Users } from "../../api-client/user-service";
import useUsers from "../../hooks/useUsers";

const FetchData = () => {
  const { users, error, loading, setError, setUsers } = useUsers();

  /* DELETING DATA USING DELETE */
  const onDelete = (user: Users) => {
    setUsers(users.filter((u) => u.id !== user.id));
    const originalUsers = [...users];
    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  /* ADDING DATA USING POST */
  const onAdd = () => {
    const newUser = { id: 0, name: "Mosh" };
    const originalUsers = [...users];

    setUsers([newUser, ...users]);
    UserService.add(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers([...originalUsers]);
      });
  };

  /* Updated User via Patch */
  const onUpdate = (user: Users) => {
    const updatedUser = { ...user, name: user.name + "!" };
    const originalUsers = [...users];

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    UserService.Update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div className="mt-3 p-3">
        {loading && <div className="spinner-border"></div>}
        <button className="btn btn-outline-primary mb-3" onClick={onAdd}>
          Add user
        </button>
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div className="d-flex">
                <div className="me-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => onUpdate(user)}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(user)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchData;
