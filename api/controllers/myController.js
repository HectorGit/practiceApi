

module.exports = {


    getFunction : async(req,res) => {
        console.log('body: ', req.body)
        console.log('getFunction called')
        return res(200).send({"Success":"success"})
    },

    postFunction : async(req,res) => {
        console.log('body: ', req.body)
        console.log('postFunction called')
        return res(200).send({"Success":"success"})
    },

    patchFunction : async(req,res) => {
        console.log('body: ', req.body)
        console.log('patchFunction called')
        return res(200).send({"Success":"success"})
    },

    deleteFunction : async(req,res) => {
        console.log('body: ', req.body)
        console.log('deleteFunction called')
        return res(200).send({"Success":"success"})
    },


}