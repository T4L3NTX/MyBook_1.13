describe('Pruebas E2E con Ionic y JSON-Server', () => {
  it('Carga la página principal de Ionic', () => {
    // Define el tamaño de la pantalla para dispositivos móviles
    cy.viewport(412, 915);

    // Visita la URL principal de tu aplicación
    cy.visit('http://localhost:8100/');
  });

  it('Realiza login exitoso', () => {
    // Ajusta el tamaño de la pantalla
    cy.viewport(412, 915);

    // Visita la página de login
    cy.visit('http://localhost:8100/login');

    // Interactúa con el campo de "Nombre de Usuario"
    cy.get('ion-textarea[formControlName="usuario"] textarea', { timeout: 30000 })
      .should('exist')
      .type('admin@example.com', { force: true });

    // Interactúa con el campo de "Contraseña"
    cy.get('ion-input[formControlName="contrasenna"] input', { timeout: 30000 })
      .should('exist')
      .type('qweasdzxc', { force: true });

    // Haz clic en el botón "Ingresar"
    cy.get('ion-button#btn-ingresar', { timeout: 10000 })
      .should('be.visible')
      .click();
  });

  it('Muestra error con credenciales incorrectas', () => {
    cy.viewport(412, 915);
    cy.visit('http://localhost:8100/login');

    // Ingresa credenciales incorrectas
    cy.get('ion-textarea[formControlName="usuario"] textarea', { timeout: 30000 })
      .should('exist')
      .type('usuario_incorrecto@example.com', { force: true });

    cy.get('ion-input[formControlName="contrasenna"] input', { timeout: 30000 })
      .should('exist')
      .type('claveincorrecta', { force: true });

    cy.get('ion-button#btn-ingresar', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Verifica que aparezca un mensaje de error
    cy.contains('Credenciales incorrectas', { timeout: 10000 }).should('be.visible');
  });

  it('Verifica que los botones "Registrar" y "Recuperar contraseña" existan', () => {
    cy.viewport(412, 915);
    cy.visit('http://localhost:8100/login');

    // Verifica que el botón "Registrar" exista
    cy.get('ion-button.btn-registrar', { timeout: 10000 })
      .should('exist')
      .and('be.visible');

    // Verifica que el botón "Recuperar contraseña" exista
    cy.get('ion-button.btn-recuperar', { timeout: 10000 })
      .should('exist')
      .and('be.visible');
  });
});
