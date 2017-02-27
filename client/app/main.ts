/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { HomeModule } from './components/home/home.module';
import { SharedModule } from './components/shared/shared.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
