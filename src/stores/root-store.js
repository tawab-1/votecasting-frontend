import {applySnapshot, getSnapshot, types} from 'mobx-state-tree';
import {initSigninInfo, signinInfo} from './loginTeam/login';

const RootStore = types
  .model({
    signinInfo: signinInfo,
  })
  .actions((self) => {
    let initialState = {};
    return {
      afterCreate: () => {
        initialState = getSnapshot(self);
      },
      reset: () => {
        applySnapshot(self, initialState);
      },
    };
  });

let store = null;

export function resetStore() {
  store.reset();
}

export function initializeStore(snapshot = null) {
  const _store =
    store ??
    RootStore.create({
      signinInfo: initSigninInfo(),
    });

  if (snapshot) {
    applySnapshot(_store, snapshot);
  }

  if (typeof window === 'undefined') {
    return _store;
  }

  if (!store) {
    store = _store;
  }
  return _store;
}

export function useStore() {
  return initializeStore();
}

export default RootStore;
