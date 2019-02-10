//Rutas 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from 'src/app/video/video.component';
//import { AppComponent } from 'src/app/app.component';
import { InfoComponent } from 'src/app/info/info.component';
import { InicioComponent } from 'src/app/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'videos', component: VideoComponent },
  { path: 'info', component: InfoComponent },
  { path: 'inicio', component: InicioComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
