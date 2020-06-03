import React, { Component } from 'react';

import Main from '../templates/Main';

const headerProps = {
  icon: 'fa fa-users',
  title: 'Users',
  subtitle: 'User registration: Include, List, Change, Delete'
}

export default class UserCrud extends Component {
  render() {
    return (
      <Main {...headerProps}>
        Cadastro
      </Main>
    )
  }
}
