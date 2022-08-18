import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Selina',
            email:'selina@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true
        },
        {
            name:'Peng',
            email:'peng@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false
        },
        {
            name:'tony',
            email:'tony@example.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false
        },
    ],
    products:[
        {
         // _id:'1',
        name: 'Hanbok-white-song',
        slug:'hanbok-white-song',
        category:'Dress',
        image:'/images/white.png',
        price:120,
        stock:10,
        brand:'artist',
        rating:3.5,
        numberReviews:11,
        description:'good design, high quality',
    },
        {
            // _id:'2',
            name: 'Hanbok-rice-song',
            slug:'hanbok-rice-song',
            category:'Dress',
            image:'/images/rice2.png',
            price:88,
            stock:20,
            brand:'artist',
            rating:4.5,
            numberReviews:19,
            description:'good design, high quality',
        },
        {
            // _id:'3',
            name: 'Hanbok-red-song',
            slug:'hanbok-red-song',
            category:'Dress',
            image:'/images/red.png',
            price:108,
            stock:15,
            brand:'artist',
            rating:4.5,
            numberReviews:14,
            description:'good design, high quality',
        },
        {
            // _id:'4',
            name: 'Hanbok-pale-green',
            slug:'hanbok-pale-green',
            category:'Dress',
            image:'/images/palegreen.png',
            price:80,
            stock:25,
            brand:'artist',
            rating:4.5,
            numberReviews:20,
            description:'good design, high quality',
        },
        {

            name: 'Tian-pink-shoes',
            slug:'tian-pink-shoes',
            category:'Shoes',
            image:'/images/pinkshoe.png',
            price:118,
            stock:17,
            brand:'tian',
            rating:4.5,
            numberReviews:8,
            description:'perfect for wedding, comfortable and shinning',
        },
        {

            name: 'Tian-champagne-shoes',
            slug:'tian-champagne-shoes',
            category:'Shoes',
            image:'/images/chamshoe.png',
            price:105,
            stock:13,
            brand:'tian',
            rating:4.5,
            numberReviews:22,
            description:'comfortable,prefect design',
        },
    ],
};
export default data;