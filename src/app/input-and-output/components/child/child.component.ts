import {
  Component,
  input,
  OnInit,
  numberAttribute,
  booleanAttribute,
  model,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
})
export class ChildComponent implements OnInit {
  inSource = input.required({ transform: this.transformString });
  towWay = model<string>('');
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.towWay.update((value) => value.toUpperCase());
    }, 3000);
  }

  transformString(value: string | undefined): string {
    console.log(value);
    return value?.trim() ?? '';
  }
}
