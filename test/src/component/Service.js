import React from 'react'

class Service extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/home').then((resp) => {
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