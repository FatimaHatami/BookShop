'use strict';


const getData=()=>{
    let page=document.body.id;
    switch(page){
        case 'login':
            loginToAccount();
            break;
        case 'products':
            showProductsPage();
            break;
        case 'add-product-page':
            addProductPage();
            break;
        case 'product':
            showProductPage();
            break;
        default:
            console.log('nothing');
            break;
}
}
// **********************************************USER LOGIN PAGE*****************************************8


////////VARIABLES//////////////////
// login page
const username= document.getElementById('username');
const password=document.getElementById('password');
const loginBtn=document.getElementById('login--btn');
const errorMessage=document.getElementById('login-msg');
// products page
const productsContainer=document.getElementById('products-container');
const addProductIcon=document.getElementById('add-product');
// product page
const productName=document.getElementById('p-name');
// add product page
const addProductBtn=document.getElementById('add-product-btn');
const booksName=document.getElementById('name');
const booksAuthor=document.getElementById('author');
const booksPub=document.getElementById('pub');
const booksPrice=document.getElementById('books-price');
const booksImageSrc=document.getElementById('books-img');
const booksDesc=document.getElementById('desc');

//////////OBJECTS//////////////

// users
const users={
    username:'admin',
    password:'admin'
}
// products
const products=[
    {
        name:'کتابخانه نیمه شب',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'90.000',
        imgSrc:'files/p1.jpg',
        author:'مت هیگ',
        pub:'کوله پشتی'
    },
    {
        name:'هر دو در نهایت می میرند',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'99.000',
        imgSrc:'files/p2.jpg',
        author:'آدام سیلورا',
        pub:'نشر نون'
    },
    {
        name:'مغازه خودکشی',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'38.000',
        imgSrc:'./files/p3.jpg',
        author:'ژان تولی',
        pub:'نشر چشمه'
    },
    {
        name:'بی حد و مرز',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'90.000',
        imgSrc:'files/p4.jpg',
        author:'جیم کوئیک',
        pub:'نشر ملیکان'
    },
    {
        name:'پادشکننده',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'95.000',
        imgSrc:'files/p5.jpg',
        author:'نسیم نیکلاس طالب',
        pub:'نشر نوین'
    },
    {
        
        name:'هنر ظریف رهایی از دغدغه ها',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'75.000',
        imgSrc:'files/p6.jpg',
        author:'مارک منسن',
        pub:'نشر ملیکان'
    },
    {

        name:'نیمه تاریک وجود',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'60.000',
        imgSrc:'files/p7.jpg',
        author:'دبی فورد',
        pub:'حمیدا'
    },
    {
        name:'سرگذشت ندیمه',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'67.000',
        imgSrc:'files/p8.jpg',
        author:'مارگارت اتوود',
        pub:'جنگل'
    },
    {
        name:'سکوت',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'89.000',
        imgSrc:'files/p9.jpg',
        author:'سوزان کین',
        pub:'کتابسرای تندیس'
    },
    {
        name:'قمارباز',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'59.000',
        imgSrc:'files/p10.jpg',
        author:' فئودور داستایفسکی',
        pub:'نشر چشمه'
    },
    {
        name:'یکی از ما دروغ می گوید',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'80.000',
        imgSrc:'files/p11.jpg',
        author:'کارن.ام مک منس',
        pub:'کوله پشتی'
    },
    {
        name:'خانه ما',
        desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
        price:'100.000',
        imgSrc:'files/p12.jpg',
        author:'لوئیز کندلیش',
        pub:'کوله پشتی'
    },
];


const productsFromStorage=JSON.parse(window.localStorage.getItem('product'));

// USER LOGIN FUNCTION
const loginToAccount=function(){
    loginBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(username.value==users.username && password.value==users.password){
            window.location.href='./products.html';
        }
        else{
            errorMessage.textContent="نام کاربری یا رمز عبورتون اشتباهه";
        }
    });  

    window.localStorage.setItem('product',JSON.stringify(products));
}
// ****************************************************USER LOGIN PAGE END*********************************************

