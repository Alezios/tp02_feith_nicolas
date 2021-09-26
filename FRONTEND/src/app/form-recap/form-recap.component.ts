import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form-recap',
  templateUrl: './form-recap.component.html',
  styleUrls: ['./form-recap.component.css']
})
export class FormRecapComponent implements OnInit {

  constructor() { }

  @Input() user: User = new User();

  ngOnInit(): void {
  }

}
