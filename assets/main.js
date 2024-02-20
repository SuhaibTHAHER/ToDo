const btn = document.querySelector('.add');
const input = document.querySelector('.forms input');
const toDo = document.querySelector('.toDo');
btn.onclick = function(){
    if(input.value.length == 0){
        alert('please enter a task');
    }else{
        toDo.innerHTML += `
        <div class="list">
        <input type="checkbox" class="checkbox">
        <label>${input.value}</label>
    </div>
        `;
}
};