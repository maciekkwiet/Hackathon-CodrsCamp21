import { User } from '@models/User';

class Room {
  id: string;
  private users: User[];
  tableData: any;

  constructor(id: string) {
    this.id = id;
    this.users = [];
    this.tableData = {};
  }

  getUser(name: string): User {
    const user = this.users.find(user => user.name === name);
    if (!user) throw new Error(`User ${name} does not belong to room ${this.id}`);
    return user;
  }

  getAdmin(id: string): User | null {
    const roomAdmin = this.users.find(user => user.isAdmin === true) ?? null;
    if (roomAdmin?.socket === id) throw new Error('This user is admin in different room');
    return roomAdmin;
  }

  addUser(user: User): void {
    const name = user.name;

    if (this.users.find(user => user.name === name)) throw new Error('This user name already exists in room');
    this.users.push(user);
  }

  getUsers(): User[] {
    return [...this.users];
  }

  getTableData() {
    return this.tableData;
  }

  setTableData(data: any) {
    this.tableData = data
  }
}

export { Room };
