import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'usuarios', pathMatch: 'full',
  },
  {
    path: 'usuarios', loadChildren: () => import('./core/usuarios/usuarios.module').then((m) => m.UsuariosModule)
  },
  {
    path: 'clientes', loadChildren: () => import('./core/clientes/clientes.module').then((m) => m.ClientesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
