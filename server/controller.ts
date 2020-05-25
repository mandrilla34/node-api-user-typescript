import model from './model';

class Controller {
    constructor() {}

    // Get
    getUsers() {
        return model.find({});
    }

    select(req, res) {
        this.getUsers()
            .then((crushes) => res.status(200).json({ result: crushes }))
            .catch((err) => res.status(400).json({ result: err }));
    }

    // Get id
    getUserById(id) {
        return model.findById(id);
    }

    selectOne(req, res) {
        this.getUserById(req.params.id)
            .then((crush) => res.status(200).json({ result: crush }))
            .catch((err) => res.status(400).json({ result: err }));
    }

    // Insert
    insertUser(data) {
        return model.create(data);
    }

    insert(req, res) {
        const crush = req.body;
        this.insertUser(crush)
            .then((crush) => res.status(200).json({ result: crush }))
            .catch((err) => res.status(400).json({ result: err }));
    }

    // Delete
    // Utilizar esse modelo abaixo para deletar por qualquer atributo
    deleteUser(obj) {
        model.deleteOne({ obj });
    }

    deleteUserById(id) {
        return model.findByIdAndDelete(id);
    }

    delete(req, res) {
        this.deleteUserById(req.params.id)
            .then((user) => res.status(200).json({ result: user }))
            .catch((err) => res.status(400).json({ result: err }));
    }

    // Update
    updateUserById(id, body) {
        return model.findByIdAndUpdate(id, body);
    }

    update(req, res) {
        this.updateUserById(req.params.id, req.body)
            .then((user) => res.status(200).json({ result: user }))
            .catch((err) => res.status(400).json({ result: err }));
    }
}

export default Controller;
