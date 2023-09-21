
class Products{
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
    }
}

const products = new Products();
products.render();