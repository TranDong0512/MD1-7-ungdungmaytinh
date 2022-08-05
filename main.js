function reset() {
    document.getElementById("main").value = ""
}

function input(bien){
    document.getElementById('main').value += bien
}
function kq() {
    let ketqua = document.getElementById("main").value
    document.getElementById("main").value =eval(ketqua)
}