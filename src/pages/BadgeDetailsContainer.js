import React from 'react'

import PageLoading from '../components/PageLoading'
import PageError from './PageError'
import api from '../api'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        isOpenModal: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.idBadge
            )
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleModal = e => {
        this.setState({ isOpenModal: !this.state.isOpenModal })
    }

    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null })

        try {
            await api.badges.remove(
                this.props.match.params.idBadge
            )
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <BadgeDetails
                badge={this.state.data}
                onToggleModal={this.handleModal}
                isOpenModal={this.state.isOpenModal}
                DeleteBadge={this.handleDeleteBadge}></BadgeDetails>
        )
    }
}

export default BadgeDetailsContainer