import { Major } from '@/redux/actions/major';
import { ModalContext } from '@/redux/actions/modal';
import { Study } from '@/redux/actions/study';

function transIntoModalData(
    type: string,
    index: number,
    data: Study | Major
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
                ...data,
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
