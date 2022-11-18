// Middlewares
const renderMW = require('../middleware/renderMW');

const checkPassMW = require('../middleware/auth/checkPassMW');
const authMW = require('../middleware/auth/authMw');

const getCarsMW = require('../middleware/cars/getCarsMW');
const getCarMW = require('../middleware/cars/getCarMW');
const saveCarMW = require('../middleware/cars/saveCarMW');
const delCarMW = require('../middleware/cars/delCarMW');

const getPartsMW = require('../middleware/parts/getPartsMW');
const getPartMW = require('../middleware/parts/getPartMW');
const savePartMW = require('../middleware/parts/savePartMW');
const delPartMW = require('../middleware/parts/delParttMW');

// Models 
const CarModel = require('../models/car');
const PartModel = require('../models/part');

module.exports = function (app) {
    const objRepo = {
        cars: [{
            id: 0,
            plate: " BCD - 234",
            make: "VolksWagen",
            model: "Passat",
            year: 2003,
            vin: "11211121"
        }
        ],
        parts: [{
            id: 0,
            name: "Suspension Arm",
            number: "987654321",
            price: 1000,
            _usedIn: 0
        }],
        CarModel: CarModel,
        PartModel: PartModel
    };




    app.get("/cars",
        authMW(objRepo),
        getCarsMW(objRepo),
        renderMW(objRepo, 'cars'));

    app.use("/cars/new",
        authMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'addEditCar'));

    app.use("/cars/edit/:carId",
        authMW(objRepo),
        getCarMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'addEditCar'));

    app.get("/cars/del/:carId",
        authMW(objRepo),
        getCarMW(objRepo),
        delCarMW(objRepo),
        renderMW(objRepo, 'cars'));

    app.get("/cars/:carId",
        authMW(objRepo),
        getCarMW(objRepo),
        getPartsMW(objRepo),
        renderMW(objRepo, 'viewCar'));


    app.get("/parts",
        authMW(objRepo),
        getPartsMW(objRepo),
        renderMW(objRepo, 'parts'));

    app.use("/parts/new",
        authMW(objRepo),
        getCarsMW(objRepo),
        savePartMW(objRepo),
        renderMW(objRepo, 'addEditParts'));

    app.use("/parts/edit/:partID",
        authMW(objRepo),
        getPartMW(objRepo),
        getCarsMW(objRepo),
        savePartMW(objRepo),
        renderMW(objRepo, 'addEditParts'));

    app.get("/parts/del/:partID",
        authMW(objRepo),
        getPartMW(objRepo),
        delPartMW(objRepo),
        renderMW(objRepo, 'addEditParts'));

    app.use("/login",
        checkPassMW(objRepo),
        renderMW(objRepo, 'login'));


    app.use(function (req, res) {
        res.redirect("/login")
    });
}