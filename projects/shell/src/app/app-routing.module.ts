import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [

//   {
//     path: 'client-a',
//      loadChildren: () => import('appone/Module').then(m => m.AppModule)
//  },
 
 {
  path: 'flights',
   loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
},
{
  path: 'testflights',
   loadChildren: () => import('mfe1/ModuleTwo').then(m => m.TestflightModule)
},
{
  path: 'sampletwo',
   loadChildren: () => import('sampleTwo/samplemodule').then(m => m.SubcomponentModule)
},
 


 {
  path: 'flights',
  // loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  loadChildren: () =>
    loadRemoteModule({
      // remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Module'
    })
    .then(m => m.FlightsModule)

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
