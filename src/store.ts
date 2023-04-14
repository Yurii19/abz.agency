import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { IUser } from './interfaces';
import { loadUsers } from './services';

export const useAppStore = defineStore('users', () => {
  const users = ref<IUser[]>([]);
  const token = ref<string>('');
  //getterts
  const getUsers = computed(() => users.value);
  const getToken = computed(() => token.value);
  //actions
  function upadateUsers(range: number) {
    console.log('update Users')
    loadUsers(range).then((resp) => {
      users.value = resp.users;
    });
  }
  const setToken = (data: string) => {
    token.value = data;
  };

  return { users, getUsers, upadateUsers, setToken, getToken };
});
