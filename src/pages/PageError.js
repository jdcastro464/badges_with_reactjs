import React, { Component } from 'react'

import './styles/PageError.css'

class PageError extends Component {
    render() {
        return <div className="PageError">❌{this.props.error}😱</div>
    }
}

export default PageError