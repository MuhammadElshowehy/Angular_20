import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-option-2',
  imports: [NgTemplateOutlet],
  templateUrl: './option-2.html',
  styleUrl: './option-2.scss',
})
export class Option2 {
  isAdmin = input(false);
  adminTemplate = viewChild('admin', { read: TemplateRef });
  basicTemplate = viewChild('basic', { read: TemplateRef });
  profileTemplate = computed(() =>
    this.isAdmin() ? this.adminTemplate() : this.basicTemplate()
  );
}
