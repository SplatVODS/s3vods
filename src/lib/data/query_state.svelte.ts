// If an IMPORTED variable needs to be binded or re-assigned,
// you must use an object sytax when defining, then access the value using variable.value when binding or re-assinging
export const currentQuery = $state({value: ""});

export const searchQuery = $state({value: ""});
