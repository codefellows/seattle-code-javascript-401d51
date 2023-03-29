import useStyles from '../../hooks/styles';
import { IconSettings } from '@tabler/icons-react';
import { Button, Card, Grid, NumberInput, Switch, Text, TextInput } from '@mantine/core';
import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { When } from 'react-if';

const SettingsForm = () => {
  const [show, setShow] = useState(false);
  const { classes } = useStyles();
  const {
    displayCount,
    showComplete,
    sort,
    setShowComplete,
    setDisplayCount,
    setSort,
    saveLocally
  } = useContext(SettingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    saveLocally();
  };

  return (
    <>
      <h1 className={classes.h1}><IconSettings /> Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={6}>
          <Card withBorder>
            <form onSubmit={handleSubmit}>
              <Text m="xl" fontSize="xl" weight="bold">Updated Settings</Text>
              <Switch
                label="SHow Completed Todos"
                checked={showComplete}
                onChange={(event) => setShowComplete(event.currentTarget.checked)}
              />
              <NumberInput
                placeholder={displayCount}
                label="Items Per Page"
                onChange={(value) => setDisplayCount(value)}
              />
              <TextInput
                placeholder={sort}
                label="Sort Keyword"
                onChange={(e) => setSort(e.target.value)}
              />
              <Button type="submit">Save New Settings</Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <When condition={show}>
            <Card withBorder>
              <Card.Section>
                <Text m="xl" fontSize="xl" weight="bold">Updated Settings</Text>
              </Card.Section>
              <Text m="sm">{showComplete ? 'Show' : 'Hide'} Completed ToDos</Text>
              <Text m="sm">Items Per page: {displayCount}</Text>
              <Text m="sm">Sort Keyword: {sort}</Text>
            </Card>
          </When>
        </Grid.Col>

      </Grid>

    </>
  )
};

export default SettingsForm
