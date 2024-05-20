import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzLayoutModule, NzGridModule, NzFlexModule, CommonModule, NzAvatarModule, NzMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'auth-demo';
  isDashboardPage: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((data: any) => {
      if (data && data instanceof RoutesRecognized) {
        this.isDashboardPage = data?.state?.root?.firstChild?.data['isDashboardPage'];
      }
    });
  }

}
