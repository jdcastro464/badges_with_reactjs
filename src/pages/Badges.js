import React from 'react'

import { Link } from 'react-router-dom'

import api from '../api'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgeList from '../components/BadgeList'
import PageLoading from '../components/PageLoading'
import PageError from './PageError'
import MiniLoader from '../components/MiniLoader'

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.list()
            this.setState({ loading: false, data: data.reverse() })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading && !this.state.data) {
            return <PageLoading></PageLoading>
        }

        if (this.state.error) {
            return <PageError error={this.state.error.message}></PageError>
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Bagde
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgeList badges={this.state.data}></BadgeList>

                            {this.state.loading && <MiniLoader></MiniLoader>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges