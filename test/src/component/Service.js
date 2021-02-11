import React from 'react'

class Service extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        debugger
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'admin', password: 'password' })
        };
        fetch('http://localhost:8080/home', requestOptions).then((resp) => {
            resp.json().then((result) => {
                console.warn(result)
            })
        })
    }

    render() {
        return (
            <h2>Hello Service</h2>
        )
    }
}
export default Service