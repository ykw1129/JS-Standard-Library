// 用户集合
const User = mongoose.model('User',new mongoose.Schema({name:{type:String}}));
// 文章集合
const Post = mongoose.model('Post',new mongoose.Schema({title:{type:String},auther:{type:mongoose.Schema.Types.ObjectId,ref:'User'}}))
// ref 表示要和哪个集合进行关联

// 集合查询
Post.find()
    .populate('author')
    .then((err,result)=>console.log(result));