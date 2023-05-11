import { useEffect, useState } from "react";

import css from "./ReposList.module.css";

export function ReposList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const baseUrl =
          "https://api.github.com/users/AnatoliyYakovenko/repos?per_page=100";
        const response = await fetch(baseUrl);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRepos();
  }, []);
  return (
    <ul className={css.reposList}>
      <h2 className={css.reposTitle}>Projects</h2>
      {repos.map(({ full_name, html_url, description }) => (
        <li className={css.reposItem} key={full_name}>
          <p>{full_name}</p>
          <a href={html_url}>{html_url}</a>
          {description && <p className={css.reposDescription}>{description}</p>}
        </li>
      ))}
    </ul>
  );
}
