import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from 'config/theme'

function AppHeader({ user }) {
    return (
        <header style={styles.container}>
            <MainTitle title="CMIS" />
            <LoginNav />
            <LogInStatus user={user} />
        </header>
    )
}

export default AppHeader

function MainTitle(props) {
    return (
        <div style={styles.titleContainer}>
            <h2 style={styles.title}>{props.title}</h2>
        </div>
    )
}

function LogInStatus({ user }) {
    let history = useHistory()

    let signOut = () => {
        user.isAuthenticated = false
        history.push("/")
    }

    return (
        <div style={styles.logInStatusContainer}>
            {
                user.isAuthenticated ? (
                    <div>
                        <p style={styles.loginNavText}>Logged in as { user.name }</p>
                        <button style={styles.signOutButton} onClick={() => { signOut() } }>Sign Out</button>
                    </div>
                ) : (
                    <p style={styles.loginNavText}>You are not logged in</p>
                )
            }
        </div>
    )
}

function LoginNav() {
    return (
        <div style={styles.loginNavContainer}>
            <Link to={process.env.PUBLIC_URL + '/signin'}>
                <FontAwesomeIcon style={styles.userIcon} icon="user" className="fa-fw" />
            </Link>
        </div>
    )
}

const styles = {
    container: {
        padding: '8px',
        width: '100%',
        overflow: 'auto',
        background: theme.primaryGreen,
        color: '#FFF'
    },
    titleContainer: {
        width: '100px',
        float: 'left'
    },
    title: {
        marginTop: '0px',
        marginBottom: '0px'
    },
    logInStatusContainer: {
        width: '400px',
        float: 'left'
    },
    loginNavContainer: {
        width: '25px',
        float: 'right'
    },
    loginNavText: {
        margin: '4px 12px',
        display: 'inline-block'
    },
    userIcon: {
        margin: '8px 0'
    },
    signOutButton: {
        background: theme.accentPurple2,
        margin: '0',
        display: 'inline-block'
    }
}
