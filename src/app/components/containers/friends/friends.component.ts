import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  standalone: true
})
export class FriendsComponent  implements OnInit {
  @Input() name: string = '';
  constructor() { }

  ngOnInit() {}

}
