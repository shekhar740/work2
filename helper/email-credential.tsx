import * as React from 'react';

interface EmailCredentialProps {
    email : string,
  username: string;
  password : string,
}

export const EmailCredential: React.FC<Readonly<EmailCredentialProps>> = ({
  username,
  password,
  email,

}) => {
    console.log("username",username,"password",password)
    return (
        <div>
        <h1>Welcome to Mobi Store its help you to manage your busiess daily routinee</h1>
        <h4>Your email is {email}</h4>
        <h4>Your password is {password}</h4>
        <h4>You could access using {username}</h4>
      </div>
    )
}
 
;
