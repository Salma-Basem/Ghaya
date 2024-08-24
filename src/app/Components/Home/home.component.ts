import { Component, HostBinding, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  constructor(
    private languageService: LanguageService,
    private sanitizer: DomSanitizer
  ) { }

  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }



  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }

  showScrollToTopButton = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.showScrollToTopButton = window.scrollY > 300; // Adjust as needed
  }

  getTitle(): SafeHtml {
    let titleHtml: string;
    if (this.language === 'ar') {
      titleHtml = 'مؤسسة<span class="fw-bolder">غايا</span> للابداع';
    } else {
      titleHtml = '<span class="fw-semibold ">Ghaya</span> Foundation for Creativity';
    }
    return this.sanitizer.bypassSecurityTrustHtml(titleHtml);
  }
}
