  const menu = document.querySelectorAll('.list-item');

  menu.forEach( text =>{
    text.addEventListener('click', () => {
      const content = text.querySelector('.list-content');
      content.classList.toggle('.active');

      if(content.classList.contains('.active')){
        content.style.height=content.scrollHeight + 'px';
      }else{
        content.style.height='0px';
      }
      }
    );
  });
