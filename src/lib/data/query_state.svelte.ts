export const currentQuery = {value: ""};

// If an IMPORTED state variable needs to be binded or re-assigned,
// you must use an object sytax when defining, then access the value using variable.value when binding or re-assinging
export const searchQuery = $state({value: ""});

// set state equal to currentQuery when clicking search button, currentQuery does not trigger a state change on its own to limit function calls

