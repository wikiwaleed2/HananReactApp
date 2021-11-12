import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Google from '@/_assets/images/google.png';

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '1029775309973-gfl61vqsdvnki7fc5l4261einf0rd67n.apps.googleusercontent.com';

function LoginGoogle({mblStyle}) {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div className={ `google-btn ${mblStyle}` } onClick={signIn}>
            <span>
                <img src={Google} />
            </span>
            <p>Log In with Google</p>
        </div>

    
  );
}

export {LoginGoogle};