import { fireEvent, render, screen } from '@testing-library/react';
import Badge from '~/src/components/atom/Badge';

describe('test for atom - Badge', () => {
    it('render Badge without props must be same', () => {
        const { container } = render(<Badge />);

        expect(container).toMatchSnapshot();
    });

    it('render Badge with specify textProps must render correctly', () => {
        const value = 'this is a super weird test';
        const { container } = render(<Badge value={value} />);

        expect(screen.getByText(value)).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    it('render Badge with specify eventProps must work correctly', () => {
        const mockClose = jest.fn();
        render(<Badge onClick={mockClose} />);

        mockClose.mockClear();
        fireEvent.click(screen.getByRole('button'));
        expect(mockClose).toBeCalledTimes(1);
    });
});
