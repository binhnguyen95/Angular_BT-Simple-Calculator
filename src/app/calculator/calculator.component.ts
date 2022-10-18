import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  num1 = 0;
  num2 = 0;
  num3 = 0;

  add() {
    this.num3 = this.num1 + this.num2;
  }

  minus() {
    this.num3 = this.num1 - this.num2;
  }

  multi() {
    this.num3 = this.num1 * this.num2;
  }

  divide() {
    this.num3 = this.num1 / this.num2;
  }

}
