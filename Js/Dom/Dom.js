import { skillsInfo } from "../../lib/skills.js";
import { projects, projectsBtn } from "../../lib/projects.js";
console.log(projectsBtn);
// skill part start here
const showSkill = document.querySelector(".skill-inner");
const skillDiv = document.createElement("div");
skillDiv.className = "row justify-content-center";

// ===============================================================
//                  skill part start here
// ===============================================================
skillsInfo.map((info) => {
  skillDiv.innerHTML += ` 
                        <div class="col-lg-3 ${info.className} col-md-4 offset-1">
                            <div data-blast="bgColor" class="client-side my-skill">
                                <i class="${info.icon}"></i>
                                 <h4>${info.title}</h4>
                                <ul>
                                    <li>${info.skill1}</li>
                                    <li>${info.skill2}</li>
                                    <li>${info.skill3}</li>
                                    <li>${info.skill4}</li>
                                    <li>${info.skill5}</li>
                                    <li>${info.skill6}</li>
                                    <li>${info.skill7}</li>
                                    <li class="hosting">${info.skill8}</li>
                                </ul>
                            </div>
                         </div>`;
});

showSkill.appendChild(skillDiv);

// ===============================================================
//                  skill part end here
// ===============================================================

// ===============================================================
// // project btn group start  here;
// ===============================================================

const btnGroup = document.querySelector(".project-btn-group");
const ul = document.createElement("ul");
ul.className = "project-btn filter-button-group d-flex justify-content-start";
projectsBtn.map((btn) => {
  ul.innerHTML += ` <li class="${btn.class}" data-filter="${btn.filter}">${btn.name}</li>`;
});
btnGroup.appendChild(ul);

// ===============================================================
// // project btn group end  here;
// ===============================================================

// ===============================================================
//                  project info start here
// ===============================================================

const project = document.querySelector(".project-inner");
const projectDiv = document.createElement("div");
projectDiv.className = "row all-project";

projects.map((info) => {
  projectDiv.innerHTML += `
    <div class="my-project ${info.projectType} col-lg-4 col-sm-6">
    <div class="main-project">
      <div class="hover-wrap project-content">
        <div class="project-details">
          <a
            class="btn btn-danger my-2"
            href="${info.githubLink}"
            ><i class="${info.icon1}"></i> <span>GitHub</span></a
          >
          <a
            class="btn btn-success"
            href="${info.liveProject}"
            ><i class="${info.icon2}"></i> <span>Live Project</span></a
          >
        </div>
      </div>
      <div class="item-content project-img my-3">
        <img
          src="${info.projectImage}"
          class="img-fluid w-100"
          alt="6"
        />
      </div>
    </div>
  </div>
    `;
});

project.appendChild(projectDiv);

// ===============================================================
//                  project info end here
// ===============================================================
