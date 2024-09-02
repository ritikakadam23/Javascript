



async function fetchInfo(){
    let data = await fetch('https://randomuser.me/api/')
    // console.log(data)
    let info = await data.json();
    let storeData = info.results;
    // console.log(storeData)
    let random =  Math.floor(Math.random()*storeData.length);
    let randomData = storeData[random]
    console.log(randomData)

    let userInfo = `${randomData.name.title}.  ${randomData.name.first}  ${randomData.name.last}`
    let location = `${randomData.location.street.number} -  ${randomData.location.street.name}`
    let picture = randomData.picture.large ;

    document.getElementById('name').innerText = userInfo;
    document.getElementById('gender').innerText = randomData.gender;
    document.getElementById('phone').innerText = randomData.phone;
    document.getElementById('email').innerText = randomData.email;
    document.getElementById('location').innerText = location;
    document.getElementById('picture').src = picture

}

fetchInfo()