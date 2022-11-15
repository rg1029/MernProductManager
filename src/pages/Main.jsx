import React from 'react'
import Form from '../components/Form'
import Dashboard from '../components/Dashboard'

const Main = () => {
    return (
        <fieldset>
        <legend>Main.jsx</legend>
        <Form changeRefresh={changeRefresh} />
        <Dashboard refresh={refresh} />
      </fieldset>
    )
}

export default Main