export function purchasesGrouped(purchases){
    const comprasAgrupadas = {};

    // Iterar sobre los resultados de la consulta
    purchases.forEach(resultado => {
        const compraId = resultado.purchase_id;
    
        // Si la compra no existe en el objeto de compras agrupadas, crear un nuevo objeto para ella
        if (!comprasAgrupadas[compraId]) {
            comprasAgrupadas[compraId] = {
                purchase_id: resultado.purchase_id,
                purchase_created: formatDate(resultado.purchase_created),
                purchase_total_amount: resultado.purchase_total_amount,
                productos: [] // Array para almacenar los productos relacionados a esta compra
            };
        }
    
        // Agregar el producto actual al array de productos de la compra correspondiente
        comprasAgrupadas[compraId].productos.push({
            product_id: resultado.product_id,
            product_title: resultado.product_title,
            product_image: resultado.product_image,
            product_price_with_discount: resultado.product_price_with_discount,
            purchase_product_quantity: resultado.purchase_product_quantity
        });
    });
    return Object.values(comprasAgrupadas);
}


function formatDate(fechaString){
    const fecha = new Date(fechaString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    return fecha.toLocaleDateString('es-ES', options);
}