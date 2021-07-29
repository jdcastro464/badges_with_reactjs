import React from 'react'

class BadgeForm extends React.Component {
    handleClick = e => {
        console.log('Click')
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label><i className="fa fa-user" aria-hidden="true"></i> First Name</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text" name="firstName"
                            placeholder="First Name"
                            value={this.props.formValues.firstName} />
                    </div>

                    <div className="form-group">
                        <label><i className="fa fa-user" aria-hidden="true"></i> Last Name</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text" name="lastName"
                            placeholder="Last Name"
                            value={this.props.formValues.lastName} />
                    </div>

                    <div className="form-group">
                        <label><i className="fas fa-envelope"></i> Email</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="email" name="email"
                            placeholder="Email"
                            value={this.props.formValues.email} />
                    </div>

                    <div className="form-group">
                        <label><i className="fas fa-user-md"></i> Job Title</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text" name="jobTitle"
                            placeholder="Job Title"
                            value={this.props.formValues.jobTitle} />
                    </div>

                    <div className="form-group">
                        <label><i className="fab fa-twitter"></i> Twitter</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text" name="twitter"
                            placeholder="Twitter"
                            value={this.props.formValues.twitter} />
                    </div>

                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary">
                        Save
                    </button>

                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </React.Fragment >
        )
    }
}

export default BadgeForm