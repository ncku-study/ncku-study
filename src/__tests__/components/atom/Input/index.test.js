import { fireEvent, render, screen } from '@testing-library/react';
import Input from '~/src/components/atom/Input';

describe('test for atom - Input', () => {
    it('render Badge without props must be same', () => {
        const { container } = render(<Input />);

        expect(container).toMatchSnapshot();
    });

    it('render Input with specify textProps must render correctly', () => {
        const value = 'testing value here !';
        const wording = 'this is the wording';

        const { container } = render(<Input wording={wording} value={value} />);

        expect(screen.getByDisplayValue(value)).toBeTruthy();
        expect(screen.getByLabelText(wording)).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    it('render Input with specify eventProps must work correctly', () => {
        const mockChange = jest.fn();
        const value = 'testing value here !';

        render(<Input value={value} onChange={mockChange} />);

        mockChange.mockClear();
        fireEvent.change(screen.getByDisplayValue(value), {
            target: { value: 20 },
        });

        expect(mockChange).toBeCalledTimes(1);
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
            <Input elementAttrs={elementAttrs} value={value} />
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
            <Input elementAttrs={elementAttrs} value={value} />
        );

        expect(screen.queryByDisplayValue(value)).toBeFalsy();
        expect(container).toMatchSnapshot();
    });
});
