class paginaCarrito{

    elements = {

        botonSeguirComprando: ()=> cy.get('.btn-secondary'),
        maximoDeProductos: ()=> cy.get('.content > .info'),
        productosCarrito: ()=> cy.get('.cart.item')

    }

    clickBtnSeguirComprando(){
        this.elements.botonSeguirComprando().click();
    }
}

module.exports = new paginaCarrito();