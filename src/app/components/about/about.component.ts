import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stackList = [
    {
      img: `assets/Stack_Images/html5.svg`,
      name: "HTML",
    },
    {
      img: `assets/Stack_Images/css3.svg`,
      name: "CSS",
    },
    {
      img: `assets/Stack_Images/javascript.svg`,
      name: "JavaScript",
    },
    {
      img: `assets/Stack_Images/angular.svg`,
      name: "Angular",
    },
    {
      img: `assets/Stack_Images/bootstrap.svg`,
      name: "Bootstrap",
    },
    {
      img: `assets/Stack_Images/sass.svg`,
      name: "Scss",
    },
    {
      img: `assets/Stack_Images/git.svg`,
      name: "Git",
    },
    {
      img: `assets/Stack_Images/nodejs.svg`,
      name: "NodeJs",
    },
  ];
}
