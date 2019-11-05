import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

export default () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center" className="title">
        Login
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="blue" fluid size="large" circular>
              Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);
