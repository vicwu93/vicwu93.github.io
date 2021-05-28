// search specific drink by name
function search_name() {
    let inputSearchName = document.getElementById("input-search-name").value.trim()
    // location.href=`http://localhost:8080/recipe/search/${inputSearch}`
    // let url = `http://localhost:8000/recipe/search_name/${inputSearchName}`
    let url = `https://isa-termproj.herokuapp.com/api/v1/search_name/${inputSearchName}`
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let search = document.getElementById('response');
        search.innerHTML = ""
        search.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","amount":"${data[i].amount}","ingredient_id":${data[i].ingredient_id},"recipe_id":${data[i].recipe_id},"instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                search.innerHTML += ","
            }
        }
        search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// search specific drink by id using post instead of get
function search_id() {
    let inputSearchId = document.getElementById("input-search-id").value.trim()
    // location.href=`http://localhost:8080/recipe/search/${inputSearch}`
    // let url = `http://localhost:8000/recipe/search_id/${inputSearchId}`
    let url = `https://isa-termproj.herokuapp.com/api/v1/search_id/${inputSearchId}`

    console.log(url)
    tempdata = {
        id: inputSearchId
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(tempdata)
    })
    .then((res) => res.json())
    .then((data) => {
        let search = document.getElementById('response');
        search.innerHTML = ""
        search.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","amount":"${data[i].amount}","ingredient_id":${data[i].ingredient_id},"recipe_id":${data[i].recipe_id},"instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                search.innerHTML += ","
            }
        }
        search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function search_random() {
    // let inputSearchId = document.getElementById("input-search-id").value.trim()
    // location.href=`http://localhost:8080/recipe/search/${inputSearch}`
    // let url = `http://localhost:8000/recipe/search_id/${inputSearchId}`
    let url = `https://isa-termproj.herokuapp.com/api/v1/random`

    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let random = document.getElementById('response');
        random.innerHTML = ""
        random.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            random.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","amount":"${data[i].amount}","ingredient_id":${data[i].ingredient_id},"recipe_id":${data[i].recipe_id},"instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                random.innerHTML += ","
            }
        }
        random.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// all drinks
function drinks() {
    // location.href=`http://localhost:8080/recipe/drinks`
    // let url = `http://localhost:8000/recipe/drinks`
    let url = `https://isa-termproj.herokuapp.com/api/v1/drinks`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let drinks = document.getElementById('response');
        drinks.innerHTML = ""
        drinks.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            drinks.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                drinks.innerHTML += ","
            }
        }
        drinks.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function add() {
    let name = document.getElementById("input-add-recipe-name").value.trim()
    let category = document.getElementById("input-add-recipe-category").value.trim()
    let instructions = document.getElementById("input-add-recipe-instructions").value.trim()
    let ingredients = document.getElementById("input-add-recipe-ingredients").value.trim()
    let amounts = document.getElementById("input-add-recipe-amounts").value.trim()
    // console.log(name, category, instructions, ingredients, amounts)
    data = {
        name: name, 
        cat: category, 
        instructions: instructions, 
        ingredients: ingredients,
        amounts: amounts 
    }
    console.log(data)
    // location.ref=`http://localhost:8080/recipe/add_recipe`
    // let url = `http://localhost:8000/recipe/add_recipe`
    let url = `https://isa-termproj.herokuapp.com/api/v1/add_recipe`
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
        let recipe = document.getElementById('response');
        recipe.innerHTML = `"name":"${name}","category":"${category}","instructions":"${instructions}","ingredients":"${ingredients}","amounts":"${amounts}"`
    }).catch(e => console.log(e))
}

function dlt() {
    let name = document.getElementById("input-delete-recipe").value.trim()
    // let url = `http://localhost:8000/recipe/delete/${name}`
    let url = `https://isa-termproj.herokuapp.com/api/v1/delete/${name}`
    // console.log(url)
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        let delete_item = document.getElementById('response');
        let input = document.getElementById('input-delete-recipe').value;
        delete_item.innerHTML = input + " has been deleted.";
    }).catch(e => console.log(e))
}

function update() {
    let oldName = document.getElementById("input-old-name").value.trim()
    let newName = document.getElementById("input-new-name").value.trim()
    // let url = `http://localhost:8000/recipe/update`
    let url = `https://isa-termproj.herokuapp.com/api/v1/update`

    data = {
        oldName: oldName,
        newName: newName
    }
    fetch(url, {
        method: 'PUT',
        headers: { 
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data) 
    })
    .then((res) => res.json())
    .then((data) => {
        let update = document.getElementById('response');
        let oldname = document.getElementById('input-old-name').value;
        let newname = document.getElementById('input-new-name').value;
        update.innerHTML = `${oldname} has been changed to ${newname}.`;
    }).catch(e => console.log(e))
}

// search by first letter 
function search_fletter() {
    let fletter = document.getElementById("input-search-fletter").value.trim()
    console.log(fletter)
    // let url = `http://localhost:8000/recipe/search_fletter/${fletter}`
    let url = `https://isa-termproj.herokuapp.com/api/v1/search_fletter/${fletter}`
    tempdata = {
        fletter: fletter
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(tempdata)
    })
    .then((res) => res.json())
    .then((data) => {
        let fletter_drinks = document.getElementById('response');
        fletter_drinks.innerHTML = ""
        fletter_drinks.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            fletter_drinks.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}"`;
            if (i > data.length - 1) {
                fletter_drinks.innerHTML += ","
            }
        }
        fletter_drinks.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// filters 
function filter() {
    // let url = `http://localhost:8000/recipe/category/ordinarydrink`
    let filterName= document.getElementById("input-filter-name").value.trim()
    console.log(filterName)
    let url = `https://isa-termproj.herokuapp.com/api/v1/category/${filterName}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let ordinary = document.getElementById('response');
        ordinary.innerHTML = ""
        ordinary.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            ordinary.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}"`;
            if (i > data.length - 1) {
                ordinary.innerHTML += ","
            }
        }
        ordinary.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}


function filter_beer() {
    // let url = `http://localhost:8000/recipe/category/beer`
    let url = `https://isa-termproj.herokuapp.com/api/v1/category/beer`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let beer = document.getElementById('response');
        beer.innerHTML = ""
        beer.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            beer.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}"`;
            if (i > data.length - 1) {
                beer.innerHTML += ","
            }
        }
        beer.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_ordinary_drink() {
    // let url = `http://localhost:8000/recipe/category/ordinarydrink`
    let url = `https://isa-termproj.herokuapp.com/api/v1/category/ordinarydrink`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let ordinary = document.getElementById('response');
        ordinary.innerHTML = ""
        ordinary.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            ordinary.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}"`;
            if (i > data.length - 1) {
                ordinary.innerHTML += ","
            }
        }
        ordinary.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_shot() {
    // let url = `http://localhost:8000/recipe/category/shot`
    let url = `https://isa-termproj.herokuapp.com/api/v1/category/shot`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let shot = document.getElementById('response');
        shot.innerHTML = ""
        shot.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            shot.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}"`;
            if (i > data.length - 1) {
                shot.innerHTML += ","
            }
        }
        shot.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_cocktail() {
    // let url = `http://localhost:8000/recipe/category/cocktail`
    let url = `https://isa-termproj.herokuapp.com/api/v1/category/cocktail`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let cocktail = document.getElementById('response');
        cocktail.innerHTML = ""
        cocktail.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            cocktail.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}"`;
            if (i > data.length - 1) {
                cocktail.innerHTML += ","
            }
        }
        cocktail.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}
// end filter

