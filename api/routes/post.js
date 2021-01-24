let MyController = "../controllers/myController" 

app.route('/post_example', async(req,res)=>{
    MyController.postFunction
});