document.querySelector('#tbody').addEventListener('click', (event) => {
    console.log('clickk');
    let elemClick = event.target;
    if (elemClick.dataset.type == 'edit') {
        let id = elemClick.dataset.ref;
        console.log(id);
        fetch(`https://yourform.com.br/painel/post/list/${id}`, { method: 'GET' })
            .then(resp => resp.json())
            .then(json => openModal(json))
            .catch(error => console.log(error)); 
    }
});


function openModal(data){
    var formModal = document.querySelector('#form-modal');
    console.log(formModal);
    formModal._method.setAttribute('value','PUT');
    console.log(data);
    formModal._id.value = data._id;
    formModal.title.value = data.title;
    formModal.message.value = data.message;
    $('#insert').modal('show'); 
}

var config = { attributes: true};
var target = document.querySelector('body');
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(mutation.target.classList.value == ''){
            window.location.reload();
        }
    });    
});
observer.observe(target, config);