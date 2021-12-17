import React from 'react'

const Dashboard = ({ handleLogout }) => {
    return (
        <div>
            <h1>you are in :)</h1>
            <button onClick={handleLogout}> Log out </button>
        </div>
    )
}

export default Dashboard
