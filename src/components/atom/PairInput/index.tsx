import {
    ChangeEvent,
    FC,
    HTMLAttributes,
    KeyboardEvent,
    KeyboardEventHandler,
    useCallback,
} from 'react';
import Input from '../Input';
import Label from '../Label';
import { InputLayout, PairInputLayout } from './style';

const labelStyle = {
    size: '17px',
    align: 'left',
};

export interface PairInputProps extends HTMLAttributes<HTMLInputElement> {
    wording?: string;
    subWording?: string;
    enableDelete?: boolean;
    onChange?: KeyboardEventHandler<HTMLInputElement>;
    objValue?: object | undefined;
}

function packDataToElement(name: string, value: string) {
    return { target: { value: { name, value } } };
}

function packDeleteCommand(secret: string) {
    return { target: { value: { secret } } };
}

type ValueType = {
    name?: string;
    value?: string;
};

const PairInput: FC<PairInputProps> = ({
    wording,
    subWording,
    enableDelete,
    objValue,
    onChange,
}) => {
    const { name, value } = (objValue as ValueType) || { name: '', value: '' };

    const nameWording = subWording ? subWording[0] : '';
    const valueWording = subWording ? subWording[1] : '';

    const handleTitleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (!onChange) return;
            onChange(
                packDataToElement(
                    e.target.value,
                    value || ''
                ) as unknown as KeyboardEvent<HTMLInputElement>
            );
        },
        [onChange, value]
    );
    const handleValueChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (!onChange) return;
            onChange(
                packDataToElement(
                    name || '',
                    e.target.value
                ) as unknown as KeyboardEvent<HTMLInputElement>
            );
        },
        [onChange, name]
    );
    const handleDelete = useCallback(() => {
        // avoid delete the non-spawnable input & anti destroy form by user
        if (!onChange) return;
        onChange(
            packDeleteCommand(
                '/!delete_this_input'
            ) as unknown as KeyboardEvent<HTMLInputElement>
        );
    }, [onChange]);

    return (
        <>
            <Label
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...labelStyle}
                value={wording}
                onDelete={handleDelete}
                enableDelete={enableDelete}
            />
            <PairInputLayout>
                <InputLayout>
                    <Input
                        value={name}
                        wording={nameWording}
                        onChange={handleTitleChange}
                    />
                </InputLayout>
                <InputLayout>
                    <Input
                        value={value}
                        wording={valueWording}
                        onChange={handleValueChange}
                    />
                </InputLayout>
            </PairInputLayout>
        </>
    );
};

export default PairInput;
