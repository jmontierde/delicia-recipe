import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";

// You can
type MessageApp = {
  message: string;
  age: number;
};

type User = {
  firstName: string;
  lastName: string;
};

// Hooks

const Learn = ({ message, age }: MessageApp) => {
  const [user, setUser] = useState<User | null>({} as User);

  const submitUser = () => {
    setUser({ firstName: "JAyson", lastName: "C" });
  };

  return (
    <div>
      {message}
      {age}
      {user?.firstName}
      <Button onClick={submitUser}>Submit</Button>
    </div>
  );
};

export default Learn;
