import { useState, useContext } from "react";
import lurnyLogin from "./assets/Login.png";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (isLogin) {
      fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => {
          if (!res.ok) {
            alert("Invalid credentials");
            return null;
          }
          return res.json();
        })
        .then((data) => {
          if (!data) return;

          const token = data.accessToken;

          fetch("http://localhost:3001/users/me", {
            headers: { Authorization: "Bearer " + token },
          })
            .then((meRes) => meRes.json())
            .then((me) => {
              setUser(me);
              localStorage.setItem("token", token);
              navigate("/");
            })
            .catch(() => {
              alert("Error loading profile");
            });
        })
        .catch(() => {
          alert("Server error");
        });
    } else {
      const body = {
        username,
        firstName,
        lastName,
        email,
        password,
      };

      fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => {
          if (!res.ok) {
            alert("Error during registration");
            return;
          }
          alert("Account created! Now log in.");
          setIsLogin(true);
        })
        .catch(() => {
          alert("Server error");
        });
    }
  }

  return (
    <div className="flex min-h-screen bg-amber-50">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src={lurnyLogin}
          alt="Lurny Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2">
        <div className="mx-auto w-full max-w-sm">
          <div className="bg-blue-300 rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-stone-900">
              {isLogin ? "Log in to Lurny" : "Create your Lurny account"}
            </h2>

            <p className="mt-2 text-sm text-stone-800">
              {isLogin ? (
                <>
                  New here?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="font-semibold text-stone-800 hover:text-sky-400"
                  >
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="font-semibold text-stone-800 hover:text-sky-400"
                  >
                    Log in
                  </button>
                </>
              )}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-900">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full rounded-xl bg-white border border-gray-300 px-3 py-2"
                />
              </div>

              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-stone-900">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 block w-full rounded-xl bg-white border border-gray-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-900">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 block w-full rounded-xl bg-white border border-gray-300 px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-900">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded-xl bg-white border border-gray-300 px-3 py-2"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-stone-900">
                  Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-xl bg-white border border-gray-300 px-3 py-2"
                />

                <label className="flex items-center gap-2 mt-2 text-sm">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  Show password
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-sky-400 py-2 text-white font-semibold"
              >
                {isLogin ? "Log in" : "Sign up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
