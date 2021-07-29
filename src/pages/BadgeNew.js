import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'
import md5 from 'md5';

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
        }
    }

    handleChange = e => {
        if (e.target.name === "email") {
            this.setState({
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value,
                    avatarUrl: `https://www.gravatar.com/avatar/${md5(e.target.value)}?s=200&d=identicon`,
                }
            })
        } else {
            this.setState({
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value,
                }
            })
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            this.props.history.push('/badges')
        } catch (err) {
            this.setState({ loading: false, error: err })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading></PageLoading>
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'twitter'}
                                email={this.state.form.email || 'EMAIL'}
                            ></Badge>
                        </div>

                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew