import './App.css';
// import './style/dark.scss';
// import Home from './pages/home/Home';
import List from './pages/list/List';
import Order from './pages/Order/Order';
import CreateOrder from './components/orders/create/Create';
import EditOrder from './components/orders/edit/Edit';
import ShowOrder from './components/orders/show/Show';
// //products
// import Product from './pages/Product/Product';
// import CreateProduct from './components/products/create/Create';
// import EditProduct from './components/products/edit/Edit';
// import ShowProduct from './components/products/show/Show';

// heroes
import Hero from './pages/Hero/Hero';
import CreateHero from './components/heroes/create/Create';
import EditHero from './components/heroes/edit/Edit';
// categories
import Category from './pages/Category/Category';
import CreateCategory from './components/categories/create/Create';
import EditCategory from './components/categories/edit/Edit';
// sub categories
import SubCategory from './pages/SubCategory/SubCategory';
import CreateSubCategory from './components/subCategories/create/Create';
import EditSubCategory from './components/subCategories/edit/Edit';

// users
import User from './pages/User/User';
import CreateUser from './components/users/create/Create';
import EditUser from './components/users/edit/Edit';
import ShowUser from './components/users/show/Show';
// variants
import Variant from './pages/Variant/Variant';
import CreateVariant from './components/variants/create/Create';
import EditVariant from './components/variants/edit/Edit';
// variants optioons

// Settings
import Setting from './pages/Setting/Setting';

import VariantsOptions from './pages/VariantOptions/VariantOptions';
import CreateVariantOptions from './components/variantOptions/create/Create';
import EditVariantOptions from './components/variantOptions/edit/Edit';
// products
import Product from './pages/Product/Product';
import CreateProduct from './components/products/create/Create';
import EditNewProduct from './components/products/edit/Edit';
import ShowProduct from './components/products/show/Show';
// end products
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsModule } from './context/productContext.jsx';
import { UserModule } from './context/userContext.jsx';
import { ForgetPassword } from './pages/ForgetPassword';
import { Products } from './pages/Products.jsx';
// import { productInputs, userInputs, orderInputs } from './FormSrc';
import { LogInPage } from './pages/LoginPage.jsx';
import { SignUpPage } from './pages/SignUpPage';
import Home from './pages/Home.jsx';
import Cart from './components/Cart';
import { Profile } from './pages/Profile';
import { ProductDetail } from './pages/productDetail';
import { ContactModule } from './context/contactContext';
import ContactUs from './pages/ContactUs';
import ShippingCheckOut from './pages/ShippinigCheckOut.jsx';
import PayMent from './pages/PayMent.jsx';
import FilterPage from './pages/FilterPage';
import PrimarySearchAppBar from './components/NewBar';
import { ResetPassword } from './pages/ResetPassword';
import ListContact from './components/contact/contactList/ListContact';

import Subcategory from './pages/Subcategory';
function App() {
  return (
    <>
      <ProductsModule>
        <BrowserRouter>
          <UserModule>
            <ContactModule>
              <PrimarySearchAppBar />

              <Routes>
                <Route path="dashboard">
                  <Route index element={<Category />} />
                  <Route path="products">
                    <Route index element={<Product />} />
                    <Route path=":productId/show" element={<ShowProduct />} />
                    {/* <Route path=":productId/edit" element={<EditProduct />} /> */}
                    <Route
                      path=":productId/edit"
                      element={<EditNewProduct />}
                    />

                    <Route
                      path="create"
                      element={<CreateProduct title="Add New Product" />}
                    />
                  </Route>
                  <Route path="contact">
                    <Route index element={<ListContact />} />
                  </Route>
                  <Route path="orders">
                    <Route index element={<Order />} />
                    <Route path=":orderId/show" element={<ShowOrder />} />
                    <Route path=":orderId/edit" element={<EditOrder />} />
                    <Route
                      path="create"
                      element={<CreateOrder title="Add New Order" />}
                    />
                  </Route>
                  <Route path="users">
                    <Route index element={<User />} />
                    <Route path=":userId" element={<ShowUser />} />
                    <Route
                      path="create"
                      element={<CreateUser title="Add New User" />}
                    />
                    <Route path=":userId/edit" element={<EditUser />} />
                  </Route>
                  <Route path="variants">
                    <Route index element={<Variant />} />
                    <Route path=":variantId/edit" element={<EditVariant />} />
                    <Route
                      path="create"
                      element={<CreateVariant title="Add New variant" />}
                    />
                  </Route>
                  <Route path="Settings">
                    <Route index element={<Setting />} />
                  </Route>
                  <Route path="variantOptions">
                    <Route index element={<VariantsOptions />} />
                    <Route
                      path="variant/:variantId/:variantOptionId/edit"
                      element={<EditVariantOptions />}
                    />
                    <Route
                      path="create"
                      element={
                        <CreateVariantOptions title="Add New variant option" />
                      }
                    />
                  </Route>
                  {/* Heroes */}
                  <Route path="heroes">
                    <Route index element={<Hero />} />
                    <Route path=":heroId/edit" element={<EditHero />} />
                    <Route
                      path="create"
                      element={<CreateHero title="Add New Hero" />}
                    />
                  </Route>
                  {/* Categories */}
                  <Route path="Categories">
                    <Route index element={<Category />} />
                    <Route path=":categoryId/edit" element={<EditCategory />} />
                    <Route path="create" element={<CreateCategory />} />
                  </Route>
                  {/* Sub Categories */}
                  <Route path="subCategories">
                    <Route index element={<SubCategory />} />
                    <Route path="create" element={<CreateSubCategory />} />
                    <Route
                      path=":subCategoryId/category/:categoryId/edit"
                      element={<EditSubCategory />}
                    />
                  </Route>
                </Route>
              </Routes>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/category/:id" element={<Subcategory />} />
                <Route path="products" element={<Products />} />
                <Route path="forgetpassword" element={<ForgetPassword />} />
                <Route path="resetpassword" element={<ResetPassword />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="profile" element={<Profile />} />
                <Route path="cart" element={<Cart />} />
                <Route path="/filter" element={<FilterPage />} />
                <Route path="cart/shipping" element={<ShippingCheckOut />} />
                <Route path="cart/payment" element={<PayMent />} />
                <Route path="login" element={<LogInPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route
                  path="*"
                  element={<div>Error 404 yasta page not found</div>}
                />
              </Routes>
            </ContactModule>
          </UserModule>
        </BrowserRouter>
      </ProductsModule>
    </>
  );
}

export default App;
