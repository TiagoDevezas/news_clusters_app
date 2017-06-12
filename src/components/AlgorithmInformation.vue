<template>
  <div class="column">
    <h4>Algoritmo</h4>
    <p>A lista de notícias apresentada foi gerada pelo Lingo, um algoritmo que faz parte da framework open-source <a href="https://project.carrot2.org/">Carrot2</a>.</p>
    <h4>Como funciona?</h4>
    <p>O funcionamento do algoritmo Lingo pode ser descrito, de forma simplificada, como uma sequência de 4 passos.</p>

    <h5>Pré-processamento</h5>

    <p>Em primeiro lugar, as notícias são pré-processadas. Nesta fase são aplicadas ao texto técnicas como a <i>tokenização</i> - transformar o texto numa lista de palavras individuais -, a <i>stemização</i> - reduzir palavras flexionadas ao seu tronco -, e a remoção de <i>stop words</i> - as palavras mais comuns de uma língua. O objectivo é reduzir a lista de unidades de texto a analisar sem afectar a relevância.</p>

    <h5>Extração de frases</h5>

    <p>Após o pré-processamento, são extraídas as frases mais frequentes do texto. Estas frases são usadas para determinar as <i>labels</i> (os "Tópicos" que aparecem na barra lateral da aplicação) dos grupos de notícias (<i>clusters</i>).</p>

    <h5>Descoberto do conteúdo dos <i>clusters</i></h5>

    <p>Com base na proximidade entre as <i>labels</i> identificadas e o texto dos documentos, o algoritmo determina quais os documentos a associar a cada <i>label</i>. Os documentos aos quais não é possível atribuir uma <i>label</i> não são incluídos nos <i>clusters</i>.

    <h5>Formação final dos <i>clusters</i></h5>

    <p>Por fim, o algoritmo forma os <i>clusters</i>, avalia a pontuação de cada um, ordena-os, e exibe-os.</p>

    <h4>Referências</h4>
    <p>As seguintes referências permitem inspecionar com maior detalhe o funcionamento do algoritmo:</p>

    <ul>
      <li>
        <a href="http://www.cs.put.poznan.pl/dweiss/site/publications/slides/iipwm2004-dweiss-lingo.pdf">Lingo: Search Results Clustering Algorithm
Based on Singular Value Decomposition (Presentation)</a>
      </li>
      <li>
        <a href="https://pdfs.semanticscholar.org/34f5/4619167ea03f99f6e5706d31df16a80b15a2.pdf">Lingo: Search results clustering algorithm based on singular value decomposition (Paper)</a>
      </li>
    </ul>

    
  </div>
</template>
