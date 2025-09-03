 //    <!-- destaques perfil  --> 
    
  
        const modalContainer = document.getElementById("modalContainer");
        const modalImage = document.getElementById("modalImage");
        let currentHighlightIndex = 0;
        let currentHighlightImages = [];
      
        const highlightDetails = {

            "Full Stack": ["imagens/destaques/img/full-stack/1.webp", "imagens/destaques/img/full-stack/2.png","imagens/destaques/img/full-stack/3.jpeg", "imagens/destaques/img/full-stack/4.jpg","imagens/destaques/img/full-stack/5.webp"],
           
           
            "Backend": ["imagens/destaques/img/backend/1.webp", "imagens/destaques/img/backend/2.webp", "imagens/destaques/img/backend/3.webp", "imagens/destaques/img/backend/4.jpg","imagens/destaques/img/backend/5.jpeg","imagens/destaques/img/backend/6.webp"],

        
            "Frontend": ["imagens/destaques/img/frontend/1.webp", "imagens/destaques/img/frontend/2.webp","imagens/destaques/img/frontend/3.webp", "imagens/destaques/img/frontend/4.webp","imagens/destaques/img/frontend/5.webp"],

            
            "Projetos": ["https://via.placeholder.com/300?text=Projetos+1", "https://via.placeholder.com/300?text=Projetos+2"],

            "Amigos": [ "imagens/destaques/img/friends/2.JPG","imagens/destaques/img/friends/3.JPG", "imagens/destaques/img/friends/4.JPG","imagens/destaques/img/friends/5.JPG","imagens/destaques/img/friends/6.JPG","imagens/destaques/img/friends/7.JPG","imagens/destaques/img/friends/8.JPG","imagens/destaques/img/friends/9.JPG","imagens/destaques/img/friends/10.jpg","imagens/destaques/img/friends/11.jpg","imagens/destaques/img/friends/12.jpg","imagens/destaques/img/friends/14.jpg","imagens/destaques/img/friends/15.JPG","imagens/destaques/img/friends/17.JPG","imagens/destaques/img/friends/18.JPG"],

            "Inspiração": ["imagens/destaques/img/viagens/1.JPEG","imagens/destaques/img/viagens/2.jpg","imagens/destaques/img/viagens/3.jpg","imagens/destaques/img/viagens/4.jpg","imagens/destaques/img/viagens/5.jpg","imagens/destaques/img/viagens/6.jpg","imagens/destaques/img/viagens/7.jpg","imagens/destaques/img/viagens/16.jpg","imagens/destaques/img/viagens/17.JPEG"]
        };

        function openHighlightModal(type) {
            currentHighlightImages = highlightDetails[type];
            currentHighlightIndex = 0;
            modalImage.src = currentHighlightImages[currentHighlightIndex];
            modalContainer.classList.add("active");
        }

        function closeHighlightModal() {
            modalContainer.classList.remove("active");
        }

        function nextHighlightImage() {
            currentHighlightIndex = (currentHighlightIndex + 1) % currentHighlightImages.length;
            modalImage.src = currentHighlightImages[currentHighlightIndex];
        }

        function previousHighlightImage() {
            currentHighlightIndex = (currentHighlightIndex - 1 + currentHighlightImages.length) % currentHighlightImages.length;
            modalImage.src = currentHighlightImages[currentHighlightIndex];
        }
   

   

   