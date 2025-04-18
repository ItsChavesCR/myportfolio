// getRepos.ts
export async function getRepos() {
    const res = await fetch("https://api.github.com/users/ItsChavesCR/repos")
    const data = await res.json()
  
    // 🔎 Filtra solo los que querés mostrar
    const proyectosDestacados = ["FrontEnd-CACPJ",]
  
    return data
      .filter((repo: any) => proyectosDestacados.includes(repo.name.toLowerCase()))
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        url: repo.html_url,
        homepage: repo.homepage, // puede ser null si no hay
      }))
  }
  