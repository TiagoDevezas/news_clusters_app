import { localStore } from '../main.js'

const sources = [{'name': '31 da Armada', 'type': 'blogs', 'acronym': '31daarmada'}, {'name': 'A Bola', 'type': 'national', 'acronym': 'abola'}, {'name': 'AEIOU', 'type': 'archive', 'acronym': 'aeiou'}, {'name': 'Al Jazeera English', 'type': 'international', 'acronym': 'aljazeeraen'}, {'name': 'Antena 1', 'type': 'national', 'acronym': 'antena1'}, {'name': 'Aspirina B', 'type': 'blogs', 'acronym': 'aspirinab'}, {'name': 'Associated Press', 'type': 'international', 'acronym': 'ap'}, {'name': 'Aventar', 'type': 'blogs', 'acronym': 'aventar'}, {'name': 'BBC', 'type': 'international', 'acronym': 'bbc'}, {'name': 'Blasfémias', 'type': 'blogs', 'acronym': 'blasfemias'}, {'name': 'Corporações', 'type': 'blogs', 'acronym': 'corporacoes'}, {'name': 'Correio da Manhã', 'type': 'national', 'acronym': 'cm'}, {'name': 'Corta-Fitas', 'type': 'blogs', 'acronym': 'cortafitas'}, {'name': 'Destak', 'type': 'archive', 'acronym': 'destak'}, {'name': 'Diário Digital', 'type': 'national', 'acronym': 'dd'}, {'name': 'Diário de Notícias', 'type': 'national', 'acronym': 'dn'}, {'name': 'Do Portugal Profundo', 'type': 'blogs', 'acronym': 'doportugalprofundo'}, {'name': 'Económico', 'type': 'national', 'acronym': 'economico'}, {'name': 'El Mundo', 'type': 'international', 'acronym': 'elmundo'}, {'name': 'El País', 'type': 'international', 'acronym': 'elpais'}, {'name': 'Euronews', 'type': 'international', 'acronym': 'euronews'}, {'name': 'Expresso', 'type': 'national', 'acronym': 'expresso'}, {'name': 'Folha de São Paulo', 'type': 'research', 'acronym': 'folhasp'}, {'name': 'Futebol 365', 'type': 'archive', 'acronym': 'futebol365'}, {'name': 'Globo G1', 'type': 'research', 'acronym': 'g1'}, {'name': 'JPN', 'type': 'archive', 'acronym': 'jpn'}, {'name': 'Jornal Digital', 'type': 'archive', 'acronym': 'jornaldigital'}, {'name': 'Jornal de Negócios', 'type': 'national', 'acronym': 'negocios'}, {'name': 'Jornal de Notícias', 'type': 'national', 'acronym': 'jn'}, {'name': 'Jugular', 'type': 'blogs', 'acronym': 'jugular'}, {'name': 'Ladrões de Bicicletas', 'type': 'blogs', 'acronym': 'ladroesdebicicletas'}, {'name': 'Maisfutebol', 'type': 'national', 'acronym': 'maisfutebol'}, {'name': 'New York Times', 'type': 'international', 'acronym': 'nyt'}, {'name': 'Notícias ao Minuto', 'type': 'archive', 'acronym': 'noticiasaominuto'}, {'name': 'O Insurgente', 'type': 'blogs', 'acronym': 'insurgente'}, {'name': 'O JUMENTO', 'type': 'blogs', 'acronym': 'ojumento'}, {'name': 'O Jogo', 'type': 'national', 'acronym': 'ojogo'}, {'name': 'OJE', 'type': 'archive', 'acronym': 'oje'}, {'name': 'Observador', 'type': 'national', 'acronym': 'observador'}, {'name': 'P3', 'type': 'national', 'acronym': 'p3'}, {'name': 'PT Jornal', 'type': 'archive', 'acronym': 'ptjornal'}, {'name': 'Portadaloja', 'type': 'blogs', 'acronym': 'portadaloja'}, {'name': 'Porto Canal', 'type': 'national', 'acronym': 'portocanal'}, {'name': 'Porto24', 'type': 'archive', 'acronym': 'porto24'}, {'name': 'Portugal dos Pequeninos', 'type': 'blogs', 'acronym': 'portugaldospequeninos'}, {'name': 'Público', 'type': 'national', 'acronym': 'publico'}, {'name': 'RTP', 'type': 'national', 'acronym': 'rtp'}, {'name': 'Record', 'type': 'national', 'acronym': 'record'}, {'name': 'Relvado', 'type': 'archive', 'acronym': 'relvado'}, {'name': 'Renascença', 'type': 'national', 'acronym': 'renascenca'}, {'name': 'Reuters', 'type': 'international', 'acronym': 'reuters'}, {'name': 'SAPO Desporto', 'type': 'national', 'acronym': 'sapodesporto'}, {'name': 'SAPO Notícias', 'type': 'national', 'acronym': 'saponoticias'}, {'name': 'SIC Notícias', 'type': 'national', 'acronym': 'sicn'}, {'name': 'Sol', 'type': 'national', 'acronym': 'sol'}, {'name': 'Spiegel International', 'type': 'international', 'acronym': 'spiegelinternational'}, {'name': 'Sábado', 'type': 'national', 'acronym': 'sabado'}, {'name': 'TSF', 'type': 'national', 'acronym': 'tsf'}, {'name': 'TVI24', 'type': 'national', 'acronym': 'tvi24'}, {'name': 'The Economist', 'type': 'international', 'acronym': 'economist'}, {'name': 'The Guardian', 'type': 'international', 'acronym': 'guardian'}, {'name': 'The Wall Street Journal', 'type': 'international', 'acronym': 'wsj'}, {'name': 'UOL', 'type': 'research', 'acronym': 'uol'}, {'name': 'VAI E VEM', 'type': 'blogs', 'acronym': 'vaievem'}, {'name': 'Visão', 'type': 'national', 'acronym': 'visao'}, {'name': 'Washington Post', 'type': 'international', 'acronym': 'wpost'}, {'name': 'iOnline', 'type': 'national', 'acronym': 'jornali'}, {'name': 'zerozero', 'type': 'archive', 'acronym': 'zerozero'}]

export default function getSourcesByType (sourceType) {
  let sourcesToReturn
  if (localStore.get('sources') !== undefined) {
    if (localStore.get('sources').sources && localStore.get('sources').sources.length) {
      sourcesToReturn = localStore.get('sources').sources
    }
  } else {
    sourcesToReturn = sources.filter((source) => {
      return source.type === sourceType
    }).map((s) => {
      return { name: s.name, selected: true }
    })
  }
  return sourcesToReturn
}
