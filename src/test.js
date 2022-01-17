let arr=[ {id: 'GtaAhAU76Fg', created_at: '2021-10-01T14:34:14-04:00', updated_at: '2021-11-29T12:31:24-05:00', promoted_at: null, width: 4000},
 {id: '9WBFwxLffcQ', created_at: '2021-11-29T08:21:15-05:00', updated_at: '2021-11-29T20:56:02-05:00', promoted_at: '2021-11-29T20:56:02-05:00', width: 2984},
 {id: '7HNgJGfZFYg', created_at: '2021-11-29T07:39:36-05:00', updated_at: '2021-11-29T20:40:02-05:00', promoted_at: '2021-11-29T20:40:02-05:00', width: 4000},
 {id: 'WBFwxLffcQ', created_at: '2021-11-29T08:21:15-05:00', updated_at: '2021-11-29T20:56:02-05:00', promoted_at: '2021-11-29T20:56:02-05:00', width: 2984},
 {id: 'BFwxLffcQ', created_at: '2021-11-29T08:21:15-05:00', updated_at: '2021-11-29T20:56:02-05:00', promoted_at: '2021-11-29T20:56:02-05:00', width: 2984},
]
// let chunk;
// while (arr.length > 0) {

//    chunk = arr.splice(0,3);

//    console.log(chunk)
// }

// chunk.map((data,i)=>{
//  console.log(data)
// })

function chunkArrayInGroups(arr, size) {
    var myArray = [];
    for(var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i+size));
    }
    return myArray;
  }
  let test=chunkArrayInGroups(arr, 3);
  // console.log("test", test)
  let d;
  test.map((data, i)=>{
    d=data;
    d.reverse().map((d1)=>{
        console.log("d1",d1)
    })
  })
  








//   <div className=" container gallery mt-5">
          
              
                 
//   {
//       (this.props.sort)?
//       this.props.images.reverse().map((image,i)=>(
//         <div className = " pics ">
//         <img  key={image.id}
//         onClick ={()=>this.fullImage(image.urls.small)}
//         src={image.urls.small} 
//         alt="unplash"
//         style={{width:"100%", 
//         // height:"auto"
//     }}
//         // width="250px" 
//         height="300px"
//         />
//         </div>
//     ))
//       :
// this.props.images.map((image,i)=>(
//     <div className = "pics ">
//     <img  key={image.id}
//     onClick ={()=>this.fullImage(image.urls.small)}
//     src={image.urls.small} 
//     alt="unplash"
//     style={{width:"100%", 
//     // height:"auto"
// }}
//     // width="250px" 
//     height="300px"
//     />
//     </div>
// ))
// }





// </div>

