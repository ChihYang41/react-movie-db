import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col, Icon, Tooltip } from 'antd';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import './Header.scss';
import SearchForm from '../Search/SearchForm';

const AntdHeader = Layout.Header;

export default class Header extends Component {
  handleSignOut = () => {
    const { signOut, tokenClear } = this.props;
    signOut();
    tokenClear();
  }
  render() {
    const { user } = this.props;

    return (
      <AntdHeader style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
        <Row>
          <Col span={8}>
            <div className="logo">
              <Link to="/popular/1" style={{ color : '#fff'}}>
                <Icon type="video-camera" theme="filled" className="logo-icon" style={{ marginRight: '15px'}}/>
                Movie DB
              </Link>
            </div>
          </Col>
          <Col span={8} >
            <SearchForm/>
          </Col>
          <Col span={8}>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
            { !user && <Menu.Item key="1"><Link to="/register">Register</Link></Menu.Item> }
            { !user && <Menu.Item key="2"><Link to="/login">Log in</Link></Menu.Item> }
            </Menu>
              <div className="logedin-icon">
              { user &&
                <Tooltip placement="bottom" title={'watch list'}>
                  <Link to="/watchlist">
                    <Icon type="unordered-list" style={{ color: "#fff", marginRight: '25px'}}/>
                  </Link>
                </Tooltip>
              }
              { user &&
                  <Tooltip placement="bottom" title={'log out'}>
                    <Icon type="logout" onClick={this.handleSignOut} />
                  </Tooltip>
              }
             </div>
          </Col>
        </Row>
      </AntdHeader>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func
}
