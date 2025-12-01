fetch("https://api.github.com/users/raj94-cloud/repos?sort=updated")
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById("repo-list");
        container.innerHTML = "";

        data.forEach(repo => {
            container.innerHTML += `
                <div class="project-card">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description provided"}</p>
                    <a href="${repo.html_url}" target="_blank">View Repository</a>
                </div>
            `;
        });
    });
