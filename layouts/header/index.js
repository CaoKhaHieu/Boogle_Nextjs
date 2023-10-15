import React from 'react';

const Header = () => {
  const userCurrent = null;
  const showMenu = false;
  const showUserAction = '';
  const showModalSignIn = false;

  const UserAction = () => (
    <li className="user-avatar">
      <img
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht9-qZYmqErdGMhJVbRf7BfhLRGspNWaFnR8nddu3x7Da7nqh23vsG6VWtG_VE9G9kLU&usqp=CAU'
        }
        alt=""
        className="avatar-image"
      ></img>
      {showUserAction ? (
        <div className="user-action">
          <ul className="action-list">
            <li className="action-item">
              <a
                href={`/wall/me`}
                className="action-link"
              >
                Profile
              </a>
            </li>
            <li className="action-item">
              <a
                href="/user/update"
                className="action-link"
              >
                Update information
              </a>
            </li>
            <li className="action-item">
              <a
                href="/user/changepass"
                className="action-link"
              >
                Update password
              </a>
            </li>
            <li className="action-item">
              <a
                href=""
                className="action-link"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </li>
  );

  return (
    <header>
      <div className="page-header container">
        <a href="/" className="menu-link">
          <h1 className="header-logo">
            <span className="text-primary logo-letter">B</span>oogle
          </h1>
        </a>
        <div className="header-action">
          <nav className="navigation-bar">
            <ul className="group-item menu-list">
              <li className="list-item menu-item">
                <a href="/" className="text-primary menu-link">
                  Home
                </a>
              </li>
              {userCurrent ? (
                <li className="list-item menu-item">
                  <a href="/post/new" className="menu-link">
                    Write
                  </a>
                </li>
              ) : (
                ''
              )}
              {userCurrent ? (
                <UserAction />
              ) : (
                <li className="list-item menu-item">
                  <p className="menu-link">
                    Sign In
                  </p>
                </li>
              )}
              <li className="list-item menu-item menu-mobile">
                <ul
                  className={
                    showMenu
                      ? 'group-item menu-mobile-list active'
                      : 'group-item menu-mobile-list'
                  }
                >
                  <li className="list-item menu-mobile-item hide-menu">
                    <button
                      className="hide-menu-btn"
                    >
                      <i className="fal fa-times"></i>
                    </button>
                  </li>
                  <li className="list-item menu-mobile-item">
                    <a
                      href="/"
                      className="text-primary menu-mobile-link"
                    >
                      Home
                    </a>
                  </li>
                  <li className="list-item menu-mobile-item">
                    <a
                      href="/post/new"
                      className="menu-mobile-link"
                    >
                      Write
                    </a>
                  </li>
                  {!userCurrent ? (
                    <li
                      className="list-item menu-mobile-item"
                    >
                      <a href="" className="menu-mobile-link">
                        Sign In
                      </a>
                    </li>
                  ) : (
                    ''
                  )}
                </ul>
                <a
                  href="/"
                  className="menu-link menu-bar"
                >
                  <i className="fas fa-bars"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* {showModalSignIn ? <AuthenticationModal /> : ''} */}
    </header>
  );
};

export default Header;
