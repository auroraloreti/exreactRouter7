import React from 'react';

const GithubUser = ({ username }) => {
  useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => res.json())
            .then((json) => setUser(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [username]);
  return (
    <div className="github-user">
      <h3>{username}</h3>
    </div>
  );
};

export default GithubUser;