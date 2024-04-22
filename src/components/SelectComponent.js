import React, { MouseEventHandler, useState } from 'react';
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from 'react-select';

export const SelectComponent = (props) => {
  const { options } = props;
  const styles = {
    control: (css) => ({ ...css, paddingLeft: '1rem' }),
  };

  return (
    <Select
      isSearchable
      name="emoji"
      options={options}
      styles={styles}
    />
  );
};