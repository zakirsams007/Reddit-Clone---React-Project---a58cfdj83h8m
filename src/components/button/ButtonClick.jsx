import React ,{useState} from 'react'
import './Button.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useAuth0 } from "@auth0/auth0-react";

function ButtonClick() {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (     
    <div className='login'>
    {
        isAuthenticated ? (
            <>
                <button className='btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
                <Tippy content={<div>
                    {user.name} <br />
                    {user.email}
                </div>}>
                    <div className="prof">
                        <img src={user.picture} width={50} />
                    </div>
                </Tippy>
            </>
        ) : (
            <>
                <button className='btn' onClick={() => loginWithRedirect()}>
                    Login
                </button>
                <Tippy content={<p>No User Found</p>}>
                    <div className="prof">
                    </div>
                </Tippy>
            </>
        )
    }
</div>
  )
}

export default ButtonClick;