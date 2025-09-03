 //    <!-- projectos   --> 


    function showModal(id) {
        document.getElementById(id).style.display = 'flex';
    }
    function closeModal(event, id) {
        if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
            document.getElementById(id).style.display = 'none';
        }
    }

