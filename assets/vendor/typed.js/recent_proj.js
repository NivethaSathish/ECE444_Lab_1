const projects = [
    {
      title: "Peer Tutoring Database",
      description: "Java program with GUI that allows tutors, students, and admins to be registered.",
      image: "/ECE444_Lab_1/assets/img/peertutoring.jpg",
      link: "https://github.com/NivethaSathish/Peer-Tutoring-Database/tree/main"
    },
    {
      title: "Monopoly Game",
      description: "Java program with GUI that allows you to play Monopoly with up to 3 other players.",
      image: "/ECE444_Lab_1/assets/img/monopoly.jpg",
      link: "https://github.com/NivethaSathish/Monopoly-Game"
    },
    {
      title: "Gomoko",
      description: "Python program that lets you play Gomoko with an AI.",
      image: "/ECE444_Lab_1/assets/img/gomoko.png",
      link: "https://github.com/NivethaSathish/Gomoko-Project"
    }
  ];
  
  function displayLatestProject() {
    const recentProjectsDiv = document.getElementById("recent-projects");
    const latestProject = projects[0];  // Get the latest project
    
    recentProjectsDiv.innerHTML = `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="${latestProject.image}" alt="${latestProject.title}">
          </div>
          <div class="card-content">
            <span class="card-title">${latestProject.title}</span>
            <p>${latestProject.description}</p>
          </div>
          <div class="card-action">
            <a href="${latestProject.link}" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    `;
  }
  
  window.onload = displayLatestProject;
  
  let currentProjectIndex = 1;  // Start from the second project

// Function to load more projects
function loadMoreProjects() {
  const recentProjectsDiv = document.getElementById("recent-projects");
  
  // Check if there are more projects to load
  if (currentProjectIndex < projects.length) {
    const project = projects[currentProjectIndex];
    
    // Append the new project
    recentProjectsDiv.innerHTML += `
      <div class="col s12 m6 l4">
        <div class="card">
          <div class="card-image">
            <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="card-content">
            <span class="card-title">${project.title}</span>
            <p>${project.description}</p>
          </div>
          <div class="card-action">
            <a href="${project.link}" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    `;
    
    currentProjectIndex++;  // Move to the next project
  } else {
    alert("No more projects to load!");
  }
}

// Add event listener to "Load More" button
document.getElementById("load-more").addEventListener("click", loadMoreProjects);
