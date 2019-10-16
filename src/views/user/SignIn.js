import React from 'react'
import PageTitle from 'components/PageTitle'

function SignIn(props) {
    return (
        <div>
            <PageTitle title="Sign In" />
            <section style={styles.container}>
                <form>
                    <label>User:</label><br/>
                    <input type="text" name="username" value="username" /><br/>
                    <label>Password:</label><br/>
                    <input type="password" name="password" value="password" /><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </div>
    )
}

export default SignIn

const styles = {
    container: {
        padding: '12px',
        textAlign: 'center'
    }
}
