fetch("https://api.github.com/users/raj94-cloud/repos")
  .then(response => response.json())
  .then(data => {
    let repoContainer = document.getElementById("repo-list");
    repoContainer.innerHTML = "";

    data.forEach(repo => {
      let repoCard = `
        <div class="repo-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available"}</p>
            <a href="${repo.html_url}" target="_blank">🔗 View Repository</a>
        </div>
      `;
      repoContainer.innerHTML += repoCard;
    });
  })
  .catch(error => {
    document.getElementById("repo-list").innerHTML = "Unable to load repositories.";
    console.error("Error loading repos:", error);
  });
