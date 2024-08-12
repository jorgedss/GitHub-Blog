<h1 align='center'> GitHub Blog</h1>

<h2> Descrição </h2>
<div textalign='justify'> O Github Blog é um projeto de blog que exibe as issues dos seus repositórios públicos do Github. Ele permite visualizar as issues, indicando se estão abertas ou fechadas, e exibir detalhes completos com os comentários.</div>

<h2> Instalação </h2>

<ol>
  <li> Clone o repositótio na sua máquina:</li>
 <pre><code>
git clone https://github.com/jorgedss/github-blog.git
</code></pre>

<li> Altere o nome de usuário nas requisições do Github para exibir informações de outros usuários. Essa alteração pode ser feita facilmente no código. </li>
</ol>

<h1>Utilização </h1>

<ol>
  <li> Na página inicial, você verá cards correspondentes a cada issue do repositório.</li>
  <li> Cada card indica se a issue está aberta ou fechada.</li>
  <li>Ao clicar no título do card, você será redirecionado para uma página que exibe a issue completa e os comentários associados a ela.</li>
</ol>


<h1> Funcionalidades</h1>

<ul>
  <li>Exibição das issues dos repositórios públicos do Github em forma de cards. </li>
  <li> Página detalhada para cada issue com os comentários. </li>
  <li> Indicador de status das issues (abertas ou fechadas). </li>
  <li> Fácil configuração para alterar o nome de usuário e exibir issues de outros usuários do Github. </li>
  <li> Página de erro para links inválidos. </li>
</ul>

<h1> Tecnologias utilizadas</h1>

<div>
<img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'/>
<img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'/>
<img src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'/>
<img src='https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'/>
<img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'/>
<img src='https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white'/>
<img src='https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white'/>
<img src='https://img.shields.io/badge/datefns-770C56.svg?style=for-the-badge&logo=date-fns&logoColor=white'/>
</div>

Neste projeto, utilizamos a API do Github para obter os dados das issues. Trabalhamos fortemente com contexto, estados e o hook useEffect para gerenciar as requisições e a renderização dos dados.

<h1> Demonstração</h1>



https://github.com/user-attachments/assets/7fcccf57-eb66-46d2-aaba-5d578f979a75








<h1> Referências e Créditos</h1>

<ul>
  <li> Templates disponibilizados pela <a href='https://www.rocketseat.com.br/'>Rocketseat </a>.</li>
</ul>

<h1> Sugestão importante </h1>

A API do Github possui um limite de requisições para usuários não autenticados. Para evitar atingir esse limite rapidamente, recomenda-se que o usuário configure o projeto para fazer requisições autenticadas. Isso pode ser feito utilizando um token de acesso pessoal do Github, que pode ser gerado diretamente na sua conta do Github. Saiba mais clicando <a href='https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28'> aqui</a>
















