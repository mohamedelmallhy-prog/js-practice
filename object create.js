// let user1 = {
//     name: ' mohamwd elmallahy ',

//     getName: function(){
//         return ' hello  ${user1.name}' ;
//     }
// }

// let user2 =Object.create(user1);
// console.log(user2.name);



// انا لو عايز اعدل 
let user1 = {
    name: ' mohamwd elmallahy ',

    getName: function(){
        return ' hello  ${user1.name}' ;
    }
}

let user2 =Object.create(user1);
user2.name = '  mohamwd  Adel ';
console.log(user2.name);