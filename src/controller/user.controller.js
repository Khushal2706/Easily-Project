import path from 'path'
export default class userController{

    getView(req,res){
        res.render('index');
    }
}