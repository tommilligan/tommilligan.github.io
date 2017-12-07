// @flow

import React from "react";
import { Container, Segment, Grid } from "semantic-ui-react";

const Welcome = (props: any) => {
  return (
    <div style={{ paddingBottom: 14 }}>
      <Segment>
        <Grid divided textAlign="center">
          <Grid.Row columns={3}>
            <Grid.Column>
              Delta
            </Grid.Column>
            <Grid.Column>
              Echo
            </Grid.Column>
            <Grid.Column>
              Foxtrot
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default Welcome;