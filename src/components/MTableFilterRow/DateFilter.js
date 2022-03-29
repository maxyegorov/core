import React from 'react';
import { getLocalizedFilterPlaceHolder } from './utils';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TimePicker, DateTimePicker, DatePicker } from '@mui/lab';

function DateFilter({
  columnDef,
  onFilterChanged,
  localization,
  forwardedRef
}) {
  const onDateInputChange = (date) =>
    onFilterChanged(columnDef.tableData.id, date);

  const pickerProps = {
    value: columnDef.tableData.filterValue || null,
    onChange: onDateInputChange,
    placeholder: getLocalizedFilterPlaceHolder(columnDef),
    clearable: true
  };

  let dateInputElement = null;
  if (columnDef.type === 'date') {
    dateInputElement = <DatePicker {...pickerProps} ref={forwardedRef} />;
  } else if (columnDef.type === 'datetime') {
    dateInputElement = <DateTimePicker {...pickerProps} ref={forwardedRef} />;
  } else if (columnDef.type === 'time') {
    dateInputElement = <TimePicker {...pickerProps} ref={forwardedRef} />;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {dateInputElement}
    </LocalizationProvider>
  );
}

export default React.forwardRef(function DateFilterRef(props, ref) {
  return <DateFilter {...props} forwardedRef={ref} />;
});
