import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Comments from './pages/Comments/Comments'
import Users from './pages/Users/Users'
import Orders from './pages/Orders/Orders'
import Discounts from './pages/Discounts/Discounts'



const routes=[
    {path:"/",element:<Home/>},
    {path:"/product",element:<Product/>},
    {path:"/comments",element:<Comments/>},
    {path:"/users",element:<Users/>},
    {path:"/orders",element:<Orders/>},
    {path:"/discounts",element:<Discounts/>},
]

export default routes