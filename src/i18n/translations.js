const translations = {
  en: {
    tabs: {
      news: 'News',
      settings: 'Settings',
      info: 'Information'
    },
    searchBar: {
      placeholder: 'Search'
    },
    searchResults: {
      found: ' articles found',
      notFound: 'No articles found.'
    },
    settingsOptions: {
      sources: 'Sources',
      algorithm: 'Algorithm',
      button: {
        save: 'Save',
        cancel: 'Cancel'
      },
      sourceTypeFilter: {
        sport: 'Sports',
        general: 'General',
        press: 'Press',
        broadcast: 'TV/Radio'
      }
    },
    switchLabels: {
      on: 'On',
      off: 'Off'
    },
    loading: {
      message: 'Creating page...',
      error: "It wasn't possible to generate the news clusters. Probably not enough articles have been collected yet. Please try later or select another day."
    },
    algorithmInfo: {
      the: 'The',
      top: 'top',
      news: 'news from',
      according: '* according to an',
      algo: 'algorithm'
    },
    dropdown: {
      scoreHigh: 'Score: Highest',
      scoreLow: 'Score: Lowest',
      dateHigh: 'Date: Latest',
      dateLow: 'Date: Oldest'
    },
    items: {
      more: 'More:'
    },
    topics: {
      header: 'Topics'
    },
    algorithmParams: {
      lingo: {
        clusterCountBase: {
          label: 'Desired base cluster count',
          description: 'Base factor used to calculate the number of clusters based on the number of documents on input.'
        },
        minClusterSize: {
          label: 'Minimum cluster size',
          description: 'Determines the minimum number of documents in each cluster.'
        },
        maxWordDf: {
          label: 'Maximum word document frequency',
          description: 'Words appearing in more than the percent value of thus attribute will be ignored. A value of 1.0 means that all words will be taken into account, no matter in how many documents they appear.'
        },
        phraseDf: {
          label: 'Phrase Document Frequency threshold',
          description: 'Phrases appearing in fewer documents than this attribute\'s value will be ignored.'
        },
        wordDf: {
          label: 'Word Document Frequency threshold',
          description: 'Words appearing in fewer documents than this attribute\'s value will be ignored.'
        }
      }
    },
    algorithmInformation: {
      lingo: ' <h4>Algorithm</h4> <p>The presented news feed was generated by Lingo, an algorithm from the open-source framework <a href="https://project.carrot2.org/">Carrot2</a>.</p> <h4>How does it work?</h4> <p>Lingo\'s operation can be described, in simple terms, as a 4 step sequence.</p> <h5>Pre-processing</h5> <p>First, the news articles are pre-processed. In this phase are applied to the text techniques such as <i>tokenization</i> - transforming the text into a list of individual words -, <i>stemming</i> - reducing inflected words to their word stem -, and the removal of <i>stop words</i> - a language\'s most common words. The goal is to reduce the list of units of text to analyse without impacting their relevance.</p> <h5>Phrase extraction</h5> <p>After pre-processing, the most frequent phrases are extracted from the text. These phrases are used to determine the <i>labels</i> (the "Topics" that are shown on the app\'s sidebar) for each group (<i>cluster</i>) of news articles.</p> <h5>Cluster content discovery</h5> <p>Based on the proximity between the identified <i>labels</i> and the articles\' text, the algorithm determines which articles are to be associated with each <i>label</i>. Articles to which is not possible associate a <i>label</i> are not included in the <i>clusters</i>. <h5>Final cluster formation</h5> <p>Finally, the algorithm forms the <i>clusters</i>, evaluates their score, orders them, and displays them.</p> <h4>References</h4> <p>Teh following references from Lingo\'s authors allow a deeper inspection of the algorithm\'s operation:</p> <ul> <li> <a href="http://www.cs.put.poznan.pl/dweiss/site/publications/slides/iipwm2004-dweiss-lingo.pdf">Lingo: Search Results Clustering AlgorithmBased on Singular Value Decomposition (Presentation)</a> </li> <li> <a href="https://pdfs.semanticscholar.org/34f5/4619167ea03f99f6e5706d31df16a80b15a2.pdf">Lingo: Search results clustering algorithm based on singular value decomposition (Paper)</a> </li> </ul>'
    }
  },
  pt: {
    tabs: {
      news: 'Notícias',
      settings: 'Definições',
      info: 'Informação'
    },
    searchBar: {
      placeholder: 'Pesquisar'
    },
    searchResults: {
      found: ' artigos encontrados',
      notFound: 'Nenhum artigo encontrado.'
    },
    settingsOptions: {
      sources: 'Fontes',
      algorithm: 'Algoritmo',
      button: {
        save: 'Guardar',
        cancel: 'Cancelar'
      },
      sourceTypeFilter: {
        sport: 'Desporto',
        general: 'Generalistas',
        press: 'Imprensa',
        broadcast: 'TV/Rádio'
      }
    },
    switchLabels: {
      on: 'Ligado',
      off: 'Desligado'
    },
    loading: {
      message: 'A criar página...',
      error: 'Neste momento não é possível gerar os grupos de notícias. Provavelmente ainda não foram recolhidas notícias suficientes. Por favor tente mais logo ou escolha outro dia.'
    },
    algorithmInfo: {
      the: 'As',
      top: 'principais',
      news: 'Notícias de',
      according: '* segundo um',
      algo: 'algoritmo'
    },
    dropdown: {
      scoreHigh: 'Pontuação: mais alta',
      scoreLow: 'Pontuação: mais baixa',
      dateHigh: 'Data: mais recente',
      dateLow: 'Data: mais antiga'
    },
    items: {
      more: 'Mais:'
    },
    topics: {
      header: 'Tópicos'
    },
    algorithmParams: {
      lingo: {
        clusterCountBase: {
          label: 'Nº base de clusters',
          description: 'Factor base usado para calcular o número de clusters.'
        },
        minClusterSize: {
          label: 'Nº mínimo de artigos por cluster',
          description: 'Determina o número mínimo de artigos por cluster.'
        },
        maxWordDf: {
          label: 'Frequência máxima das palavras nos documentos',
          description: 'Palavras que apareçam em mais do que o valor percentual deste atributo serão ignoradas. Um valor de 1.0 significa que todas as palavras serão levadas em conta, independentemente do número de documentos em que apareçam.'
        },
        phraseDf: {
          label: 'Frequência limite das frases nos documentos',
          description: 'Frases que apareçam em menos documentos do que o valor deste atributo serão ignoradas.'
        },
        wordDf: {
          label: 'Frequência limite das palavras nos documentos',
          description: 'Palavras que apareçam em menos documentos do que o valor deste atributo serão ignoradas.'
        }
      }
    },
    algorithmInformation: {
      lingo: ' <h4>Algoritmo</h4> <p>A lista de notícias apresentada foi gerada pelo Lingo, um algoritmo que faz parte da framework open-source <a href="https://project.carrot2.org/">Carrot2</a>.</p> <h4>Como funciona?</h4> <p>O funcionamento do algoritmo Lingo pode ser descrito, de forma simplificada, como uma sequência de 4 passos.</p> <h5>Pré-processamento</h5> <p>Em primeiro lugar, as notícias são pré-processadas. Nesta fase são aplicadas ao texto técnicas como a <i>tokenização</i> - transformar o texto numa lista de palavras individuais -, a <i>stemização</i> - reduzir palavras flexionadas ao seu tronco -, e a remoção de <i>stop words</i> - as palavras mais comuns de uma língua. O objectivo é reduzir a lista de unidades de texto a analisar sem afectar a relevância.</p> <h5>Extração de frases</h5> <p>Após o pré-processamento, são extraídas as frases mais frequentes do texto. Estas frases são usadas para determinar as <i>labels</i> (os "Tópicos" que aparecem na barra lateral da aplicação) dos grupos de notícias (<i>clusters</i>).</p> <h5>Descoberta do conteúdo dos <i>clusters</i></h5> <p>Com base na proximidade entre as <i>labels</i> identificadas e o texto dos documentos, o algoritmo determina quais os documentos a associar a cada <i>label</i>. Os documentos aos quais não é possível atribuir uma <i>label</i> não são incluídos nos <i>clusters</i>. <h5>Formação final dos <i>clusters</i></h5> <p>Por fim, o algoritmo forma os <i>clusters</i>, avalia a pontuação de cada um, ordena-os, e exibe-os.</p> <h4>Referências</h4> <p>As seguintes referências permitem inspecionar com maior detalhe o funcionamento do algoritmo:</p> <ul> <li> <a href="http://www.cs.put.poznan.pl/dweiss/site/publications/slides/iipwm2004-dweiss-lingo.pdf">Lingo: Search Results Clustering AlgorithmBased on Singular Value Decomposition (Presentation)</a> </li> <li> <a href="https://pdfs.semanticscholar.org/34f5/4619167ea03f99f6e5706d31df16a80b15a2.pdf">Lingo: Search results clustering algorithm based on singular value decomposition (Paper)</a> </li> </ul>'
    }
  }
}

export default translations
