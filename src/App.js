import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Todo from "./Todo";
import MyCard from "./MyCard";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <Todo></Todo>
      <MyCard></MyCard>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
