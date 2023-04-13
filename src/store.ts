import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { IUser } from './interfaces';
import { loadUsers } from './services';

export const useAppStore = defineStore('users', () => {
  const users = ref([]);
  const getUsers = computed(() => users.value);
  function upadateUsers(range: number) {
    // console.log('usersComponent')
    loadUsers(range).then((resp) => {
      //console.log(resp);
      users.value = resp.users;
    });
  }

  return { users, getUsers, upadateUsers };
});
