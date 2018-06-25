import React, { Component } from 'react'
 
import { FacebookShareButton} from 'react-share';

class DataExample extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <FacebookShareButton
             url={'google.com'} >
             Hello
             </FacebookShareButton>
    }
}

export default DataExample;