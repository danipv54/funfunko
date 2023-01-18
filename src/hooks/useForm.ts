import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState<any>(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}