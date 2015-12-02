module.exports = {

  helloWorld: function(){
    return "Hello World"
  },

  hello: function(string){
    return "Hello " +string
  },

  shout: function(string) {
    return "Hello " +string.toUpperCase();
  },
  whisper: function(string){
    return "Hello "+string.toLowerCase();
  },
  separate: function(string){
    var split = string.split('');
    return split;
  },
  reverseJoin: function(array){
    var rJoin = array.reverse().join(',');
    return rJoin;
  },
  reverseJoinCompact: function(array){
    var rJoin = array.reverse().join('');
    return rJoin;
  },
  backwardsDay: function(string){
    return 'Hello ' +string.split('').reverse().join('');

  }
}
