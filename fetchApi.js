

//===============================================================================================


// async function API(url){
//   const baseUrl = "https://reqres.in/api/";
//   const response = await fetch(baseUrl + url);
//   const data = await response.json();
//   return data;
// }

// API('users').then(data => {
//   console.log(data)
// })

// let data = API("users") // returns a promise 
// console.log(data)

//===============================================================================================


// const url = "https://reqres.in/api/users"
// const url2 = "https://reqres.in/api/register"
// dataPost = {email: "eve.holt@reqres.in", password: "pistol"}

// const postData = (url, data) => {
//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: data ? {"Content-Type": "application/json"} : {}
//   }).then(response => {
//     return response.json()
//   })
//   .then(responseData => {
//     console.log(responseData)
//   })
// }

// const getData = (url) => {
//   fetch(url).then(response => {
//     if(!response.ok){
//       throw Error("ERROR HITTING ENDPOINT")
//     } else {
//       return response.json()
//     }
//   })
//   .then(responseData => {
//     console.log(responseData)
//     postData(url2, dataPost)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
// }

// getData(url)


//===============================================================================================

const url = "https://reqres.in/api/users"
const url2 = "https://reqres.in/api/register"
const url3 = "https://jsonplaceholder.typicode.com/users"
const url4 = "https://jsonplaceholder.typicode.com/posts/1"

const postDataPack = { 
  email: "eve.holt@reqres.in",
  password: "pistol"
 }
const putMethodToJSONPlaceHolder = {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {
      "Content-Type": "application/json",
      // "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e"
    } : {}
  }).then(response => {
    if (!response.ok) {
      return response.json().then(errResData => {
        const error = new Error('Something went wrong!');
        error.data = errResData;
        throw error;
      });
    }
    return response.json()
  })
}

const getHubData = () => {
  sendHttpRequest("GET", url)
  .then((data)=>{
    console.log(data)
    // data.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    // data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    // console.log("DATA: ", data)

    
    // let unsortedData = data.data;
    // let sortedData = unsortedData.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
    // console.log("SORTED DATA: ", sortedData)




    sendHttpRequest("POST", url2, postDataPack)
    .then((res)=>{
      console.log(res)
    })
  })
}

getHubData()





// const getData = () => {
//   sendHttpRequest("GET", "https://reqres.in/api/users")
//   .then(responseData => {
//     console.log(responseData)
//   })
//   .catch(err => {
//     console.log(err, err.data);
//   });
// }

// const postData = (method, url, dataPack) => {
//   sendHttpRequest(method = "POST", url = "https://reqres.in/api/register", dataPack = { email: "eve.holt@reqres.in", password: "pistol" })
//   .then(responseData => {
//     console.log(responseData)
//   })
//   .catch(err => {
//     console.log(err, err.data);
//   });
// }

// getData()
// postData()


// =================================================================================================


// const url1 = "https://jsonplaceholder.typicode.com/posts/1"

// const getHubData = async (url) => {
//   let response = await fetch(url);
//   let users = await response.json()
//   return users
// } 

// getHubData(url1).then((users)=>{
//   console.log(users)
// })

// ==================================================================================================
