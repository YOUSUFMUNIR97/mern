const Course = require("../models/coursemodel");


const course = [
    {
        id: '1',
        name: 'yousuf'
    },
    {
        id: '2',
        name: 'munir'
    },
    {
        id: '3',
        name: 'zaid'
    },
    {
        id: '4',
        name: 'abc'
    },
    {
        id: '5',
        name: 'xyz'
    },
    {
        id: '6',
        name: 'pqr'
    }

]


const CourseController = {
    get: async (req, res) => {
        try {
            let {pageNo, pageSize} = req.query;
            let skipCount = (pageNo - 1) * pageSize
            let result = await Course.find().limit(pageSize).skip(skipCount);
            res.send({
                isSuccessfull: true,
                data: result,
                message: 'Data Found'
            });

        } catch (e) {
            res.send({
                isSuccessfull: false,
                data: null,
                messsage: 'No Data Found',
            });
        }
    },

    getById: async (req, res) => {
        try {
            const id = req.params.id;
            let result = await Course.findById(id);

            if (result) {
                res.send({
                    isSuccessfull: true,
                    data: result,
                    messsage: 'Data Found',
                });
            }
        } catch (e) {
            res.send({
                isSuccessfull: false,
                data: null,
                messsage: 'No Data Found',
            });
        }
    },

    post: async (req, res) => {
        try {
            let { name } = req.body;
            let obj2 = { name };
            let errArray = [];

            if (!obj2.name) {
                errArray.push("Required name");
            }

            if (errArray.length > 0) {
                res.send({
                    isSuccessfull: false,
                    message: "Validation Error !",
                    data: errArray,
                });
            } else {
                let newCourse = new Course(obj2);
                let result = await newCourse.save();
                res.send({
                    isSuccessfull: true,
                    message: "Data Added successfully",
                    data: result,
                });
            }
        } catch (err) {
            res.send({
                isSuccessfull: false,
                message: "Error",
            });
        }
    },


    delete: async (req, res) => {
        try {
            const id = req.params.id;
            
            let result = await Course.findByIdAndDelete(id)

            if (result) {
                res.send({
                    isSuccessfull: true,
                    data: result,
                    messsage: 'Delete Sucessfully',
                });
            }
        } catch (err) {
            res.send({
                isSuccessfull: false,
                data: null,
                messsage: 'No Data Found',
            });
        }
    },
    edit: async (req, res) => {
        try {
            const id = req.params.id;
            const updatedCourse = req.body;

            // Find the index of the course with the specified ID
            let index = await Course.findByIdAndUpdate(id,updatedCourse);

            // if(index) {
            //     res.send({
            //         isSuccessfull: true,
            //         message: 'Course updated successfully',
            //         data: index,
            //     });
            // }

            res.send({
                isSuccessfull: true,
                message: 'Course updated successfully',
                data: index,
            });
        } catch (err) {
            res.send({
                isSuccessfull: false,
                data: null,
                message: 'Course not found',
            });
        }
    },
}

module.exports = CourseController;