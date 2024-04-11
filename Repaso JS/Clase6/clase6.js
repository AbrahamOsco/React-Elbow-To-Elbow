let getNameAsync = async (idPos) => {
    try{
        let resPos = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPos}`)
        let post = await resPos.json()
        console.log(post);
        let resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        let user = await resUser.json();
        console.log(user);
        document.write(`El posteo Asyn/Await ${idPos} lo escribio: ${user.name} Vive en : ${user.address.street}  `)

    }catch(e){
        console.log("Error: ",e );
    }
} 

let exampleThen = (idPos) => {
    try{
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPos}`)
        .then( (res) => { console.log(res); 
            return res.json() })
        .then( (post) => { 
            return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        }).then( (user) => { 
           console.log("user", user);
            return user.json()
        }).then( (userCont) => {
            console.log(userCont);
            document.write(`El posteo THEN ${idPos} lo escribio: ${userCont.name} Vive en : ${userCont.address.street}  `)
        } )
    }catch(e){
        console.log("Error: ",e );
    }
} 

let exampleAxios = async(idPos) => {
    try{
        let resPos = await axios(`https://jsonplaceholder.typicode.com/posts/${idPos}`)
        console.log("AXIOS POS:",resPos);
        let resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPos.data.userId}`)
        console.log("AXIOS USER", resUser.data.name);
        document.write(`El posteo Axios ${idPos} lo escribio: ${resUser.data.name} Vive en : ${resUser.data.address.street} `)
    }catch(e){
        console.log(`Error is ${e}`);
    }

}

getNameAsync(2)
exampleThen(3)
exampleAxios(30)

