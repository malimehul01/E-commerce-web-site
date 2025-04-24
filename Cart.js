
    let Cartbtns=document.querySelectorAll('.addtocart');


    Cartbtns.forEach((Cartbtn)=>{
        Cartbtn.addEventListener('click',(event)=>{

            let target=event.target.closest('.product');
        
            let ProductName=target.querySelector('.ProductName').innerHTML;
             let Price=target.querySelector('.price').innerHTML;
             let img=target.querySelector('img').src;
            
      
         let qty=prompt('Enter quantity');


    


            let Product = {
                name: ProductName,
                price: Price,
                quantity: qty,
                img: img,
             
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(Product);
            localStorage.setItem('cart', JSON.stringify(cart)); 
            alert('Item added to cart');
            window.open('cart.html','_self');
        

      
        });
        
        





    })




