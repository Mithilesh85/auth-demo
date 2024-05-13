import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { EyeInvisibleOutline, EyeOutline, LockOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { routes } from './app.routes';

const icons: IconDefinition[] = [UserOutline, LockOutline, EyeOutline, EyeInvisibleOutline];


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    { provide: NZ_ICONS, useValue: icons },
  ]
};
