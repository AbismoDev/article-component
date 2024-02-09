let shareDesktop = document.getElementById('shareDesktop')
let shareMobile = document.getElementById('shareMobile')
let modalDesktop = document.getElementById('modalDesktop')
let modalMobile = document.getElementById('modalMobile')

const modalOpenOrClose = () =>{    
    if(window.innerWidth > 720){
        openModalDesktop()
    }else{
        openModalMobile()
    }
}

const openModalDesktop = () =>{
    if(!modalDesktop.classList.contains('open')){
        modalDesktop.classList.add('open')
        shareDesktop.classList.add('share-active')
    }else{
        modalDesktop.classList.remove('open')
        shareDesktop.classList.remove('share-active')
    }
}

const openModalMobile = () =>{
    if(!modalMobile.classList.contains('open')){
        modalMobile.classList.add('open')
        shareMobile.classList.add('share-active')
    }else{
        modalMobile.classList.remove('open')
        shareMobile.classList.remove('share-active')
    }    
}

//This event/function closes the modal if it is open while the window is resized
window.addEventListener('resize', () =>{
    if(modalMobile.classList.contains('open') || modalDesktop.classList.contains('open')){
        //Modal Mobile
        modalMobile.classList.remove('open')
        shareMobile.classList.remove('share-active')
        //Modal Dektop
        modalDesktop.classList.remove('open')
        shareDesktop.classList.remove('share-active')
    }
})