import React, { Component } from 'react';
//import '../App.css';


class Repo extends Component {
  
  render() {
      const {repo} = this.props;
    return (
        <div>
            {repo.name}  ||{repo.description}
        </div>
    );
  }


}

export default Repo;
