import {
  Component,
  input,
  OnInit,
  numberAttribute,
  booleanAttribute,
  model,
  output,
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
  changeName = output<string>();
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.towWay.update((value) => value.toUpperCase());
      this.changeName.emit('name changed successfully');
    }, 3000);
    this.changeName.emit('name changed successfully');
  }

  transformString(value: string | undefined): string {
    console.log(value);
    return value?.trim() ?? '';
  }
}
