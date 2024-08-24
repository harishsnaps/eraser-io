"use client";
import { api } from '@/convex/_generated/api';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex, useMutation } from 'convex/react';
import React, { useEffect } from 'react';
import Header from './_components/Header';
import FileList from './_components/FileList';


function Dashboard() {
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, { email: user?.email });
    if (!result?.length) {
      createUser({
        name: user.given_name,
        email: user.email,
        image: user.picture
      }).then((resp) => {
        console.log(resp);
      });
    }
  };

  return (
    <div className='flex flex-col min-h-screen p-8'>
      <Header />
      <main className='flex-grow'>
        <FileList />
      </main>
      {/* Footer Section */}
      <footer className="mt-10 text-center text-gray-600">
        <p>&copy; 2024 HARISH. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
