import { Study } from '@/redux/actions/study';
import { ModalContext } from '~/src/redux/actions/modal';

function transIntoModalData(
    type: string,
    index: number,
    data: Study | unknown // reserve for major
): ModalContext {
    switch (type) {
        case 'study':
            return {
                ...data,
                index,
                rawData: data,
            };
        case 'major':
            return {
                index,
                rawData: data,
            };
        default:
            return {
                index,
                rawData: data,
            };
    }
}

export default transIntoModalData;
