import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.root/app.root.component";
import { LoginComponent } from "./components/login/login.component";
import { PublicComponent } from "./components/public/public.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "public" },
  { path: "public", component: PublicComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
