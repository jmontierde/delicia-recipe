import { useCallback, useRef, useState } from "react";
import Search from "./Search";
import { Button } from "@/components/ui/button";

const Hooks = () => {
  const allUsers = ["Jayson", "James", "Ken"];

  const [users, setUsers] = useState(allUsers);

  const shuffleUsers = useCallback(() => {
    const shuffledUsers = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffledUsers);
  }, [users]);

  // useMemo: Returns and stores the calculated value of a function in a variable
  // useCallBack: Returns and stores the actual function itself in a variable
  // Basically kapag ang parent components ay nag bago ang child component na walang useCallback ay mag rerender din

  const handleSearch = useCallback(
    (text: string) => {
      console.log("Users", users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const focusRef = useRef<HTMLInputElement>(null);

  const focusHandle = () => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" name="focus" id="focus" ref={focusRef} />
      <button onClick={focusHandle}>Focuys Button</button>

      <h1>Hello owrld</h1>
      <Button onClick={shuffleUsers}>Shuffle</Button>
      {users.map((user) => (
        <h1 key={user}>{user}</h1>
      ))}

      <Search onChange={handleSearch} />
    </div>
  );
};

export default Hooks;
