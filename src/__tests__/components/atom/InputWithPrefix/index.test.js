import { fireEvent, render, screen } from '@testing-library/react';
import InputWithPrefix from '~/src/components/atom/InputWithPrefix';

describe('test for atom - InputWithPrefix', () => {
    it('render InputWithPrefix without props must be same', () => {
        const { container } = render(<InputWithPrefix />);

        expect(container).toMatchSnapshot();
    });

    it('render InputWithPrefix with specify textProps', () => {
        const value = 'this is a test value';
        const prefix = 'this is a test prefix';

        const { container } = render(
            <InputWithPrefix textProps={{ value, prefix }} />
        );

        expect(screen.getByText(prefix)).toBeTruthy();
        expect(screen.getByDisplayValue(value)).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    it('render InputWithPrefix with sepcify eventProps', () => {
        const mockChange = jest.fn();
        const value = 'this is a test value';

        const { container } = render(
            <InputWithPrefix
                textProps={{ value }}
                eventProps={{ onChange: mockChange }}
            />
        );
        mockChange.mockClear();
        expect(mockChange).toBeCalledTimes(0);

        fireEvent.change(screen.getByDisplayValue(value), {
            target: { value: 20 },
        });

        expect(mockChange).toBeCalledTimes(1);
        expect(container).toMatchSnapshot();
    });

    it('render Input with specify elementAttrs must work correctly', () => {
        const value = 99999;
        const elementAttrs = {
            type: 'number',
            min: 50,
            max: 100,
            step: 0.1,
        };

        const { container } = render(
            <InputWithPrefix
                otherProps={{ elementAttrs }}
                textProps={{ value }}
            />
        );

        expect(screen.getByDisplayValue(value)).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    it('render Input with specify elementAttrs must work correctly when error type', () => {
        const value = 'surprise test';
        const elementAttrs = {
            type: 'number',
            min: 50,
            max: 100,
            step: 0.1,
        };

        const { container } = render(
            <InputWithPrefix
                otherProps={{ elementAttrs }}
                textProps={{ value }}
            />
        );

        expect(screen.queryByDisplayValue(value)).toBeFalsy();
        expect(container).toMatchSnapshot();
    });
});
