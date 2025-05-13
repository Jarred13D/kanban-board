import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JimmyJohns', password: 'password' },
    { username: 'TacoBell', password: 'password' },
    { username: 'Wendys', password: 'password' },
    { username: 'jarredh', password: 'testpass123'}
  ], { individualHooks: true });
};
