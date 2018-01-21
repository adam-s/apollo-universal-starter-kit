import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { LayoutCenter } from '../../common/components';
import { PageLayout } from '../../common/components/web';

import ForgotPasswordForm from '../components/ForgotPasswordForm';
import settings from '../../../../../settings';

export default class ForgotPasswordView extends React.Component {
  static propTypes = {
    forgotPassword: PropTypes.func.isRequired
  };

  onSubmit = values => {
    const { forgotPassword } = this.props;
    return forgotPassword(values);
  };

  render() {
    const renderMetaData = () => (
      <Helmet
        title={`${settings.app.name} - Forgot Password`}
        meta={[
          {
            name: 'description',
            content: `${settings.app.name} - Forgot password page`
          }
        ]}
      />
    );

    return (
      <PageLayout>
        {renderMetaData()}
        <LayoutCenter>
          <h1 className="text-center">Password Reset</h1>
          <ForgotPasswordForm onSubmit={this.onSubmit} />
        </LayoutCenter>
      </PageLayout>
    );
  }
}
