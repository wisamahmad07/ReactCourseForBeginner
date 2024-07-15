import { useEffect, useState } from "react";
import { Users } from "../api-client/user-service";
import UserService from "../api-client/user-service";
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* READING DATA USING GET */
  useEffect(() => {
    const { request, cancel } = UserService.getAll<Users>();
    setLoading(true);
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);
  return { users, error, loading, setLoading, setUsers, setError };
};

export default useUsers;
