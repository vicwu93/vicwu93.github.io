function Recipe(title, servings, ingredients) {
    this.t = title, this.s = servings, this.i = ingredients;
    this.print = function() {
        document.write("Title: ", this.t, "<br><br>", "Serves: ", this.s, "<br><br>Ingredients: <br><br>");
        for (let i = 0; i < ingredients.length; i++) {
            document.write(this.i[i], "<br><br>");
        };
    }
}

obj = new Recipe ("Chicken Cacciatore", 2, ["cinnamon", "lettuce", "onion"] );
obj.print();
