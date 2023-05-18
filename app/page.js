import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import MainContent from './components/mainContent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="block">
      <Navbar />
      <Hero />
      <MainContent />
    </main>
  );
}
