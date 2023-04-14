import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { IUser } from './interfaces';
import { loadUsers } from './services';

export const useAppStore = defineStore('users', () => {
  const users = ref<IUser[]>([]);
  const token = ref<string>('');
  const totalUsers = ref<number>(-1);
  //getterts
  const getUsers = computed(() => users.value);
  const getToken = computed(() => token.value);
  const getTotalUsers = computed(() => totalUsers.value);
  //actions
  function upadateUsers(range: number) {
    // console.log('update Users')
    loadUsers(range).then((resp) => {
      const { total_users } = resp;
      //console.log('total_users Users ', total_users);
      users.value = resp.users;
      totalUsers.value = total_users;
    });
  }
  const setToken = (data: string) => {
    token.value = data;
  };

  return { users, getUsers, upadateUsers, setToken, getToken, getTotalUsers };
});
