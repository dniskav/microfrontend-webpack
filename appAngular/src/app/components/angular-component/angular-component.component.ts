import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angular-component',
  standalone: true,
  template: `
    <h2>Angular Standalone Component</h2>
    <p>Mensaje recibido: {{ message }}</p>
    <button (click)="sendEvent()">Enviar evento</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent implements OnInit {
  message = '';

  async ngOnInit() {
    // 📌 Importamos dinámicamente el Event Bus
    const { default: eventBus } = await import('eventBus/EventBus');

    // 📌 Escuchar eventos del Event Bus
    eventBus.on('customEvent', (event: any) => {
      console.log('Evento recibido en Angular:', event);
      this.message = event.detail;
    });
  }

  async sendEvent() {
    const { default: eventBus } = await import('eventBus/EventBus');

    // 📌 Emitir un evento global
    eventBus.emit('customEvent', { detail: 'Hola desde Angular' });
  }
}
