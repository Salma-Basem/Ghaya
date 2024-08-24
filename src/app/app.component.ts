import { Component ,ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './Services/language.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  language: string = 'en';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
      this.updateDirection(language); // Update direction when language changes
    });
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage); // Change language and update direction
  }

  private updateDirection(language: string) {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
  }
  }

