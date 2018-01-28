import counter from './counter/configIndex';
import post from './post/configIndex';
import upload from './upload/configIndex';
import user from './user/configIndex';
import subscription from './subscription/configIndex';
import contact from './contact/configIndex';
import pageNotFound from './pageNotFound/configIndex';
import './favicon';

import Feature from './configConnector.web.jsx';

let instance = null;

export default () => {
  if (instance) return instance;
  return (instance = new Feature(counter, post, upload, user, subscription, contact, pageNotFound));
};
