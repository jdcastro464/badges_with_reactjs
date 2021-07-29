import React from 'react'
import { Link } from 'react-router-dom'

function useCustomFilterBadges(badges) {
    const [query, setQuery] = React.useState('')
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toUpperCase().includes(query.toUpperCase())
        })

        setFilteredBadges(result)
    }, [badges, query])

    return { query, setQuery, filteredBadges }
}

function BadgeList(props) {
    const badges = props.badges
    const { query, setQuery, filteredBadges } = useCustomFilterBadges(badges)

    if (!filteredBadges.length) {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }} />
                </div>

                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                </Link>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }} />
            </div>

            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link
                                className="text-reset text-decoration-none"
                                to={`badges/${badge.id}`}>
                                <div className="row bg-light my-3 shadow">
                                    <div className="col-2 px-1 py-1 align-self-center">
                                        <img src={badge.avatarUrl} alt="Avatar" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col py-2 pl-1">
                                        <h5 className="mb-0"><b>{badge.firstName} {badge.lastName}</b></h5>
                                        <h6 className="text-info mb-0"><i className="fab fa-twitter"></i> @{badge.twitter}</h6>
                                        <p className="mb-0">{badge.jobTitle}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default BadgeList