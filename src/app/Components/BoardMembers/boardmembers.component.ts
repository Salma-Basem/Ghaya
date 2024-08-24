import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-boardmembers',
  templateUrl: './boardmembers.component.html',
  styleUrls: ['./boardmembers.component.css']
})
export class BoardmembersComponent {
  
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }

  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage);
  }

  showMoreMember1 = false;
  showMoreMember2 = false;
  showMoreMember3 = false;
  showMoreMember4 = false;

  toggleMember1Visibility(): void {
    this.showMoreMember1 = !this.showMoreMember1;
  }

  toggleMember2Visibility(): void {
    this.showMoreMember2 = !this.showMoreMember2;
  }
  toggleMember3Visibility(): void {
    this.showMoreMember3 = !this.showMoreMember3;
  }

  toggleViceMember4Visibility(): void {
    this.showMoreMember4 = !this.showMoreMember4;
  }
}
