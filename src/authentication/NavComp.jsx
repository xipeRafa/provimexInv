import { useContext } from 'react';
import logoImg from '../assets/provimex.webp';

import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

import { AuthContext } from '../context/AuthContext';

export const NavComp = () => {
  const { logout, stateLogout } = useContext(AuthContext);

  return (
    <nav className="container navbar navbar-light">
      <div className="w-100 d-flex justify-content-center">
        <div className="navbar-brand mb-4">
            <img src={logoImg} alt="logo" height="40" />
            {/*<h3 style={{fontStyle:'oblique',fontFamily: 'serif',}}>PROVIMEX</h3>*/}
        </div>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <div className="mb-4">
          {localStorage.getItem('userEmailLS') !== null ? (
            <>
              <div className="btn btn-secondary mx-2 disabled">
                <b>{localStorage.getItem('userEmailLS')}</b>
              </div>
              <div
                onClick={() => {if (window.confirm(`Quieres Salir?`)) {
                                            logout()
                                }
                        }}
                className="btn btn-outline-secondary mx-2"
              >
                SALIR
              </div>
            </>
          ) : (
            <>
              <LoginComp />
              <RegisterComp />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
