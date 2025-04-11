import axios from "axios";
import { useEffect, useState } from "react";

export interface Repo {
  id: number,
  name: string,
  html_url: string,
  description: string
}

export const useGithubRepos = () => {
  const api = import.meta.env.VITE_API_URI
  const [repos, setRepo] = useState<Repo[]>([]); // initial State empty array and the type of elements inside was Repo{}
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const res = await axios.get<Repo[]>(api)
        setRepo(res.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message)
      } finally {
        setLoading(false);
      }
    }
    fetchRepo();
  })

  return {repos, loading, error};
}