import React, { Component } from 'react';
import { Input } from 'antd';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash/debounce'
const { Search } = Input;

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.handleSearch = debounce(this.handleSearch, 500)

    this.handleReset = debounce(this.handleReset, 500)
  }

  handleSearch = (query) => {
    const { history } = this.props;
    history.push(`/search/${query}`)
  }

  handleReset = () => {
    const { history } = this.props;
    history.push(`/popular/1`)
  }

  handleContentChange = (e) => {
    e.persist();
    const query = e.target.value

    if (query.length >= 2) {
      this.handleSearch(query)
    } else {
      this.handleReset()
    }
  }

  render() {
    return (
      <div>
        <Search
          placeholder="search text"
          onChange={this.handleContentChange}
          className="search-input"
        />
      </div>
    )
  }
}

export default withRouter(SearchForm);