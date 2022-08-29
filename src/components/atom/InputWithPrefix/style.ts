/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

// eslint-disable-next-line import/prefer-default-export
export const InputFieldWithPrefix = styled.div`
    display: inline-flex;
    align-items: flex-end;

    /* Hide arrow of number input field */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }
`;
