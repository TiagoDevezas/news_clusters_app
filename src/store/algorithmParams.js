import { localStore } from '../main.js'

  // $shingle_size = params[:shingle_size] ? params[:shingle_size].to_i : 3
  // $hash_functions = params[:hashes] ? params[:hashes].to_i : 200
  // $num_rows = params[:rows] ? params[:rows].to_i : 3
  // $min_cluster_size = params[:cluster_size] ? params[:cluster_size].to_i : 3

const params = {
  'lsh': [
    {
      id: 'shingle_size',
      label: 'Tamanho dos shingles',
      description: 'Por quantas palavras devem ser constituídos os shingles usado para comparação',
      defaultValue: 3,
      storedValue: 3,
      minValue: 2,
      maxValue: 10,
      step: 1,
      type: 'integer'
    },
    {
      id: 'hash_functions',
      label: 'Funções hash',
      description: 'Número de funções hash',
      defaultValue: 200,
      storedValue: 200,
      minValue: 10,
      maxValue: 500,
      step: 1,
      type: 'integer'
    },
    {
      id: 'num_rows',
      label: 'Números de shingles para comparar',
      description: 'Quantos shingles usar para comparações entre artigos',
      defaultValue: 3,
      storedValue: 3,
      minValue: 2,
      maxValue: 500,
      step: 1,
      type: 'integer'
    },
    {
      id: 'min_cluster_size',
      label: 'Números mínimo de artigos por cluster',
      description: 'O número mínimo de artigos por cluster',
      defaultValue: 3,
      storedValue: 3,
      minValue: 2,
      maxValue: 20,
      step: 1,
      type: 'integer'
    }
  ],
  'lingo': [
    {
      id: 'desiredClusterCountBase',
      label: 'Nº base de clusters',
      description: 'Factor base usado para calcular o número de clusters.',
      defaultValue: 5,
      storedValue: 5,
      minValue: 2,
      maxValue: 50,
      step: 1,
      type: 'integer'
    },
    {
      id: 'minClusterSize',
      label: 'Nº mínimo de artigos por cluster',
      description: 'Determina o número mínimo de artigos por cluster.',
      defaultValue: 2,
      storedValue: 2,
      minValue: 1,
      maxValue: 50,
      step: 1,
      type: 'integer'
    },
    // {
    //   id: 'scoreWeight',
    //   label: 'Rácio tamanho/pontuação',
    //   description: 'Balanço entre a “pontuação” e o tamanho do cluster durante a fase de ordenação dos clusters. Valor de 0.0 faz com que o Lingo ordene os clusters com base apenas no tamanho. Valor de 1.0 faz com que o Lingo ordene os clusters com base apenas na pontuação dos clusters.',
    //   defaultValue: 0.0,
    //   storedValue: 0.0,
    //   minValue: 0.0,
    //   maxValue: 1.0,
    //   step: 0.1,
    //   type: 'float'
    // },
    {
      id: 'maxWordDf',
      label: 'Frequência máxima das palavras nos documentos',
      description: 'Palavras que apareçam em mais do que o valor percentual deste atributo serão ignoradas. Um valor de 1.0 significa que todas as palavras serão levadas em conta, independentemente do número de documentos em que apareçam.',
      defaultValue: 0.01,
      storedValue: 0.01,
      minValue: 0.01,
      maxValue: 1.0,
      step: 0.01,
      type: 'float'
    },
    {
      id: 'PhraseExtractor.dfThreshold',
      label: 'Frequência limite das frases nos documentos',
      description: 'Frases que apareçam em menos documentos do que o valor deste atributo serão ignoradas.',
      defaultValue: 1,
      storedValue: 1,
      minValue: 1,
      maxValue: 100,
      step: 5,
      type: 'integer'
    },
    {
      id: 'CaseNormalizer.dfThreshold',
      label: 'Frequência limite das palavras nos documentos',
      description: 'Palavras que apareçam em menos documentos do que o valor deste atributo serão ignoradas.',
      defaultValue: 1,
      storedValue: 1,
      minValue: 1,
      maxValue: 100,
      step: 5,
      type: 'integer'
    }
  ]
}

export default function getAlgorithParams (algoName) {
  if (localStore.get('params') !== undefined) {
    if (localStore.get('params').lingoParams && localStore.get('params').lingoParams.length) {
      return localStore.get('params').lingoParams
    }
  }
  return params[algoName]
}
