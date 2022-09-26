import { fireEvent, render, screen } from '@testing-library/react';
import PairInput from '~/src/components/atom/PairInput';

describe('test for atom - PairInput', () => {
    it('render PairInput without props must be same', () => {
        const { container } = render(<PairInput />);

        expect(container).toMatchSnapshot();
    });

    it('render PairInput with specify textProps', () => {
        const wording = 'this is a test wording';
        const subWording = [
            'this is a test subWording1',
            'this is a test subWording2',
        ];
        const { container } = render(
            <PairInput textProps={{ wording, subWording }} />
        );

        expect(screen.getByText(wording)).toBeTruthy();
        expect(screen.getByLabelText(subWording[0])).toBeTruthy();
        expect(screen.getByLabelText(subWording[1])).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    it('render PairInput with specify eventProps', () => {
        const enableDelete = true;
        const handleDelete = jest.fn();
        const handleChange = jest.fn();

        const onChange = jest.fn((e) => {
            if (!e.target.value) return;
            if (e.target.value.secret) {
                handleDelete();
                return;
            }
            handleChange();
        });

        const name = 'test name';
        const value = 'test value';
        const objValue = { name, value };

        const { container } = render(
            <PairInput
                eventProps={{ enableDelete, onChange }}
                otherProps={{ objValue }}
            />
        );
        handleDelete.mockClear();
        expect(handleDelete).toBeCalledTimes(0);
        fireEvent.click(screen.getByRole('button'));
        expect(handleDelete.call.length).toBe(1);

        expect(handleChange).toBeCalledTimes(0);
        fireEvent.change(screen.getByDisplayValue(name), {
            target: { value: 'name change' },
        });
        expect(handleChange).toBeCalledTimes(1);
        fireEvent.change(screen.getByDisplayValue(value), {
            target: { value: 'value change' },
        });
        expect(handleChange).toBeCalledTimes(2);

        expect(onChange).toBeCalledTimes(3);
        expect(container).toMatchSnapshot();
    });
});
