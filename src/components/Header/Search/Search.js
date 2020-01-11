import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = ({name, value}) => {
    this.setState({[name]: value})
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input input={this.state.input} name='input' onChange={e=> this.handleChange(e.target)} placeholder="Search Your Feed" />

          <SearchIcon onClick={()=> this.props.handleSearchFn(this.state.input)} id="Search__icon" />
        </div>
        
      </section>
    )
  }
}