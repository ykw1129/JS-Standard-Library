/* 函数执行上下文可存在无数个，每当一个函数被调用时都会创建一个函数上下文；需要注意的是，同一个函数被多次调用，都会创建一个新的上下文。
说到这你是否会想，上下文种类不同，而且创建的数量还这么多，它们之间的关系是怎么样的，又是谁来管理这些上下文呢，这就不得不说说执行上下文栈了。 */