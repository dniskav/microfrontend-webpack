import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-component',
  standalone: true, // Indica que este componente no necesita un módulo
  imports: [CommonModule], // Importamos CommonModule porque no hay NgModule
  template: `
    <div>
      <h2>Angular Standalone Component</h2>
      <p>Mensaje recibido: {{ message }}</p>
      <button (click)="sendEvent()">Enviar evento</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush, // Mejora el rendimiento
})
export class AngularComponent implements OnInit {
  message = '';

  ngOnInit() {
    // Crear un Event Bus global si no existe
    // window.eventBus = window.eventBus || document.createElement('div');
    // Escucha eventos personalizados
    // window.eventBus.addEventListener('customEvent', (event: any) => {
    //   this.message = event.detail;
    // });
  }

  sendEvent() {
    // Enviar un evento global para comunicar con React
    // window.eventBus.dispatchEvent(
    //   new CustomEvent('customEvent', { detail: 'Hola desde Angular' }),
    // );
  }
}
