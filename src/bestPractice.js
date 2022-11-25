import { useMemo } from "react";


// Bad example (value is primitive: string)
const value = useMemo(() => `${first}${last}`, [first, last]);


// Good example ( person is an object )
const person = useMemo(() => ({
    first,
    last,
    full: `${first}${last}`
}, [first, last]))