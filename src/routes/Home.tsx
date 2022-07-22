import React from 'react';
import { LoginCard } from '../components/LoginCard';
import { UserCard } from '../components/UserCard';

function Home() {
  return (
    <main className='ml-20 flex flex-wrap justify-center p-4 max-w-full'>
      <UserCard />
      <LoginCard />
    </main>
  );
}

export { Home }