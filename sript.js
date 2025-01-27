function ativeacc(){
    document.getElementById("boby").classList.toggle("active_acc")
    document.getElementById("plus_icon").classList.toggle("icon")
    document.getElementById("minus_icon").classList.toggle("icon")
}
function done(){
    let clr = document.getElementById("clr").value
    let wdht = document.getElementById("wdth").value
    let hght = document.getElementById("hght").value

    document.getElementById("box").style.background=clr
    document.getElementById("box").style.width=`${wdht}px`
    document.getElementById("box").style.height=`${hght}px`

}