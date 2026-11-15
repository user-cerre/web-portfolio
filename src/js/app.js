import { getUserProfile, getUserRepos, getProfileReadme } from "./api.js"
import { renderProfile, renderRepos, renderReadme } from "./ui.js"

let allRepos = []

function setupFilters(){
    const buttons = document.querySelectorAll('#filter-container button')
    buttons.forEach(button =>{
        button.addEventListener('click', () =>{
            const language = button.dataset.lang

            if(language === 'all'){
                renderRepos(allRepos)
            }else{
                const filtered = allRepos.filter(repo => repo.language ===language)
                renderRepos(filtered)
            }
        })
    })
}
function setupTheme(){
    const button = document.querySelector('#theme-toggle')
    button.addEventListener('click', () => {
        const dark = document.body.dataset.theme === 'dark'
        document.body.dataset.theme = dark ? 'light' : 'dark'
        button.textContent = dark ? '🌙' : '☀️'
    })
}
async function init() {
    const profile = await getUserProfile()
    renderProfile(profile)

    const rawRepos = await getUserRepos()
    allRepos = rawRepos.filter(repo => repo.name !== 'user-cerre')
    renderRepos(allRepos)

    setupFilters()
    setupTheme()
    const readmeHtml = await getProfileReadme()
    renderReadme(readmeHtml)
}
document.addEventListener('DOMContentLoaded', init)