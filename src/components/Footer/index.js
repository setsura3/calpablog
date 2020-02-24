import React from 'react';

import ExternalLink from '../ExternalLink';
import { config } from '../../../data';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with&nbsp;
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />
            &nbsp;and&nbsp;
            <ExternalLink
              href="https://reactjs.org/"
              title={`React ${React.version}`}
            />
            .&nbsp;Hosted on&nbsp;
            <ExternalLink href="aws.amazon.com" title="Amazon Web Service" />
            <br />
            The code is open source and available at&nbsp;
            <ExternalLink
              href="https://github.com/setsura3/calpablog"
              title="calpablog"
            />
          </p>
          <p className="copyright">
            Copyright&nbsp;
            <ExternalLink href="https://xchen.ninja/" title="&copy;Chen" />
            &nbsp;
            {config.title}
            {new Date().getFullYear()}
            &nbsp;Theme by Xin (Chris) Chen
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
