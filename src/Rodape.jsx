import "./Rodape.css"
function Rodape(){
    return(
        <body>
          <div id="root"></div>
          <script type="module" src="/src/main.jsx"></script>
      
          <div class="content">
          </div>
              <footer id="myFooter">
                  <div class="container">
                      <div class="row">
                          <div class="col-sm-3">
                              <h5>INSTITUCIONAL</h5>
                              <ul>
                                  <li><a href="https://www.ifro.edu.br/">Parceiros</a></li>
                                  <li><a href="https://portal.ifro.edu.br/">Política de Privacidade</a></li>
                              </ul>
                          </div>
                          <div class="col-sm-3">
                              <h5>SOBRE NÓS</h5>
                              <ul>
                                  <li><a href="https://portal.ifro.edu.br/sobre-o-ifro">Informações da Empresa</a></li>
                                  <li><a href="https://portal.ifro.edu.br/fale-conosco">Contato</a></li>
                              </ul>
                          </div>
                          <div class="col-sm-3">
                              <h5>SUPORTE</h5>
                              <ul>
                                  <li><a href="https://portal.ifro.edu.br/ouvidoria-nav">FAQ</a></li>                                               
                                  <li><a href="https://portal.ifro.edu.br/ouvidoria-nav">Perguntas Frequentes</a></li>
                              </ul>
                          </div>
                          <div class="col-sm-3 info">
                              <h5>INFORMAÇÕES</h5>
                              <p> Somos uma loja de distribuição e vendas de jogos eletrônicos para Windows e MacOS. </p>
                          </div>
                      </div>
                  </div>
              </footer>
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
              <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        </body>
    );
}

export default Rodape;