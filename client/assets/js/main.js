
// masih coba coba api

// $(document).ready(()=>{
//     const key = '563492ad6f917000010000014eb73d02e9134f9d8f70fa9d5b0c39cc'

//     $('#search-img').submit((event)=>{
//         event.preventDefault()

//         let search = $('#search-img').val()

//         $.ajax({
//             method:'GET',
//             beforeSend:function(xhr){
//                 xhr.setRequestHeader ("Authorization",key)
//             },
//             url:"https://api.pexels.com/v1/search?query="+search+"&per_page=1",
//             sucess:function(data){
//                 console.log(data)
//             },
//             error:function(err){
//                 console.log(err)
//             }
//         })
//     })
        
// })