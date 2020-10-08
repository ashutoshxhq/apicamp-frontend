import { atom } from 'recoil';

export const addFieldModalState = atom<any>({
    key: 'addFieldModelState',
    default: false,
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