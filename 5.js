function* get_user_name(){
    let id = 0 ;
    while(true){
        yield `U00${id}`;
        id++;       
    }
    
}
const generator = get_user_name();
function next(){
    return generator.next().value;
}
console.log(next()); // U001
console.log(next()); // U002    
console.log(next()); // U003    