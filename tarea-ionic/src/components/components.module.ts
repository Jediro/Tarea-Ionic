import { NgModule } from '@angular/core';
import { AlertRenewComponent } from './alert-renew/alert-renew';
import { LoginAlertComponent } from './login-alert/login-alert';
@NgModule({
	declarations: [AlertRenewComponent,
    LoginAlertComponent],
	imports: [],
	exports: [AlertRenewComponent,
    LoginAlertComponent]
})
export class ComponentsModule {}
