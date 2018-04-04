class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    if(user){
      this.users = this.users.filter(function (user) {
        return user.id !== id;
      })
    }
    return user;
  }
  getUser(id) {
    return this.users.find(function (user) {
      return id === user.id;
    });
  }
  getUserList (room) {
    var users = this.users.filter(function (user) {
      return room === user.room;
    });
    return users.map(function (user) {
      return user.name;
    });
  }
}

module.exports = {Users};
