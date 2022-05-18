import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Popover right</Popover.Header>
    <Popover.Body>
      And heres some <strong>amazing</strong> content. Its very engaging. right?
    </Popover.Body>
  </Popover>
);

export default function Example() {
  return (
    <OverlayTrigger trigger='click' placement='right' overlay={popover}>
      <Button variant='success'>Click me to see</Button>
    </OverlayTrigger>
  );
}
