fetch("https://api.github.com/users/raj94-cloud/repos?sort=updated")
  .then(response => response.json())
  .then(data => {
    let repoContainer = document.getElementById("repo-list");
    repoContainer.innerHTML = "";

    data.forEach(repo => {
      let card = `
        <div class="repo-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description provided"}</p>
            <a href="${repo.html_url}" target="_blank">🔗 Open Repository</a>
        </div>
      `;
      repoContainer.innerHTML += card;
    });
  })
  .catch(err => {
    document.getElementById("repo-list").innerHTML = "Error loading repositories.";
    console.error(err);
  });
