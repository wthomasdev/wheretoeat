module.exports = {
  findFromList: function (name, list) {
    for (var i = 0; i < list.length; i++) {
      if (name === list[i].username) {
        return list[i].id
      }
    }
  }
}
