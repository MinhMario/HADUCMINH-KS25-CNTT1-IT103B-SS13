let watchList=[
    {id:"M001",
    title:"Inception",
    director:"Christopher Nolan",
    genre:"Horror",
    year:2013,
    rating:8.5,
    },
    {id:"M002",
    title:"Parasite",
    director:"Bong Joon-ho",
    genre:"Drama",
    year:2018,
    rating:8.9,
    },
    {id:"M003",
    title:"Bố già",
    director:"Trấn Thành",
    genre:"Comedy",
    year:2022,
    rating:3.6,
    },
    {id:"M004",
    title:"Mad Max",
    director:"Christopher Nolan",
    genre:"Action",
    year:2003,
    rating:8.4,
    },
    {id:"M005",
    title:"ABCD",
    director:"Bựa",
    genre:"Comedy",
    year:2026,
    rating:9.2,
    },
];
function addFilm(film){
    let id=prompt("Nhập mã phim cần thêm").toLowerCase();
    let idFlag=true;
    film.forEach(n=>{
        if(n.id.toLowerCase()==id){
            console.log("ID đã tồn tại, vui lòng chọn ID khác.")
            idFlag=false;
        }
    })   
    let title=prompt("Nhập tên phim").toLowerCase();
    let titleFlag=true;
    film.forEach(n=>{
        if(n.title.toLowerCase()==title){
            console.log("Phim này đã có trong watchlist");
            titleFlag=false;
        }})
    let year=+parseInt(prompt("Nhập năm của phim"));
    let yearFlag=true;
    if(year<1900||year>2031){
        console.log("Năm phát hành phải là số nguyên từ 1900 đến 2031.");
        yearFlag=false;
    }
    let rating=+parseFloat(prompt("Nhap rating"));
    let rateFlag=true;
    if(rating<1||rating>10){
        rateFlag=false;
        console.log("Điểm rating phải là số từ 1.0 đến 10.0." )
    }
    let genre=prompt("Nhap the loai phim").toLowerCase();
    let genreFlag=true;
     if(genre!="action"&&genre!="drama"&&genre!="sci-fi"&&genre!="comedy"&&genre!="horror"&&genre!="thriller"){
        console.log("The loai khong hop le");
        genreFlag=false;
    }
    if(idFlag==true&&titleFlag==true&&yearFlag==true&&rateFlag==true&&genreFlag==true){
        console.log(`Đã thêm phim ${title}-${year} vào watchlist`);
        film.push({id,title,year,rating,genre});
    }
}
function deleteFilm(film){
    let title=prompt("Nhập tên phim").toLowerCase();
    let confirm;
    let index;
    let flag=false;
    film.forEach(n=>{
        if(n.title.toLowerCase()==title){
            flag=true;
        }
        })    
    if(!flag){
        console.log('Khong co phim')
    }if(flag){
        confirm=parseInt(prompt("Có chắc chắn muốn xoá không(1/Đồng ý)(2/Không)"));
            switch(confirm){
                case 1:
                    console.log("Da xoa phim");
                    index=film.indexOf(title);
                    film.splice(index,1);
                    break;
                case 2:
                    console.log("Đã huỷ");
                    break;
                default:
                    console.log("Không hợp lệ");
                    break;
            }}
}
function viewWatchList(film){
    for(let i=0;i<film.length;i++){
        console.log(`${film[i].id}-${film[i].title}-${film[i].year}-${film[i].director}-${film[i].genre}-${film[i].rating}`);
    }
}
function updateFilm(film){
    let search=prompt("Tìm tên phim cần cập nhật").toLowerCase();
    let rateFlag=true;
    for(let i=0;i<film.length;i++){
        if(film[i].title.toLowerCase()==search){
            let rating=+parseFloat(prompt("Nhap rating"));
            if(rating<1||rating>10){
             rateFlag=false;
             console.log("Điểm rating phải là số từ 1.0 đến 10.0.");    
        }else{
             console.log(`Phim không có trong Watchlist ${search}`);
            return;             
    }
}     
    }
    if(rateFlag==true){
        film[i].rating=rating;
        console.log("Đã cập nhật phim");
    }
}
function searchFilm(film){
    let choice=+prompt(`1.Tìm kiếm theo title
        2.Tìm kiếm theo director`);
        let title;
        let director;
        switch(choice){
            case 1:
                let titleFlag=false
                 title=prompt("Nhập tên phim").toLowerCase();
                for(let i=0;i<film.length;i++){
                    if(film[i].title.toLowerCase()==title){
                        titleFlag=true;
                        console.log(`Tìm thấy phim ${title} đạo diễn:${film[i].director} thể loại:${film[i].genre} năm:${film[i].year} rating:${film[i].rating}`);
                    }
            }
            if(!titleFlag){
                console.log("Không tìm thấy phim");
            }
                break;
                case 2:
                    let directorFlag=false;
                 director=prompt("Nhập tên đạo diễn").toLowerCase();
                    for(let i=0;i<film.length;i++){
                        if(film[i].director.toLowerCase()==director){
                            directorFlag=true;
                            console.log(`Tìm thấy phim ${film[i].title} đạo diễn:${film[i].director} thể loại:${film[i].genre} năm:${film[i].year} rating:${film[i].rating}`);
                    }
                }
                if(!directorFlag){
                    console.log("Không tìm thấy đạo diễn")
                }
                    break;
                default:
                    console.log("Không hợp lệ")
                    break;
        }
}
function filterByGenre(film){
    let genre=prompt("Nhập thể loại phim").toLowerCase();
    let genreFlag=true;
    if(genre!="action"&&genre!="drama"&&genre!="sci-fi"&&genre!="comedy"&&genre!="horror"&&genre!="thriller"){
        console.log("The loai khong hop le");
        genreFlag=false;
    }else{
            if(film.genre.toLowerCase()==genre){
                let filterArr=film.filter(n=>n.genre.toLowerCase().includes(genre));
                console.log(filterArr);
        }
    }
    if(!genreFlag){
        console.log("Chua co phim the loai nay");
    }
}
function avgRatng(film){
    let total=film.reduce((acc,cur)=>{
        return acc=cur;
    },0);
    let avg=total/film.length.toFixed(1);
    console.log(`Điểm trung bình tất cả phim là ${avg}`);
}
function sortWatchList(film){
    let choice=+prompt(`1.Sắp xếp tăng dần
        2.Sắp xếp giảm dần`);
        switch(choice){
            case 1:
                let up=film.sort((a,b)=>{a.year-b.year})
                console.log(up);
                break;
               case 2:
                let down=film.sort((a,b)=>{b.year-a.year});
                break;
                default:
                    console.log("Khong hop le");
                    break;
        }
}
function checkGenre(film){
    let classic;
    let modern;
    let modernCount=0;
    let classicCount=0;
    film.forEach(n=>{
        if(n.year>2000){
            modernCount++;
        }else{
            classicCount++;
        }
    })
    modern=modernCount/film.length*100;
    classic=classicCount/film.length*100;
    console.log(`Phim cổ điển ${classic}%`);
    console.log(`Phim hiện đại ${modern}%`);
}
let choice;
    do{
choice=+prompt(`1.Thêm phim
    2.Xóa phim
    3.Hiển thị danh sách watchlist 
    4.Cập nhật thông tin phim 
    5.Tìm phim
    6.Lọc phim theo thể loại
    7.Tính điểm trung bình watchlist
    8.Sắp xếp watchlist theo năm phát hành
    9.Phân tích mức độ "cổ điển" vs "hiện đại" trong watchlist
    0.Thoát`)
    switch(choice){
        case 1:
            addFilm(watchList);
            break;
        case 2:
            deleteFilm(watchList);
            break;
        case 3:
            viewWatchList(watchList);
            break;
        case 4:
            updateFilm(watchList);
            break;
        case 5:
            searchFilm(watchList);
            break;
        case 6:
            filterByGenre(watchList);
            break;
        case 7:
            avgRatng(watchList);
            break;
        case 8:
            sortWatchList(watchList);
            break;
        case 9:
            checkGenre(watchList);
            break;
        case 0:
            console.log("Ket thuc");
            break;
            default:
                console.log(`Khong hop le`);
                break;
    }
    }while(choice!=0);

