# CarParts
## Pages
- login.html : Login form

- cars.hmtl : Tárolt autók táblázata, CRUD
- addEditCar.html : Új autó hozzáadása, vagy már létező atttribútumainak szerkesztése
- viewCar.html : Tárolt autó attributumainak megjelenítése

- parts.html : Tárolt (összes) alkatrész táblázata, CRUD + viewCar gomb
- addEditParts.html : Új alkatrész hozzáadása, vagy meglévő szerkesztése

# Middlewares
    middleware/
        auth/
            checkpassMW.js
            authMW.js
        cars/
            getCarsMW.js
            getCarMW.js
            saveCarMW.js :
                 no value -> new ;
                 some value ->  edit
            delCarMW.js
        parts/
            getPartsMW.js
            getPartMW.js
            savePartMW.js
            delPartMW.js
        renderMW.js

# Routes

GET, POST "/" 
- checkPassMW
- renderMW(login.hmtl)

GET "/cars"
- authMW
- getCarsMW
- renderMW(cars.html)

GET, POST "/cars/new"
- authMW
- saveCarMW
- renderMW(addEditCar.html (add))

GET, POST "/cars/edit/:carId"
- authMW
- getCarMW
- saveCarMW
- renderMW((addEditCar.html (edit))

POST "/cars/del/:carId"
- authMW
- getCarMW
- delCarMW
- renderMW((addEditCar.html (edit))

GET "/cars/:carId"
- authMW
- getCarMW
- getPartsMW
- renderMW(viewCar.html)


GET "/parts"
- authMW
- getPartsMW
- renderMW(parts.html)

GET, POST "/parts/new"
- authMW
- getCarsMW
- savePartMW
- renderMW(addEditParts.html)

GET, POST "/parts/edit/:partID"
- authMW
- getPartMW
- getCarsMW
- savePartMW
- renderMW(addEditParts.html)

GET "/parts/del/:partID"
- authMW
- getPartMW
- delPartMW
- renderMW(addEditParts.html)