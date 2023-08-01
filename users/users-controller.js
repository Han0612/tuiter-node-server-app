import people from "./users.js"

let users = people

const UserController = (app) => {
    app.get('/api/users', FindUsers)
    app.get('/api/users/:uid', FindById)
}

const FindUsers = (req, res) => {
    const type = req.query.type

    if (type) {
        const usersOfType = users.filter(u => u.type === type)
        res.json(usersOfType) 
    }

    res.json(users)
}

const FindById  = (req, res) => {
    const uid = req.params.uid

    const userOfId = users.filter(u => u._id === uid)

    res.json(userOfId)
}



export default UserController   