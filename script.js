
fetch('./usuario.json')
.then(function (resposta) {
    resposta.json()
        .then(function(dados){
            console.log(dados)

            const nome = dados[0].nome
            console.log(nome)

            localStorage.setItem("nome", nome)

            document.querySelector('#usuario').innerText = dados[0].usuario
            document.querySelector('#local').innerText = dados[0].local
            document.querySelector('#cadastro').innerText = dados[0].cadastro

            document.querySelector('#quantidade-tweets').innerText = dados[0].quantidade_tweets
            document.querySelector('#seguindo').innerText = dados[0].seguindo
            document.querySelector('#seguidores').innerText = dados[0].seguidores
            document.querySelector('#likes').innerText = dados[0].likes
            document.querySelector('#link').innerText = dados[0].link
        })
    })

document.querySelector('#nome').innerText = localStorage.getItem("nome")


let card = ''

fetch('./follow.json')
.then(function(resposta){
resposta.json()
    .then(function(dados2){
        console.log(dados2)

        dados2.followers.map(function (elemento) {
        
            card += `
            <li>
              <div class="tweet-content">
                <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${elemento.nome}</strong>
                  </span>
                  <span class="username">${elemento.usuario}</span>
                </div>

                <button class="btn btn-follow">Follow</button>
              </div>
            </li>
            `
            const span = document.querySelector('#tweet-list')
            span.innerHTML = card
        })  
    })
})


let card2 = ''

fetch('./tweets.json')
.then(function(resposta){
resposta.json()
    .then(function(dados3){
        console.log(dados3)

        dados3.tweets.map(function (elemento) {
        
            card2 += `
            <ol class="tweet-list">
                <li class="tweet-card">
                <div class="tweet-content">
                    <div class="tweet-header">
                    <span class="fullname">
                        <strong>${elemento.nome}</strong>
                    </span>
                    <span class="username">${elemento.usuario}</span>
                    <span class="tweet-time">- ${elemento.data}</span>
                    </div>
                    <a>
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                    </a>
                    <div class="tweet-text">
                    <p class="" lang="es" data-aria-label-part="0"> ${elemento.mensagem} <a href="https://t.co/dqg5hVQXA0"
                        class="twitter-timeline-link" target="_blank"><span
                            class="">https://www.mozilla-hispano.org/</span></a> <a href=""
                        class="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href=""
                        class="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                        <a href="" class="twitter-hashtag" dir="ltr"></a>
                    </p>
                    </div>
                    <div class="tweet-footer">
                    <a class="tweet-footer-btn">
                        <i class="octicon octicon-comment" aria-hidden="true"></i><span> ${elemento.comentarios}</span>
                    </a>
                    <a class="tweet-footer-btn">
                        <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${elemento.compartilhamentos}</span>
                    </a>
                    <a class="tweet-footer-btn">
                        <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${elemento.likes}</span>
                    </a>
                    </div>
                </div>
                </li>
          </ol>
          `
            const span = document.querySelector('#tweets')
            span.innerHTML = card2
        })
    })
})
