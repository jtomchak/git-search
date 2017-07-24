import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.params.username}`)
      .then(resp => resp.json())
      .then(user => {
        this.setState((prevState, props) => ({
          user: user
        }));
      })
      .catch(err => console.log(err));
  }

  render() {
    //if state has no user property render this, otherwise continue on
    if (!this.state.user) {
      return <div className="user-page">LOADING......</div>;
    }

    //assuming the user is loaded, bc we check
    const user = this.state.user;

    //Now we can render, sweet
    return (
      <div className="user-page">
        <div className="user-info">
          <img
            className="user-info__avatar"
            src={user.avatar_url}
            alt={`${user.login} avatar`}
          />
          <h2 className="user-info__title">
            {user.login} ({user.name})
          </h2>
          <p className="user-info__bio">
            {user.bio}
          </p>
        </div>
      </div>
    );
  }
}

export default User;
