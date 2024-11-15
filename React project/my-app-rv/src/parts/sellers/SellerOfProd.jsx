import { useSelector } from 'react-redux'

export const SellerOfProd = ({ sellerId }) => { 
	const seller = useSelector((state) => 
		state.sellers.find((seller) => seller.id === sellerId) 
	)

    return <span>by {seller ? seller.name : 'unknown'}</span> 
}