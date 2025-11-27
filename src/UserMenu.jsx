import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function UserMenu() {
  const { user, setUser } = useContext(UserContext);

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Stati locali del form
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("/avatars/default.png");

  const presetAvatars = [
    "/avatars/Avatar1.png",
    "/avatars/Avatar2.png",
    "/avatars/Avatar3.png",
    "/avatars/Avatar4.png",
  ];

  // GET /users/me
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:3001/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) return;

        const data = await res.json();

        setUser(data);

        setUsername(data.username || "");
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setEmail(data.email || "");
        setAvatar(data.avatar || "/avatars/default.png");
      } catch (err) {
        console.error("Errore GET:", err);
      }
    }

    loadUser();
  }, []);

  // PUT /users/me
  async function saveChanges() {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    setLoading(true);

    const body = {
      username,
      firstName,
      lastName,
      email,
      avatar,
    };

    try {
      const res = await fetch("http://localhost:3001/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        console.error("Errore PUT:", res.status);
        setLoading(false);
        return;
      }

      const updated = await res.json();

      setUser(updated);
      localStorage.setItem("user", JSON.stringify(updated));

      setEditing(false);
      setLoading(false);
    } catch (err) {
      console.error("Errore PUT:", err);
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  }

  if (!user) return null;

  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center">
        <img
          src={avatar}
          className="w-10 h-10 rounded-full border shadow cursor-pointer object-cover"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute right-0 mt-3 w-screen max-w-lg bg-white 
                   rounded-2xl shadow-2xl ring-1 ring-black/5 p-8 
                   overflow-y-auto transition data-closed:opacity-0 
                   data-closed:-translate-y-1"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile</h2>

          <button
            onClick={() => setEditing(!editing)}
            className="text-gray-700 hover:text-blue-500"
          >
            ✏️
          </button>
        </div>

        <div className="flex gap-6 items-center mb-8">
          <img
            src={avatar}
            className="w-24 h-24 rounded-full border shadow object-cover"
          />

          {editing && (
            <div className="flex gap-4">
              {presetAvatars.map((img) => (
                <img
                  key={img}
                  src={img}
                  onClick={() => setAvatar(img)}
                  className={
                    "w-16 h-16 rounded-full cursor-pointer border object-cover " +
                    (avatar === img ? "ring-2 ring-blue-500" : "")
                  }
                />
              ))}
            </div>
          )}
        </div>

        {!editing ? (
          <div className="space-y-3 text-gray-800">
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Nome:</strong> {firstName}</p>
            <p><strong>Cognome:</strong> {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Username"
            />
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Nome"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Cognome"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Email"
            />
          </div>
        )}

        {editing && (
          <button
            onClick={saveChanges}
            className="mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600"
          >
            {loading ? "Salvando..." : "Salva"}
          </button>
        )}

        <button
          onClick={logout}
          className="mt-8 w-full py-2 rounded-xl text-red-500 bg-red-50 font-medium hover:bg-red-100"
        >
          Log out
        </button>
      </PopoverPanel>
    </Popover>
  );
}

