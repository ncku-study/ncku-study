import {
    FormEvent,
    forwardRef,
    MouseEvent,
    MutableRefObject,
    useCallback,
    useRef,
    useState,
} from 'react';

import {
    Button,
    Container,
    InputField,
    StyledClearIcon,
    StyledSearchIcon,
} from './style';

export interface SearchBarProps {
    className?: string;
    width?: number | string;

    value?: string;
    onChange?: (value: string) => void;
    onSubmit: (value: string) => void;
}

const SearchBar = forwardRef<HTMLInputElement | null, SearchBarProps>(
    (
        {
            className,
            width,

            value,
            onChange: handleChange,
            onSubmit: handleSubmit,
        },
        ref
    ) => {
        const [isInputFocused, setInputFocused] = useState(false);
        const parentRef = ref as MutableRefObject<HTMLInputElement> | undefined;
        const inputRef = useRef<HTMLInputElement>(null);

        const handleSearchClick = useCallback(
            (e: FormEvent) => {
                e.preventDefault();

                if (value) {
                    handleSubmit(value);
                    return;
                }

                const targetRef = parentRef || inputRef;
                if (!targetRef.current?.value) return;

                handleSubmit(targetRef.current.value);
            },
            [handleSubmit, parentRef, value]
        );

        const handleClearClick = useCallback(
            (e: MouseEvent) => {
                e.preventDefault();

                if (handleChange) {
                    handleChange('');
                    return;
                }

                const targetRef = parentRef || inputRef;
                if (!targetRef.current?.value) return;

                targetRef.current.value = '';
            },
            [parentRef, handleChange]
        );

        return (
            <Container
                className={className}
                style={{ width }}
                onSubmit={handleSearchClick}
            >
                <InputField
                    ref={value && handleChange ? null : ref || inputRef}
                    value={value}
                    onChange={(e) => handleChange?.(e.target.value)}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                />
                <Button
                    type="button"
                    hidden={!isInputFocused}
                    onMouseDown={handleClearClick}
                >
                    <StyledClearIcon fontSize="large" />
                </Button>
                <Button hidden={isInputFocused}>
                    <StyledSearchIcon fontSize="large" />
                </Button>
            </Container>
        );
    }
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;
