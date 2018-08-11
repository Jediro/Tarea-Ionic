import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user : string = this.user
  pass : string = this.pass

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl : ToastController) {

  }

  alertRenew() {
    this.showPrompt()
  }

  logInAlert() {
    if (this.user != "" && this.pass != "" && this.user != null && this.pass != null) {
      this.showAlert("Lo sentimos", "Nuestros servidores están ocupados. Inténtalo más tarde.")      
    } 
  }

  buttonCondition() {
    if (this.user != "" && this.pass != "" && this.user != null && this.pass != null) {
      return false;     
    } else {
      return true;
    }
  }

  showAlert(title, subTitle) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: '¿Olvidaste tu contraseña?',
      message: "Ingresa tu correo y te enviaremos un enlace para que generes una nueva contraseña.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            if (data.email != ""){
              this.showAlert("Correo enviado", "Se ha enviado un correo de restauración de contraseña a la dirección indicada.")
            } else {
              this.presentToast("Por favor escribe un correo electrónico.")
              return false;
            }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "Ok"    
    });    
    toast.present();
  }


}
