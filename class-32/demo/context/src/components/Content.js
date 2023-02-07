import { Card, Switch, TextInput } from '@mantine/core';
import React, { useContext } from 'react';
import { SiteContext } from '../Context/Site';
import { ThemeContext } from '../Context/Theme';

const Content = () => {

  const site = useContext(SiteContext);
  const theme = useContext(ThemeContext);


  return (
    <>

      <h2>Here is some amazing content</h2>
      <strong>Rendered via Class Component</strong>
      <Card 
        style={{width: '300px'}} 
        mt="lg"
        p="xs" 
        ml={0} 
        withBorder 
        shadow="md"
      >
        <TextInput
          label="Change Site Title and Twitter Handle"
          onChange={(e) => site.changeTitleAndTwitter(e.target.value)}
        />
      </Card>

      <h1>{site.title}</h1>
      <div>
        <a href={`http://www.twitter.com/${site.twitter}`}>
          @{site.twitter}
        </a>
      </div>


      <hr />


      <h2>Current Mode</h2>
      <Switch 
        size="xl"
        color="yellow.8"
        offLabel="dark"
        onLabel="light"
        onChange={theme.toggleMode}
      />
    </>
  );

}

export default Content;
