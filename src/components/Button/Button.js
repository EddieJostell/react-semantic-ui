import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonExample = () => (
<div>
    <Button color="red" fluid size="large" circular onClick={() => console.log("Clicked")}>Click Here!</Button>
</div>
);

export default ButtonExample;