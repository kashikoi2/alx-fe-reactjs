import { useState } from "react";
import { fetchGitHubUser } from "./services/githubApi";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    if (!username) return;
    const data = await fetchGitHubUser(username);
    setUserData(data);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>{userData.bio || "No bio available"}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;

export default App;
