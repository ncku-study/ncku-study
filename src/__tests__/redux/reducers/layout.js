import { updateLoginStatus, updateMode } from '@/redux/actions/layout';
import reducer, { initState } from '@/redux/reducers/layout';
import { Mode } from '~/lib/session';

describe('Reducer: Layout', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}).user).toEqual(initState.user);
    });

    it('should handle update loginStatus', () => {
        expect(reducer(undefined, updateLoginStatus(true)).user).toEqual({
            ...initState.user,
            isLoggedIn: true,
        });
    });

    it('should handle update mode', () => {
        expect(reducer(undefined, updateMode(Mode.admin)).user).toEqual({
            ...initState.user,
            mode: Mode.admin,
        });
    });
});
