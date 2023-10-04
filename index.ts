class Add {
    words
    constructor(...words: string[]){
        this.words = words;
    }

    print(): void{
        let result = '';
        for (const item of this.words) {
            result += '$'+item;
        }
        console.log(result+'$');
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();