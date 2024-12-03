class PaginaProducto{

    elements = {

        calculadoraCuotas: ()=> cy.contains('a', 'Calcular cuotas'),
        menuBanco: ()=> cy.get('#bankSelector').click(),
        seleccionarTercerBanco: ()=> cy.get('#ui-id-2 > :nth-child(3)'),
        menuTarjeta: ()=> cy.get('#cardSelector'),
        seleccionarVisa: ()=> cy.get('[data-card="Visa"]'),
        botonCalcular: ()=> cy.get('#calculate_btn > .btn-primary'),
        listaFormasdePago: ()=> cy.get('td >.blue'),
        seleccionarCredicoop: ()=> cy.get('#ui-id-2 > :nth-child(19)'),
        botonAñadirCarrito: ()=> cy.get('#swatch_attribute_card'),

    }
    
    clickCalculoCuotas(){
        this.elements.calculadoraCuotas().click()
    }

    clickMenuBanco(){
        this.elements.menuBanco().click()
    }

    seleccionarTercerbanco(){
        this.elements.seleccionarTercerBanco().click({force: true})
    }

    clickMenuTarjeta(){
        this.elements.menuTarjeta().click()
    }

    seleccionarVisa(){
        this.elements.seleccionarVisa().click()
    }

    clickBotonCalcular(){
        this.elements.botonCalcular().click()
    }

    seleccionarCredicoop(){
        this.elements.seleccionarCredicoop().click()
    }

    clickAñadirCarrito(){
        this.elements.botonAñadirCarrito().click()
    }

    
}

module.exports = new PaginaProducto();