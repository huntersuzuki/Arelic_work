
'use client';
import Link from 'next/link';

export default function Home() {
  return (
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Welcome to Next.js Animations</h1>
        <Link href="/animations">
          <p style={{ color: 'blue', textDecoration: 'underline' }}>See Animations</p>
        </Link>
      </main>
  );
}
