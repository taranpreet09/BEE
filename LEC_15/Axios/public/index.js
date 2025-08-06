console.log(axios)
async function getComment(URL){
//     axios.get(URL).then((data)=>{
//     console.log(data)
//     })
// .catch(err=>console.log(err))
try{
    let comments=await axios.get(URL)
    console.log(comments);
}
catch(err){
    console.log(err);
}

}
getComment("http://jsonplaceholder.typicode.com/comments");

//function to add new blog
addBlog("http://localhost:4000/blog","first blog","this is my first blog");
async function addBlog(URL, title, description) {
    try{
         let newBlog={
        title: title,
        description: description

    }
let response=await axios.post(URL, newBlog)
console.log

    } catch (error)
{
    console.error("Error adding blog");
}   
    }