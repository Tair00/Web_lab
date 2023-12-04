import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Page/Home';
import Blogs from './Page/Blogs';
import Contact from './Page/Contact';
import NoPage from './Page/NoPage';
import ErrorPage from './Page/ErrorPage';
import Products from './Page/Products';
import Phone from './Page/Phone';
import Tablet from './Page/Tablet';
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products/*" element={<Products />}>
                        <Route path="phones" element={<Phone />} />
                        <Route path="tablets" element={<Tablet />} />
                    </Route>
                    <Route path="/error" element={<ErrorPage errorCode={404} />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;


