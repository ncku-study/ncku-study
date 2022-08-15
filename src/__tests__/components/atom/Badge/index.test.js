import { fireEvent, render, screen } from '@testing-library/react';
import Badge, { testId } from '~/src/components/atom/Badge';

describe('test for atom - Badge', () => {
    it('render Badge without props must be same', () => {
        const { container } = render(<Badge />);

        expect(container).toMatchSnapshot();
    });

    it('render Badge with value', () => {
        const value = 'this is a super weird test';
        const { container } = render(<Badge textProps={{ value }} />);

        expect(screen.getByText(value)).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    it('render Badge with className', () => {
        const className = 'testingClassName';
        const { container } = render(<Badge styleProps={{ className }} />);
        expect(screen.getByTestId(testId).classList).toContain(className);
        expect(container).toMatchSnapshot();
    });

    it('render Badge with close function', () => {
        const mockClose = jest.fn();
        render(<Badge eventProps={{ onClick: mockClose }} />);

        mockClose.mockClear();
        fireEvent.click(screen.getByRole('button'));
        expect(mockClose).toBeCalledTimes(1);
    });
});
