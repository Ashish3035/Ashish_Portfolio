import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      img: `assets/Screenshot (67).png`,
      title: "Cul.In",
      description: "CUL.IN is a MEAN stack-based cloud-kitchen management system. It meets the versatile requirements of a modern Cloud-Kitchen setup.",
      tech_stack: "Html, Css, Angular, NodeJs, Sql",
      github_url: "https://your_project_github_link",
      demo_url: "https://your_project_demo_link",
    },
    {
      img: `assets/uam.png`,
      title: "UAM",
      description:
        "User Access Management is the integrated module of the 73Strings Project. We used to manage the different types of users on the platform.",
      tech_stack: "Html, Css, Angular, Spring boot, MongoDB",
      github_url: "https://your_project_github_link",
      demo_url: "https://your_project_demo_link",
    },
    {
      img: `assets/am.png`,
      title: "Approval Matrix",
      description:
        "User can set up approval conditions for specific companies to get filed approved before pushing to the repository",
      tech_stack: "Html, Css, Angular, Spring boot, Sql",
      github_url: "https://your_project_github_link",
      demo_url: "https://your_project_demo_link",
    },
    {
      img: `assets/portfolio_img.png`,
      title: "Portfolio",
      description: "Ofcourse i made my own personal portfolio website.",
      tech_stack: "Angular, Css",
      github_url: "https://your_project_github_link",
      demo_url: "https://your_project_demo_link/",
    },

  ];

}
