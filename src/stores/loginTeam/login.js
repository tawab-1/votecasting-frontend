import {flow, types} from 'mobx-state-tree';
import {toJS} from 'mobx';
import {UserLoginDataApi} from '../../api/index';
import {notification} from '../../utils/notifications/index';

const user = types.model({
  username: types.maybeNull(types.string),
  email: types.maybeNull(types.string),
  areaCode: types.maybeNull(types.string),
  identityCard: types.maybeNull(types.string),
  role: types.maybeNull(types.string),
});

export const signinInfo = types
  .model({
    currentUser: types.array(user),
    errorMessage: types.maybeNull(types.string),
    loading: types.optional(types.boolean, false),
  })
  .views((self) => ({
    getUserData() {
      return toJS(self.currentUser);
    },
    getErrorMessage() {
      return toJS(self.errorMessage);
    },
    isLoading() {
      return self.loading;
    },
  }))
  .actions((self) => {
    const addInfo = flow(function* fetchData(info) {
      try {
        self.loading = true;
        const res = yield UserLoginDataApi.loginUser({
          username: info.email,
          password: info.password,
        });
        const userData = res.data.user;
        self.currentUser.push(userData);
        return res;
      } catch (error) {
        notification.error(error ? 'Invalid Email or Password' : '');
        self.errorMessage = error.response.data.message;
      } finally {
        self.loading = false;
      }
    });
    const registerUser = flow(function* fetchData(userData) {
      try {
        self.loading = true;
        const res = yield UserLoginDataApi.addUser({
          username: userData.username,
          email: userData.email,
          identityCard: userData.identityCard,
          areaCode: userData.areaCode,
          role: userData.role,
        });
      } catch (error) {
        notification.error(error ? 'User not added' : '');
        // self.errorMessage = error.response.data.message;
      } finally {
        self.loading = false;
      }
    });

    return {addInfo, registerUser};
  });

export function initSigninInfo() {
  return signinInfo.create({
    userInfo: [],
  });
}
