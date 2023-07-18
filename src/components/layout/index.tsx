import Header from '@/components/header';
import Footer from '@/components/footer';
import { ReactNode } from 'react';
import { Divider, Toolbar } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Toolbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
