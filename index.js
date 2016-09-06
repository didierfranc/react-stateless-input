export default function inputs(formName) {
  const baseSelector = formName ? `#${formName} ` : '';
  const inputs = document.querySelectorAll(`${baseSelector}input:not([type=submit])`);
  const selects = document.querySelectorAll(`${baseSelector}select`);
  const all = [...inputs, ...selects];
  const inputObject = all.reduce((acc, cur) => (
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
  ].reduce((acc, cur) => ({...acc, [cur.name]: cur.value}), {});
};

*/