// ********************************************************PRODUCTS PAGE **************************************************
const showProductsPage=function(){
// SHOW PRODUCTS FUNCTION
const showProducts=(products)=>{
    // STORING PRODUCTS IN LOCAL STORAGE
    products.map((p)=>{
        const product=`
                <div class="product">
                    <div class="product--delete">
                        <a class="delete-product--btn"><img src="./files/bin.png"> </a>
                    </div>
                    <div class="product-box">
                        <div class="product--image">
                            <img src="${p.imgSrc}" alt=${p.name}>
                        </div>
                        <div class="product--info">
                            <span class="product--name">
                             ${p.name}
                            </span>
                            <p class="product--description">
                             ${p.desc}
                            </p>
                        </div>
                        <div class="products--details">
                            <div class="product--price">
                                <span> ${p.price} تومان </span>
                            </div>
                            <div class="product--buy">
                                <a href="#">افزودن به سبد خرید</a>
                            </div>
                        </div>
                    </div>
                </div>`;
                productsContainer.insertAdjacentHTML('beforeend', product);
    });
}

// SHOW PRODUCTS
showProducts(productsFromStorage);
const addProduct=()=>{
    addProductIcon.addEventListener('click',function(){
        window.location.href='./addProduct.html';
    });
};
addProduct();

const deleteProduct=()=>{
    const deleteProductBtn=document.querySelectorAll('.delete-product--btn');
    deleteProductBtn.forEach((deleteBtn,i)=>{
        deleteBtn.addEventListener('click',function(){
            const productsFromLocal=JSON.parse(window.localStorage.getItem('product'));
            if(confirm("آیا از حذف محصول اطمینان دارید؟")){
                productsFromLocal.splice(i,1);
                window.localStorage.setItem('product',JSON.stringify(productsFromLocal));
                console.log(productsFromLocal);
            }
            
        })
    })
}


deleteProduct();
// *********************************************** PRODUCTS PAGE END *********************************************



let children=[].slice.call(document.getElementsByClassName('product-box'));
children.forEach((child,i) => {
    child.addEventListener('click',function(){
        window.location.href=`./product.html?name=${i}`;
    });
    
});
}
// **************************************************** SHOW PRODUCT PAGE DETAILS ************************************
const showProductPage=function(){

    const urlParams=new URLSearchParams(window.location.search);
    const pId=urlParams.get('name');
    const result=JSON.parse(window.localStorage.getItem('product'));
    console.log(result);
    console.log(pId);
    const productFromLStorage=result.find((p,id)=>id==pId);
    const productContainer=document.getElementById('product-container');
    console.log(productFromLStorage);
    const showProductDetails=(productFromLStorage)=>{
       const productDetails=`
            <div class="product--details">
                <div class="product--img">
                    <img src=${productFromLStorage.imgSrc} alt=${productFromLStorage.name}>
                </div>
                <div class="product--info">
                    <div class="product--name">
                        <h1><strong>${productFromLStorage.name}</strong></h1>
                    </div>
                    <div class="books--author">
                        <span>  <strong>نام نویسنده :</strong></span>
                        <span>${productFromLStorage.author}</span>
                    </div>
                    <div class="books--pub">
                        <span><strong>نام انتشارات :</strong></span>
                        <span>${productFromLStorage.pub}</span>
                    </div>
                    <div class="books--price">
                        <span><strong><span>قیمت:</span></strong></span>
                        <span>${productFromLStorage.price} تومان</span>
                    </div>
                    <div class="product--buy">
                    <a href="#">افزودن به سبد خرید</a>
                    </div>
                </div>
            </div>
            <div class="product--gist">
                    <span><strong>خلاصه ای از کتاب</strong></span>
                    <p>${productFromLStorage.desc}</p>
                </div>
        </div>
        `;
        productContainer.insertAdjacentHTML('afterbegin',productDetails);
    }
    showProductDetails(productFromLStorage);
}

const addProductPage=function(){
    addProductBtn.addEventListener('click',function(){
        if(booksName.value&& booksAuthor.value&&booksDesc.value&& booksDesc.value&& booksImageSrc.value&&booksPrice.value&& booksPub.value){
            const productsFromStorage=JSON.parse(window.localStorage.getItem('product'));
        const imgAdress=`./files/${booksImageSrc.value.split('\\').slice(-1).join('\\')}`;
        console.log(imgAdress);
        const productsLength=JSON.parse(window.localStorage.getItem('product')).length;
        console.log(productsLength);
        // console.log(productsFromStorage);
        productsFromStorage.push({
            name:booksName.value,
            desc:booksDesc.value,
            price:booksPrice.value,
            imgSrc:imgAdress,
            author:booksAuthor.value,
            pub:booksPub.value
        })
      window.localStorage.setItem('product',JSON.stringify(productsFromStorage));
      console.log(JSON.parse(window.localStorage.getItem('product')));
        }
    });
}

getData();

