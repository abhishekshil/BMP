function searchPG(){
    localStorage.setItem("searchterm", JSON.stringify({search: document.getElementById('searchterm').value}));
    location.href = 'search.html';
}