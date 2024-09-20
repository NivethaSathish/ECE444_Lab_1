// list of projects
const projects = [
  {
    title: "Peer Tutoring Database",
    description: "Java program with GUI that allows tutors, students, and admins to be registered in the peer tutoring system",
    image: "/ECE444_Lab_1/assets/img/peertutoring.jpg",
    link: "https://github.com/NivethaSathish/Peer-Tutoring-Database/tree/main",
    tools: "Java, JFrame",
    date: new Date("2023-01-25")
  },
  {
    title: "Monopoly Game",
    description: "Java program with GUI that allows you to play Monopoly with up to 3 other players",
    image: "/ECE444_Lab_1/assets/img/monopoly.jpg",
    link: "https://github.com/NivethaSathish/Monopoly-Game",
    tools: "Java, JFrame",
    date: new Date("2022-07-25")
  },
  {
    title: "Gomoko",
    description: "Python program that allows you to play Gomoko against the program which makes moves by analyzing the board and deciding the best position to move based on potential wins or losses",
    image: "/ECE444_Lab_1/assets/img/gomoko.png",
    link: "https://github.com/NivethaSathish/Gomoko-Project",
    tools: "Python",
    date: new Date("2022-06-25")
  },
  {
    title: "Autocomplete",
    description: "C program that reads in a list of words (sorted by lexicographic order) along with their importance weights and retrieves the top terms that match a string query",
    image: "/ECE444_Lab_1/assets/img/autocomplete.jpg",
    link: "https://github.com/NivethaSathish/Autocomplete-Project",
    tools: "C",
    date: new Date("2023-08-25")
  }
];

// display a single project
function displayProject(project) {
  const recentProjectsDiv = document.getElementById("recent-projects");

  // Create the new elements for the card
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('col', 's12', 'm6', 'l6');

  const card = document.createElement('div');
  card.classList.add('card', 'medium');

  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image', 'waves-effect', 'waves-block', 'waves-light');

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;
  img.style.width = "100%";
  img.style.height = "100%";

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const cardTitle = document.createElement('span');
  cardTitle.classList.add('card-title', 'activator', 'teal-text', 'hoverline');
  cardTitle.innerText = project.title;

  const cardDescription = document.createElement('p');
  cardDescription.innerText = project.description;

  const moreIcon = document.createElement('i');
  moreIcon.classList.add('mdi-navigation-more-vert', 'right');

  // Card Action (contains the GitHub link)
  const cardAction = document.createElement('div');
  cardAction.classList.add('card-action');

  const link = document.createElement('a');
  link.href = project.link;
  link.target = "_blank";
  link.innerText = "View on GitHub";

  // card reveal stuff
  const cardReveal = document.createElement('div');
  cardReveal.classList.add('card-reveal');

  const revealTitle = document.createElement('span');
  revealTitle.classList.add('card-title', 'brown-text');
  revealTitle.innerHTML = `<small>Accomplishments</small><i class="mdi-navigation-close right"></i>`;

  const revealList = document.createElement('ul');
  const listItem = document.createElement('li');
  listItem.innerHTML = `<b>Tools:</b> ${project.tools}`;

  revealList.appendChild(listItem);
  cardReveal.appendChild(revealTitle);
  cardReveal.appendChild(revealList);

  // Append elements together
  cardImage.appendChild(img);
  cardTitle.appendChild(moreIcon);
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardAction.appendChild(link);
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  card.appendChild(cardAction);
  card.appendChild(cardReveal);
  cardDiv.appendChild(card);

  // Append the card to the recent projects div
  recentProjectsDiv.appendChild(cardDiv);
}

// Display the first project when the page loads
function displayLatestProject() {
  projects.sort(date)
  displayProject(projects[0]);
}

// Handle loading more projects
let currentProjectIndex = 1;

function loadMoreProjects() {
  projects.sort(date)
  if (currentProjectIndex < projects.length) {
    displayProject(projects[currentProjectIndex]);
    currentProjectIndex++;
  } else {
    alert("No more projects to load!");
  }
}

// load DOM
document.addEventListener('DOMContentLoaded', function () {
  // first project is displayed when page is loaded
  displayLatestProject();

  // Add event listener to the "Load More" button
  const loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", loadMoreProjects);
  }
});

  
