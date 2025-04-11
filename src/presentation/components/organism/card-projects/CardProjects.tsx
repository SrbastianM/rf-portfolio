import React from "react";
import { useGithubRepos } from "../../../hooks/useGithubRepos";



const CardProjects : React.FC = () => {
  const {repos, loading, error} = useGithubRepos()

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="grid grid-col-3 gap-3">
      {
        Array.isArray(repos) && repos.map((repo, index) => (
          <a key={index} href={repo.html_url} target="_blank">
            {repo.name} {repo.description}
          </a>
        ))
      }
    </div>
  )
}

export default CardProjects;