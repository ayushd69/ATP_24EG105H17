class Book
{
    title;
    author;
    pages;
    isavailable;
    constructor(title,author,pages,isavailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isavailable=isavailable;
    }
    borrow()
    {
        return this.isavailable=false
    }
    returnBook()
    {
       return this.isavailable=true
    }
    getInfo()
    {
        return `${this.title} ${this.author} ${this.pages}`
    }
    isLongBook()
    {
        if(this.pages>300)
        {
            return true
        }
        else{
            return false
        }
    }

}

let obj1=new Book("harry1","harry",355,true)
let obj2=new Book("harry2","ayu",255,true)
console.log(obj1.getInfo())


