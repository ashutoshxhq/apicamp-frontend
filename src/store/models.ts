import { atom } from 'recoil';

export const addFieldModalState = atom<any>({
    key: 'addFieldModelState',
    default: false,
});

export const editFieldModalState = atom<any>({
    key: 'editFieldModelState',
    default: {
        modalState: false,
        id:""
    },
});

export const addRelationshipModalState = atom<any>({
    key: 'addRelationshipModelState',
    default: false,
});

export const createModelModalState = atom<any>({
    key: 'createModelState',
    default: false,
});
export const editModelModalState = atom<any>({
    key: 'editModelModalState',
    default: false,
});

export const modelModeState = atom<any>({
    key: 'modelModeState',
    default: 0,
});