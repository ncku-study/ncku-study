import Label from '@/components/atom/Label';
import { fireEvent, render, screen } from '@testing-library/react';

describe('test for atom - Label', () => {
    it('render Label without props must be same', () => {
        const { container } = render(<Label />);

        expect(container).toMatchSnapshot();
    });

    it('render Label with specify textProps', () => {
        const value = 'this is a test value';
        const { container } = render(<Label textProps={{ value }} />);

        expect(screen.getByText(value)).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    it('render Label with specify eventProps (enable delete button)', () => {
        const enableDelete = true;
        const mockDelete = jest.fn();
        const { container } = render(
            <Label eventProps={{ enableDelete, onDelete: mockDelete }} />
        );
        mockDelete.mockClear();
        expect(mockDelete).toBeCalledTimes(0);
        fireEvent.click(screen.getByRole('button'));

        expect(mockDelete).toBeCalledTimes(1);
        expect(container).toMatchSnapshot();
    });

    it('render Label with specify eventProps (disable delete button)', () => {
        const enableDelete = false;
        const { container } = render(<Label eventProps={{ enableDelete }} />);

        expect(screen.queryByRole('button')).toBeFalsy();
        expect(container).toMatchSnapshot();
    });
});
