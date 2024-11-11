import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './app/root'
import { ProductsList } from './parts/products/ProductsList.jsx'
import { ProductPage } from './parts/products/ProductPage.jsx'
import { SellersList } from './parts/sellers/SellersList.jsx'
import { SellerPage } from './parts/sellers/SellerPage.jsx'
import { EditProductForm } from './parts/products/EditProductForm.jsx'

const router = createBrowserRouter([
  { path: '/',
    element: <Root />,
    children: [
      {
        path: '/products',
        element: <ProductsList />,
      },
      {
        path: '/products/:productId',
        element: <ProductPage />,
      },
      {
        path: '/editProduct/:productId',
        element: <EditProductForm />,
      },
      {
        path: '/sellers',
        element: <SellersList />,
      },
      {
        path: '/sellers/:sellerId',
        element: <SellerPage />,
      },
    ],
  }
])

function App() {
	return <RouterProvider router={router} />
}

export default App