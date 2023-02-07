import React, {useContext} from 'react';

import {SiteContext} from '../Context/Site';

import { Card, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footerParagraph: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  }
}))

function Footer(props) {
  let { classes } = useStyles();
  const site = useContext(SiteContext);

  return (
    <footer>

      <Card m="lg" shadow="md">
        <p className={classes.footerParagraph}>&copy; 2021 {site.title}</p>
        Twitter <a href={`http://twitter.com/${site.twitter}`}>@{site.twitter}</a>
      </Card>
    </footer>
  );

}

export default Footer;
