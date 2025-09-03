//    <!-- comentario -->

        document.addEventListener("DOMContentLoaded", carregarComentarios);

        function adicionarComentario() {
            const usuarioNome = document.getElementById("usuario").value.trim();
            const comentarioTexto = document.getElementById("comentario").value.trim();
            
            if (usuarioNome === "" || comentarioTexto === "") {
                alert("Por favor, preencha seu nome e comentário.");
                return;
            }
            
            const comentarioElemento = criarComentario(usuarioNome, comentarioTexto);
            document.getElementById("lista-comentarios").appendChild(comentarioElemento);
            
            document.getElementById("usuario").value = "";
            document.getElementById("comentario").value = "";
            
            salvarComentarios();
        }

        function criarComentario(nome, texto) {
            const comentarioElemento = document.createElement("div");
            comentarioElemento.classList.add("comentario");
            
            const nomeElemento = document.createElement("strong");
            nomeElemento.textContent = nome;
            
            const textoSpan = document.createElement("span");
            textoSpan.textContent = texto;
            
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = function() {
                comentarioElemento.remove();
                salvarComentarios();
            };
            
            comentarioElemento.appendChild(nomeElemento);
            comentarioElemento.appendChild(textoSpan);
            comentarioElemento.appendChild(deleteBtn);
            
            return comentarioElemento;
        }

        function salvarComentarios() {
            const comentarios = [];
            document.querySelectorAll(".comentario").forEach(comentario => {
                const nome = comentario.querySelector("strong").textContent;
                const texto = comentario.querySelector("span").textContent;
                comentarios.push({ nome, texto });
            });
            localStorage.setItem("comentarios", JSON.stringify(comentarios));
        }

        function carregarComentarios() {
            const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
            comentarios.forEach(({ nome, texto }) => {
                const comentarioElemento = criarComentario(nome, texto);
                document.getElementById("lista-comentarios").appendChild(comentarioElemento);
            });
        }
    