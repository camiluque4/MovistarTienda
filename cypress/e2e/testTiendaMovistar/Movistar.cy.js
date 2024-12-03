import pagina_principal from "../../support/pages/pagina_principal";
import pagina_producto from "../../support/pages/pagina_producto";
import pagina_carrito from "../../support/pages/pagina_carrito";

describe('Tienda Movistar',function(){
    beforeEach(function(){

        cy.visit('https://tiendaonline.movistar.com.ar/')
    })

    it('CP001',function(){
        pagina_principal.validarURL('https://tiendaonline.movistar.com.ar/')
        pagina_principal.clickBuscar();
        pagina_principal.typeBusqueda('A14');
        pagina_principal.clickBuscar();
        cy.wait(6000)
        pagina_principal.elements.nombrePrimerElemento().should('include.text', 'A14');
        pagina_principal.clickPrimerElemento();
        pagina_producto.clickCalculoCuotas();
        pagina_producto.elements.menuBanco().click({force: true});
        pagina_producto.seleccionarTercerbanco();
        pagina_producto.clickMenuTarjeta();
        pagina_producto.seleccionarVisa();
        pagina_producto.clickBotonCalcular();
        pagina_producto.elements.listaFormasdePago().should('include.text', '3 cuotas sin interés');
    })

    it('CP002',function(){
        pagina_principal.validarURL('https://tiendaonline.movistar.com.ar/')
        pagina_principal.clickAbrirFiltros();
        pagina_principal.clickFiltroPrecios();
        pagina_principal.clickFiltro0_300();
        pagina_principal.clickAbrirFiltros();
        pagina_principal.clickFiltroMemoria();
        pagina_principal.clickFiltro128gb();
        pagina_principal.elements.listaProductosFiltrados().then((lista) => {
            cy.log('cantidad de celulares mostrados: ' + lista.length);
            const listaConst = lista.length;
            cy.get('.total-products > p').then((Productos) => {
                cy.log("resultado de la busqueda: " + Productos.text());
                const cantProductos = Number(Productos.text().substring(10, 12));
                expect(listaConst).to.equal(cantProductos);
            });
        })
    })    

    it('CP003',function(){
        pagina_principal.validarURL('https://tiendaonline.movistar.com.ar/')
        pagina_principal.clickTercerElemento();
        pagina_producto.clickCalculoCuotas();
        pagina_producto.clickMenuBanco()
        pagina_producto.elements.seleccionarCredicoop().click({force: true})
        pagina_producto.clickMenuTarjeta()
        pagina_producto.seleccionarVisa();
        pagina_producto.clickBotonCalcular();
        pagina_producto.elements.listaFormasdePago().should('not.contain','60 cuotas')
    })

    it('CP004', function(){
        pagina_principal.validarURL('https://tiendaonline.movistar.com.ar/')
        cy.wait(2000)
        pagina_principal.elements.primerElemento().click()
        pagina_producto.clickAñadirCarrito();
        cy.wait(2000)
        pagina_carrito.clickBtnSeguirComprando();
        cy.wait(2000)
        pagina_principal.elements.tercerElemento().click()
        pagina_producto.clickAñadirCarrito();
        cy.wait(2000)
        pagina_carrito.clickBtnSeguirComprando();
        cy.wait(2000)
        pagina_principal.elements.quintoElemento().click()
        pagina_producto.clickAñadirCarrito();
        pagina_carrito.elements.productosCarrito().then((lista =>{
            cy.log('celulares en el carrito: ' + lista.length);
            const listaCarrito = lista.length;
            expect(listaCarrito).to.equal(3);
        }))
        pagina_carrito.elements.maximoDeProductos().should('include.text', 'Alcanzaste el máximo de 3 productos en tu carrito.');
               
    });
})