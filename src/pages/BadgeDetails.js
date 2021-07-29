import React from 'react'

import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function useIncreaseCount(max) {
    const [count, setCount] = React.useState(0)

    if (count > max) {
        setCount(0)
    }

    return [count, setCount]
}

function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(4)
    const badge = props.badge

    return (
        <React.Fragment>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la Conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={() => {
                                    setCount(count + 1)
                                }} className="btn btn-primary mb-4">
                                    Increase Count: {count}
                                </button>
                            </div>

                            <div>
                                <Link
                                    className="btn btn-primary mb-4"
                                    to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>

                            <div>
                                <button
                                    className="btn btn-danger"
                                    onClick={props.onToggleModal}>
                                    Delete
                                </button>

                                <DeleteBadgeModal
                                    isOpen={props.isOpenModal}
                                    toggleModal={props.onToggleModal}
                                    onDeleteBadge={props.DeleteBadge}></DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BadgeDetails