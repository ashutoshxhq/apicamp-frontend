import { atom } from 'recoil';

export const generateServiceSourceCodeState = atom<any>({
    key: 'generateServiceSourceCodeState',
    default: {
        modalState: false,
        id:""
    },
});