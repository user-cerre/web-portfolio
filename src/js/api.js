const API_URL = 'https://api.github.com/users/user-cerre'

export async function getUserProfile() {
    try {
        const response = await fetch(API_URL)
        if (!response.ok){
            throw new Error('Error fetching profile')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return null
    }    
}
export async function getUserRepos() {
    try {
        const response = await fetch(API_URL+ '/repos?sort=updated')
        if (!response.ok){
            throw new Error('Error fetching user repos')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}
export async function getProfileReadme() {
    try {
        const response = await fetch('https://api.github.com/repos/user-cerre/user-cerre/readme', {
            headers: {
                'Accept': 'application/vnd.github.html'
            }
        })
        if (!response.ok) {
            throw new Error('Error fetching README')
        }
        return await response.text()
    } catch (error) {
        console.error(error)
        return null
    }
}