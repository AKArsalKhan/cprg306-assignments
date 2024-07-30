"use client"; // Ensure this directive is at the top

import React, { useEffect } from 'react';
import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
      router.push('/week-8/shopping-list'); // Redirect to shopping list after login
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push('/week-8/page'); // Redirect to the landing page after logout
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/week-8/shopping-list'); // Redirect if already logged in
    }
  }, [user, router]);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Shopping List App</h1>
      {!user ? (
        <button onClick={handleSignIn} style={{ fontSize: '1.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Sign in with GitHub</button>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut} style={{ fontSize: '1.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
