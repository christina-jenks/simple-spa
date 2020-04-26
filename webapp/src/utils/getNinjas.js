export default async function getNinjas() {
    let json = []
    // oh neat, we can wrap async await in try catch like regular js
    try{
        // Verify the response is ok (fetch doesn't error out on 404 or 5xx)
        const response = await fetch("https://api.tretton37.com/ninjas");
        if(!response.ok) {
            throw `Api error: ${response.statusText}`; // not sure what their errors look like...
        }
        json = await response.json();
    } catch(e) {
        console.log(e);
    } 
    return json;
}