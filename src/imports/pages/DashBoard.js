import React, { Component } from 'react'

import Loader from '@imports/components/Loader';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const data = {
            size: 200
        };
        return <Loader {...data} />
    }
}

export default DashBoard;