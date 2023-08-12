import tuitsModel from "./tuits-model.js"


// 如果使用花括号 {}，函数体被视为一个代码块，如果没有显式地使用 return 语句返回值，函数默认会返回 undefined。
// 没有花括号，箭头函数会隐式地将单个表达式的结果作为返回值，所以 tuitsModel.find() 的结果会被隐式返回。
// 确保在使用花括号 {} 定义函数体时，要在需要的地方使用 return 语句来明确返回值。

export const findTuits = () => tuitsModel.find()

export const createTuit = (tuit) => tuitsModel.create(tuit)

export const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid })

export const updateTuit = (tid, tuit) =>
  tuitsModel.updateOne({ _id: tid }, { $set: tuit })