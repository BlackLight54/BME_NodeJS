const renderMW = require('../middleware/renderMW');

const checkpassMW = require('../middleware/auth/authMW');
const authMW = require('../middleware/auth/checkPassMW');

const getCarsMW = require('../middleware/cars/getCarsMW');
const getCarMW = require('../middleware/cars/getCarMW');
const saveCarMW = require('../middleware/cars/saveCarMW');
const delCarMW = require('../middleware/cars/delCarMW');

const getPartsMW = require('../middleware/parts/getPartsMW');
const getPartMW = require('../middleware/parts/getPartMW');
const savePartMW = require('../middleware/parts/savePartMW');
const delPartMW = require('../middleware/parts/delParttMW');

module.exports = function (app) {
    const objRepo = {};

    app.use("/",
        checkPassMW(objRepo),
        renderMW(objRepo, login));
        

    app.get("/cars",
        authMW(objRepo),
        getCarsMW(objRepo),
        renderMW(objRepo, cars));

    app.use("/cars/new",
        authMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, addEditCar));

    app.use("/cars/edit/:carId",
        authMW(objRepo),
        getCarMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, addEditCar));

    app.get("/cars/del/:carId",
        authMW(objRepo),
        getCarMW(objRepo),
        delCarMW(objRepo),
        renderMW(objRepo, cars));

    app.get("/cars/:carId",
        authMW(objRepo),
        getCarMW(objRepo),
        getPartsMW(objRepo),
        renderMW(objRepo, viewCar));


    app.get("/parts",
        authMW(objRepo),
        getPartsMW(objRepo),
        renderMW(objRepo, parts));

    app.use("/parts/new",
        authMW(objRepo),
        getCarsMW(objRepo),
        savePartMW(objRepo),
        renderMW(objRepo, addEditParts));

    app.use("/parts/edit/:partID",
        authMW(objRepo),
        getPartMW(objRepo),
        getCarsMW(objRepo),
        savePartMW(objRepo),
        renderMW(objRepo, addEditParts));

    app.get("/parts/del/:partID",
        authMW(objRepo),
        getPartMW(objRepo),
        delPartMW(objRepo),
        renderMW(objRepo, addEditParts));
}