
const result = document.querySelector(".result")


const fetchProducts = async () => {
  try {
    const {data} = await axios.get("/api/1-airtable");
    console.log(data);
  } catch (error) {
    result.innerHTML=`<h4>yooooooo</h4>`
    
  }
}
fetchProducts()