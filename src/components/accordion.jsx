/** @jsx jsx */
import { useState, useLayoutEffect } from 'react';
import { jsx } from 'theme-ui';
import { Button } from './button';

export const Accordion = ({ summary, details }) => {
  const [show, setShow] = useState(true);

  useLayoutEffect(() => {
    setShow(false);
  }, []);

  return (
    <div>
      {summary && (
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {summary}
          <Button onClick={() => setShow(prevShow => !prevShow)}>{show ? 'Hide' : 'Show'}</Button>
        </div>
      )}
      {details && (
        <div
          aria-hidden={!show}
          sx={{
            height: show ? 'auto' : 0,
            overflow: 'hidden',
          }}
        >
          {details}
        </div>
      )}
    </div>
  );
};
