import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = async () => {
    let loginData = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // data
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((res) => res.json());

    (loginData?.message) ? setError(loginData.message) : navigate("/");

    //   console.log(username);
    //   console.log(password);
  };

  console.log("error", typeof error);
  return (
    <section className="m-5">
      {error && <p className="text-red-600">{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex max-w-md flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Your username</Label>
          </div>
          <TextInput
            onChange={(e) => setUsername(e.target.value)}
            id="email1"
            type="text"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            id="password1"
            type="password"
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </section>
  );
}
