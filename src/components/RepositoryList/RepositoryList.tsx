import { useEffect, useState } from "react"
import { RepositoryItem } from "../RepositoryItem"
import './style.scss'

interface Repository {
  name: string
  description: string
  id: number
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list" >
      <h1>Lista de Repositorios</h1>

      <ul>
        {
          repositories.map((repo) => {
            return <RepositoryItem key={repo.id} description={repo.description} name={repo.name} url={repo.html_url} />
          })
        }

      </ul>
    </section>
  )
}