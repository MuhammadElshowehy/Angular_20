import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-option-1',
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './option-1.html',
  styleUrl: './option-1.scss',
})
export class Option1 implements OnInit {
  // temp1 = viewChild<TemplateRef<unknown>>('one');
  @ViewChild('one', { static: true }) temp1!: TemplateRef<unknown>;

  temp2 = viewChild<TemplateRef<unknown>>('two');
  temp3 = viewChild<TemplateRef<unknown>>('three');

  ngOnInit(): void {
    console.log('temp1: ', this.temp1);
  }
}
