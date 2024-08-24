import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { AboutUsComponent } from './Components/AboutUs/about-us.component';
import { VisionComponent } from './Components/Vision/vision.component';
import { GoalsComponent } from './Components/Goals/goals.component';
import { ContactUsComponent } from './Components/ContactUs/contact-us.component';
import { FoundersComponent } from './Components/Founders/founders.component';
import { BoardmembersComponent } from './Components/BoardMembers/boardmembers.component';
import { PolicyComponent } from './Components/Policy/policy.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'AboutUs/AboutGhaya',component:AboutUsComponent},
  {path:'AboutUs/OurVision',component:VisionComponent},
  {path:'AboutUs/OurGoals',component:GoalsComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'FoundersAndBoardMembers',component:FoundersComponent},
  {path:'BoardMembers',component:BoardmembersComponent},
  {path:'Policy',component:PolicyComponent},
  {path:'**',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
