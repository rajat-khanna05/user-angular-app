import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),provideAnimations()] // Correct way to provide HttpClient in standalone components
}).catch(err => console.error(err));
