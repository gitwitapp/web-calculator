
import Head from 'next/head';
import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator</title>
      </Head>
      <main>
        <Calculator />
      </main>
    </>
  );
}

