import { atom } from 'recoil';

export const addFieldModelState = atom<any>({
    key: 'addFieldModelState',
    default: false,
});

export const addRelationshipModelState = atom<any>({
    key: 'addRelationshipModelState',
    default: false,
});
