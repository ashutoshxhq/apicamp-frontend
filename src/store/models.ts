import { atom } from 'recoil';

export const addFieldModelState = atom<any>({
    key: 'addFieldModelState',
    default: false,
});

export const addRelationshipModelState = atom<any>({
    key: 'addRelationshipModelState',
    default: false,
});

export const createModelState = atom<any>({
    key: 'createModelState',
    default: false,
});