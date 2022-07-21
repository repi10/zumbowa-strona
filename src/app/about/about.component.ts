import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss','../../styles.scss']
})
export class AboutComponent implements OnInit {
  founder: string = "Agnieszka Kozioł";

  constructor() { }

  ngOnInit(): void {
  }

}
