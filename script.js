const greenBtn = document.querySelector('#green_btn'), Modal = document.querySelector(".Modal"), textContent = document.querySelector('.text-content'), closeModal = document.querySelector('.closeModal'), cancelBtn = document.querySelector('.cancelBtn'), deleteBtn = document.querySelector('.deleteBtn');

greenBtn.addEventListener("click", ()=>{
    textContent.style.display = "none";
    Modal.style.display = 'flex';
});

let closeModalAndRestoreContent = () =>{
    textContent.style.display = "block";
    Modal.style.display = 'none';
}

cancelBtn.addEventListener('click', closeModalAndRestoreContent);
deleteBtn.addEventListener('click', closeModalAndRestoreContent);
closeModal.addEventListener('click', closeModalAndRestoreContent);

