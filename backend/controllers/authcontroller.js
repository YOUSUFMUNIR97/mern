const UserModel = require("../models/authmodel")
const bcrypt = require('bcryptjs')


const AuthController = {
    signUp: async (req, res) => {
        try {
            let { userName, password, contact } = req.body
            let obj = { userName, password, contact }
            let errArr = []

            if (!obj.userName) {
                errArr.push('User Name is Required')
            }
            if (!obj.password) {
                errArr.push('password is Required')
            }

            if (err.lenght > 0) {
                res.send({
                    isSuccessfull: false,
                    data: result,
                    message: 'Vaidation Error'
                });
                return;
            }
            let userExist = await UserModel.findOne({ userName: obj.userName })

            if (userExist) {
                res.send({
                    isSuccessfull: false,
                    data: result,
                    message: 'user Already Exisit'
                });
                return;
            }

            obj.password = await bcrypt.hash(obj.password, 10);

            let User = new UserModel(obj)
            let result = await User.save()

            if (result) {
                res.send({
                    isSuccessfull: true,
                    data: result,
                    message: 'User Created'
                });
            }
        } catch (error) {
            res.send({
                isSuccessfull: false,
                data: result,
                message: 'Internal Server Error'
            });
        }
    }
}

login: async (req, res) => {
    try {
        let { userName, password } = req.body;
        let obj = { userName, password };
        let existingUser = await UserModel.findOne({ userName: obj.userName })
    
        if(existingUser){
            let corectPassword = bcrypt.compare(obj.password, existingUser.password);
        
        if(correctPassword) {
            let token = jwt.sign({...existingUser}, process.env.SECRET_KEY)
       
            res.send(
                res.send({
                    isSuccessfull: false,
                    message: 'User Not Found'    
                })
            )
            
        }

        }else{
            res.send(
                isSuccessfull: true,
                message: 'Login Sucessfully', {
                    token: token,
                    user: existingUser,
                }
        );
        } else {
            res.send
        }
    }

    
}

module.exports = AuthController;