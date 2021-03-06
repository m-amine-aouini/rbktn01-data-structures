var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (!list.head) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      list.head.next = Node(value)
      list.tail = Node(value)
    }
  };

  list.removeHead = function () {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function (target) {
    var helper = list.head;
    while (helper) {
      if (helper.value === target) return true;

      helper = helper.next;
    }

    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */