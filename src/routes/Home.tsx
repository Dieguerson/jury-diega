import React, { useContext } from 'react';
import { LoginCard } from '../components/LoginCard';
import { UserCard } from '../components/UserCard';
import { GitContext } from '../context/gitContext';
import { Context } from '../interfaces/GitHub';

function Home() {
  const { logStatus } = useContext(GitContext) as Context

  return (
    <main className='ml-20 flex flex-wrap justify-center p-4 max-w-full'>
      {!!logStatus && <UserCard />}
      {!logStatus && <LoginCard />}
    </main>
  );
}

export { Home }