class PaginaPrincipal{

    elements = {

        botonBuscar: ()=> cy.get('#search_action'),
        inputBuscar: ()=> cy.get('#search'),
        primerElemento: ()=> cy.get('div.products > ol > li:nth-child(1) > a'),
        quintoElemento: ()=> cy.get('div.products > ol > li:nth-child(5) > a'),
        tercerElemento: ()=> cy.get('div.products > ol > li:nth-child(3) > a'),
        abrirFiltros: ()=> cy.get('.block-subtitle'),
        abrirFiltroPrecios: ()=> cy.get('.price > .filter-title'),
        filtro0_300000: ()=> cy.get('[data-value="0_300000"] > a'),
        abrirFiltrosMemoria: ()=> cy.get('.memory > .filter-title'),
        filtro128gb: ()=> cy.get('[data-value="802"] > a'),
        listaProductosFiltrados: ()=> cy.get('ol > .product-item > a > .product-image-container > .cp-data-container > .product-item-details > .final-price > .product-offer > .special-price'),
        nombrePrimerElemento: ()=> cy.get('div.products>ol > li:nth-child(1) .name'),
    }
    
    clickBuscar(){
        this.elements.botonBuscar().click()
    }

    typeBusqueda(busqueda){
        this.elements.inputBuscar().type(busqueda)
    }

    clickPrimerElemento(){
        this.elements.primerElemento().click()
    }
    
    clickAbrirFiltros(){
        this.elements.abrirFiltros().click()
    }

    clickFiltroPrecios(){
        this.elements.abrirFiltroPrecios().click()
    }
    
    clickFiltro0_300(){
        this.elements.filtro0_300000().click()
    }

    clickFiltroMemoria(){
        this.elements.abrirFiltrosMemoria().click()
    }

    clickFiltro128gb(){
        this.elements.filtro128gb().click()
    }

    clickTercerElemento(){
        this.elements.tercerElemento().click()
    }

    validarURL(URL){
        cy.url().should('eq',URL)
    }
    
    clickquintoElemento(){
        this.elements.quintoElemento().click()
    }

}

module.exports = new PaginaPrincipal();