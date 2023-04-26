import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MainLayout from './MainLayout';
import SearchBar from '../components/SearchBar/SearchBar';
import Main from '../components/Main/UpperSection/Ads/InfoBox';

interface RootLayoutProps  {
  children: React.ReactNode;
}

const RootLayout:React.FC<RootLayoutProps> = ({children}) => {
    
  return (
    <>
    <Navbar/>
    <MainLayout>
      <SearchBar/>
      <main>{children}</main>
    </MainLayout>
    <Footer/>
    </>
)
}
export default RootLayout;