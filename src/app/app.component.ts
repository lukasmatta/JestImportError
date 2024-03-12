import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import Quill from "quill";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JestPresetNative';

  constructor() {
    console.log(Quill.register);
  }
}
