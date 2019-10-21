import React from 'react'
import { useHistory } from 'react-router-dom'

function UserStatus({ data: { user } }) {
    let history = useHistory()

    let signOut = () => {
        user.isAuthenticated = false
        history.push("/")
    }

    return user.isAuthenticated ? (
        <section id="user-status">
            <p>
                Logged in as { user.name }
            </p>
            <button onClick={() => { signOut() } }>Sign Out</button>
        </section>
    ) : (
        <p>You are not logged in</p>
    )
}

export default UserStatus
