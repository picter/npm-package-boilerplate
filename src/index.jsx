import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import './styles.styl';

export const Example = ({ name }) => (
  <div className='example'>
    <h1>
      <FormattedMessage
        {...messages.hi}
        values={{ name }}
      />
    </h1>
    <p>
      <FormattedMessage
        {...messages.welcome}
        values={{ value: 'npm-package-boilerplate' }}
      />
    </p>
  </div>
);

Example.defaultProps = {
  name: 'there',
};

Example.propTypes = {
  name: PropTypes.string,
};
