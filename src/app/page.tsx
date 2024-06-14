"use client"
import { Amplify } from 'aws-amplify';

import { Authenticator ,withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator variation='modal'>
      {({ signOut, user }) => (
        <main className='bg-slate-400'>
          <h1>Hello {user?.username}</h1>
          <button className='flex justify-center' onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
export default withAuthenticator(App)


// | Build Command: npm.cmd run-script build
// | Start Command: npm.cmd run-script start
