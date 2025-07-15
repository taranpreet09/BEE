function buyProduct(product_Name,cb){
    setTimeout(() => {
        console.log("all I/O operations are completed and order details are written in user data ");
        cb();
    }, 0);
}

buyProduct("product_Name", () => {
    console.log("order details are written in user data");
});

let product=[{

}]

{
    name:"Iphone 16"
    amount=10000;
    quantity:0;
}

function buyProduct(product_Name, cb){
    let isProduct=product.filter((p)=> p.name === product_Name);
    if (!isProduct){
        cb("Product not found", null);
    }
    cb(null, isProduct.amount);
}

buyProduct("Iphone 16", function(){
    if 
    console.log("product is purchased");
})