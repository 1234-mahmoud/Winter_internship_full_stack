//-----------------------Skills----------------------------------------
const skills = ["HTML", "CSS", "JS", "GIT"];
const Tecskills = [
  "HTML",
  "CSS",
  "JS",
  "GIT",
  "React JS",
  "Next Js",
  "Tailwind CSS",
  "Bootstrap",
  "Responsive Design",
];
const SoftSkills = [
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adabtability",
];

const SkillFunc = (skills_arr) => {
  const ul = document.createElement("ul");

  skills_arr.map((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  });

  return ul;
};
// skills being learned
const skillsList = SkillFunc(skills);
document.getElementById("skill").replaceWith(skillsList);
//technical skills
const Tecnical_skills = SkillFunc(Tecskills);
document.getElementById("tec-skill").replaceWith(Tecnical_skills);
//technical skills
const soft_skills = SkillFunc(SoftSkills);
document.getElementById("soft-skill").replaceWith(soft_skills);

//-----------------------Projects----------------------------------------

const project_data = [
  {
    id: 1,
    title: "Venvl",
    description:
      "VENVL is a rental platform for discovering premium daily and monthly properties",
    technologies: ["Next Js", "Tailwind css"],
    github_repo_link: "https://github.com/1234-mahmoud/Venvl",
  },
  {
    id: 2,
    title: "ARX",
    description:
      "ARX Design is a real estate platform showcasing ARX Developments’ projects and services.",
    technologies: ["React Js", "CSS"],
    github_repo_link: "https://github.com/1234-mahmoud/arx-design",
  },
  {
    id: 3,
    title: "Simple Landing Page",
    description:
      "this is a landing page for a business company that shows the stages of the company development",
    technologies: ["React Js", "CSS"],
    github_repo_link: "https://github.com/1234-mahmoud/landing_page",
  },
];

const projectsContainer = document.getElementById("proj_");

projectsContainer.innerHTML = project_data
  .map(
    (project) => `
          <div class="proj">
            <span>${project.title}</span>
            <p>${project.description}</p>
            <div class="tecs">
              <span>Technologies:</span>
              <ul>
                ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
              </ul>
            </div>
            <a href="${
              project.github_repo_link
            }" target="_blank">project link</a>
          </div>
        `
  )
  .join("");
