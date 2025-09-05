import {
  Component,
  input,
  OnInit,
  numberAttribute,
  booleanAttribute,
  model,
  output,
  signal,
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
  text = signal('1111111111111');
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.towWay.update((value) => value.toUpperCase());
      this.changeName.emit('name changed successfully');
      this.text.set('22222222222222');
    }, 3000);
    this.changeName.emit('name changed successfully');
  }

  transformString(value: string | undefined): string {
    // console.log(value);
    return value?.trim() ?? '';
  }
}
