import { getUserProfile, getUserRepos } from "./api.js"
import { renderProfile, renderRepos } from "./ui.js"

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

async function init() {
    const profile = await getUserProfile()
    renderProfile(profile)

    allRepos = await getUserRepos()
    renderRepos(allRepos)

    setupFilters()
}
document.addEventListener('DOMContentLoaded', init)