import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TimePicker } from '@mui/lab';

function TimeField({ forwardedRef, ...props }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        {...props}
        ref={forwardedRef}
        format="HH:mm:ss"
        value={props.value || null}
        onChange={props.onChange}
        clearable
        InputProps={{
          style: {
            fontSize: 13
          }
        }}
        inputProps={{
          'aria-label': `${props.columnDef.title}: press space to edit`
        }}
      />
    </LocalizationProvider>
  );
}

export default React.forwardRef(function TimeFieldRef(props, ref) {
  return <TimeField {...props} forwardedRef={ref} />;
});
