import React from 'react';
import { UserCard } from '../components/UserCard';

function Home() {
  return (
    <main className='ml-20 flex flex-wrap justify-center p-4 max-w-full'>
      <UserCard />
    </main>
  );
}

export { Home }