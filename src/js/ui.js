export function renderProfile(user){
    if(!user){
        return
    }
    const container = document.querySelector('#profile-container')

    const avatar = document.createElement('img')
    avatar.src = user.avatar_url
    avatar.alt = user.login
    
    const name = document.createElement('h2')
    name.textContent = user.name || user.login

    const bio = document.createElement('p')
    bio.textContent = user.bio || 'Web Development Student'

    container.innerHTML = ''
    container.append(avatar, name, bio)

}

export function renderRepos(repos){
    const container = document.querySelector('#repo-container')
    container.innerHTML = ''

    if( repos.length === 0){
        container.innerHTML = '<p>No repositories found</p>'
        return
    }
    repos.forEach(repo => {
        const card = document.createElement('article')
        card.classList.add('repo-card', 'fade-in')
        
        const title = document.createElement('h3')
        title.textContent = repo.name

        const description = document.createElement('p')
        description.textContent = repo.description || 'No description available'

        const language = document.createElement('span')
        language.textContent = repo.language || 'Other'

        const url = document.createElement('a')
        url.href = repo.html_url
        url.target = '_blank'
        url.textContent = ' View on GitHub'
        
        card.append(title, description, language, url)
        card.dataset.lang = repo.language || 'Other'
        container.appendChild(card)
    })
}
export function renderReadme(html) {
    const container = document.querySelector('#readme-container')
    if (!html) {
        container.innerHTML = '<p>No profile README available.</p>'
        return
    }
    container.innerHTML = html
}