// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(arr[9]);
//
// let obj = {
//     username: 'JOHN',
//     followers: [
//         {
//             username: "alex"
//         },
//         {
//             username: "John",
//             followers: [
//                 {
//                     username: "jack"
//                 },
//                 {
//                     username: "jack2"
//                 },
//                 {
//                     username: "jack"
//                 }
//             ]
//         }
//     ]
// }
//
// console.log(obj.followers[1].followers[1].username)
//
//

const array = [
    {
        username: 'Jack',
        full_name: "Jack Barbaro"
    },
    {
        username: 'Jack',
        full_name: "Jack Barbaro"
    },
    {
        username: 'Jack',
        full_name: "Jack Barbaro"
    },
    {
        username: 'Jack',
        full_name: "Jack Barbaro"
    },
    {
        username: 'Jack',
        full_name: "Jack Barbaro"
    },


]

  // i = i + 1
// console.log(i)

// for(let i = 1; i <  array.length; i++){
//     console.log(array[i])
// } // индексы

// for(let user of array){
//     console.log(user)
// }

// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
//     key8: 'b8',
//     key9: 'b9',
//     key10: 'b10',
// }
//
// for(let key in obj){
//     console.log(obj)
// }
// let i = 0;
//
// while(i < 5) {
//     console.log("hello!")
// }

const users = [
    {
        username: "jack",
        salary: 50
    },
    {
        username: "john",
        salary: 5000
    },
    {
        username: "Beka",
        salary: 10000
    }
]
const filteredUsers = users.filter(user => user.salary > 500)
console.log(filteredUsers);

//
// for(let user of users){
//     if(user.salary > filteredUsers){
//         console.log(user)
//     }
// }

