var out = ''
for (var key in shirts){
    out+=''+shirts[key].name+'<br>'
    out+=''+shirts[key].description+'<br>'
    out+=''+shirts[key].price+'<br>'
    out+='<img src="'+shirts[key].default.front+'">'
    out+='<hr>'
}
document.getElementById('out').innerHTML=out

/*class Products{
    render(){
        let catalog=``;
        shirts.forEach((element)=>{
            catalog+=`
            <li>
            <span>${name}</span>
            <img src="${colors}"/>
            <span>${price}</span>
            <span>${description}</span>
            <button>Quick View</button>
            <button>See Page</button>
            </li>
            `;
        });
        const html=`
        <ul>
        ${catalog}
        </ul>
        `;
        ROOT_PRODUCTS.innerHTML=html;
    }
}

const products = new Products();
products.render();*/