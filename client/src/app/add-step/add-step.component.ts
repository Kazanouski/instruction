import { Component, OnInit } from '@angular/core';
import { Steps } from '../steps'
import { ManualService } from '../manual.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.css']
})
export class AddStepComponent implements OnInit {

  step = new Steps()
  manualId: number = 14
  counter: number=1
  steps: number =0
  increment(){
    this.steps++
    this.counter++
  }

  constructor(private manualservice: ManualService, private activatedrouter: ActivatedRoute) { }

  ngOnInit() {
  }
  addStep(){
    this.step.step = this.steps;
    this.manualservice.addStep(this.step, this.manualId).subscribe()
  }

}
