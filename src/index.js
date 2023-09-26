unction fetchCatByBreed(id) {
const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;
    const api_key = "live_zpHZJryc8jZSMOKlS0o6oC7RtCLwTPfisNLPVimSooL3DRtQQiHyprH6BEG5hGjJ"
  return  fetch(`${url}?api_key=${api_key}`)
  .then(response => {
    if(!response.ok) {
        throw new Error (response.statusText)
    }
    return response.json();
  })
  .then(resalt => {
    fetchCatBy(resalt)
  })
  .catch(error => {
    console.log(error)
  });
}