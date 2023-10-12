"use client";

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const data = useFormStatus()

    return <button type="submit" disabled={data.pending}>Revalidate tag{data.pending ? ' loading' : ''}</button>
}

export { SubmitButton }