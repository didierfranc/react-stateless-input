export default function inputs(formName, excludeDisabled = false) {
  const baseSelector = formName ? `#${formName} ` : '';
  const inputs = document.querySelectorAll(`${baseSelector}input:not([type=submit])`);
  const selects = document.querySelectorAll(`${baseSelector}select`);
  const all = [...inputs, ...selects];
  const inputObject = all.reduce((acc, cur) => (
    excludeDisabled && cur.disabled ?
      acc :
      {
        ...acc,
        [cur.name]: cur.value,
      }
  ), {});

  return inputObject;
};

/*
shortened version:

export default function inputs(formName) {
  return [
    ...document.querySelectorAll(`${(formName ? `#${formName} ` : '')}input:not([type=submit])`),
    ...document.querySelectorAll(`${(formName ? `#${formName} ` : '')}select`)
  ].reduce((acc, cur) => ((excludeDisabled && cur.disabled) ? acc : {...acc, [cur.name]: cur.value}), {});
};

*/