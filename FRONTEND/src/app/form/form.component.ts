import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  nom : string = "toto";
  valid : boolean = true;

  click(){
    this.valid = false;
    console.log("clic déclenché");
  }

  ngOnInit(): void {
  }

}
