import { AnalysisComponent } from './analysis/analysis.component';
import { ForoumComponent } from './foroum/foroum.component';
import { DroneareaComponent } from './dronearea/dronearea.component';
import { CalLengthComponent } from './cal-length/cal-length.component';
import { ClassificationComponent } from './classification/classification.component';
import { ExploredataComponent } from './exploredata/exploredata.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'ExploreData',component:ExploredataComponent},
  {path:'classification',component:ClassificationComponent,},
  {path:'calculate',component:CalLengthComponent},
  {path:'arial-detection',component:DroneareaComponent},
  {path:'forum',component:ForoumComponent},
  {path:'analysis-report',component:AnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
export const RoutingModule = [ExploredataComponent,ClassificationComponent,CalLengthComponent,DroneareaComponent,ForoumComponent,AnalysisComponent]