import React from "react";
import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
  Flag
} from "semantic-ui-react";
import HeaderExample from "../Header/Header";
import ButtonExample from "../Button/Button";

  const Login = () => (
  <Grid >
    <Grid.Row columns={3}> 
    <Grid.Column>
     <HeaderExample/>
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
          <ButtonExample/>
          <Flag name='se'/>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
    <Grid.Column>
     <HeaderExample/>
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
          <ButtonExample/>
          <Flag name='no'/>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
    <Grid.Column>
     <HeaderExample/>
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
          <ButtonExample/>
          <Flag name='dk'/>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}> 
    <Grid.Column>
     <HeaderExample/>
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
          <ButtonExample/>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
    <Grid.Column>
     <HeaderExample/>
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
          <ButtonExample/>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
    <Grid.Column>
     <HeaderExample/>
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
          <ButtonExample/>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
    <Grid.Column>
     <HeaderExample/>
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
          <ButtonExample/>
        </Form>
      </Segment>
      <Message>
        Not registered yet ? <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Sign Up</a>
      </Message>
    </Grid.Column>
    </Grid.Row>
  </Grid>
);


export default Login;