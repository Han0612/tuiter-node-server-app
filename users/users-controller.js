import people from "./users.js"

let users = people

const UserController = (app) => {
    app.get('/api/users', FindUsers)
    app.get('/api/users/:uid', FindById)
    app.post('/api/users', CreateUser)
    app.delete('/api/users/:uid', DeleteUser)
    app.put('/api/users/:uid', UpdateUser)
}

const FindUsers = (req, res) => {
    const type = req.query.type

    if (type) {
        const usersOfType = users.filter(u => u.type === type)
        res.json(usersOfType) 
    }

    res.json(users)
}

const FindById = (req, res) => {
    const uid = req.params.uid

    const userOfId = users.filter(u => u._id === uid)

    res.json(userOfId)
}

const CreateUser = (req, res) => {
    const newUser = req.body
    newUser._id = (new Date()).getTime() + ''
    
    users.push(newUser)
    res.json(newUser)
}

const DeleteUser = (req, res) => {
    const userId = req.params['uid']

    users = users.filter(usr => usr._id !== userId)

    res.sendStatus(200)
}

const UpdateUser = (req, res) => {
    const userId = req.params['uid']
    const updates = req.body

    users = users.map((usr) =>
      usr._id === userId ?
        {...usr, ...updates} :
        usr
    )

    res.sendStatus(200)
}
   


export default UserController   