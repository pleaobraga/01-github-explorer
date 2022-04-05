interface RepositoryItemProps {
  name: string
  description: string
  url: string
}

export function RepositoryItem({ name, description, url }: RepositoryItemProps) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={url}>Link do repositorio</a>
    </li>
  )
}