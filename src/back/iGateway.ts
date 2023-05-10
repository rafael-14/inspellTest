import axios from 'axios'

const iGateway = axios.create({
  headers: {
    keyInspell: 'ueFMKeLZgmNjgXYNwGkCTAaq9C5Z0wicMPRtF3uXmtJhai4sCMANZSuU1RpcT',
  },
  timeout: 1000,
})

export const getLogs = async (igatewayPort:string) => {
  try {
    // Retirado para uso no teste de Dev Frontend
    //const ret = await iGateway.get(`http://${window.location.hostname}:${igatewayPort}/logs`)

    // Resposta fixas para teste Dev Frontend
    const ret = {
      status :  200,
      data : [{"ID":56,"TIMESTAMP":"230426 10:23:29.777","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":55,"TIMESTAMP":"230426 10:23:29.649","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":54,"TIMESTAMP":"230426 10:23:29.649","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":53,"TIMESTAMP":"230426 10:22:28.199","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":52,"TIMESTAMP":"230426 10:22:28.049","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":51,"TIMESTAMP":"230426 10:22:28.048","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":50,"TIMESTAMP":"230426 10:22:12.014","LEVEL":"WARN","MESSAGE":"iGateway vinculado [D96FA-31331118000126-db_31331118000126_73504]"},{"ID":49,"TIMESTAMP":"230426 10:21:26.651","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":48,"TIMESTAMP":"230426 10:21:26.484","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":47,"TIMESTAMP":"230426 10:21:26.484","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":46,"TIMESTAMP":"230426 10:20:25.012","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":45,"TIMESTAMP":"230426 10:20:24.868","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":44,"TIMESTAMP":"230426 10:20:24.867","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":43,"TIMESTAMP":"230426 10:19:23.421","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":42,"TIMESTAMP":"230426 10:19:23.272","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":41,"TIMESTAMP":"230426 10:19:23.271","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":40,"TIMESTAMP":"230426 10:18:21.867","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":39,"TIMESTAMP":"230426 10:18:21.689","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":38,"TIMESTAMP":"230426 10:18:21.688","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":37,"TIMESTAMP":"230426 10:17:20.243","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":36,"TIMESTAMP":"230426 10:17:20.103","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":35,"TIMESTAMP":"230426 10:17:20.101","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":34,"TIMESTAMP":"230426 10:16:18.698","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":33,"TIMESTAMP":"230426 10:16:18.534","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":32,"TIMESTAMP":"230426 10:16:18.533","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":31,"TIMESTAMP":"230426 10:15:17.122","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":30,"TIMESTAMP":"230426 10:15:16.999","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":29,"TIMESTAMP":"230426 10:15:16.998","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":28,"TIMESTAMP":"230426 10:14:15.619","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":27,"TIMESTAMP":"230426 10:14:15.451","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":26,"TIMESTAMP":"230426 10:14:15.451","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":25,"TIMESTAMP":"230426 10:13:13.982","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":24,"TIMESTAMP":"230426 10:13:13.845","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":23,"TIMESTAMP":"230426 10:13:13.845","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":22,"TIMESTAMP":"230426 10:12:12.423","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":21,"TIMESTAMP":"230426 10:12:12.231","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":20,"TIMESTAMP":"230426 10:12:12.231","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":19,"TIMESTAMP":"230426 10:11:10.777","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":18,"TIMESTAMP":"230426 10:11:10.649","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":17,"TIMESTAMP":"230426 10:11:10.649","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":16,"TIMESTAMP":"230426 10:10:08.542","LEVEL":"INFO","MESSAGE":"Coletor Checado: 0M0200/000383 Cod:2"},{"ID":15,"TIMESTAMP":"230426 10:10:08.387","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":14,"TIMESTAMP":"230426 10:10:08.386","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":13,"TIMESTAMP":"230426 10:09:08.479","LEVEL":"INFO","MESSAGE":"Coletor Sincronizado [Atualizados:0 Adcionados:0 Deletados:0] Cod:2"},{"ID":12,"TIMESTAMP":"230426 10:09:08.278","LEVEL":"ERRO","MESSAGE":"Erro ao fazer login no Coletor [Falta de parametros] Cod:1"},{"ID":11,"TIMESTAMP":"230426 10:09:08.258","LEVEL":"INFO","MESSAGE":"Pedestres Servidor IPT [D96FA/ALL] 5"},{"ID":10,"TIMESTAMP":"230426 10:09:07.838","LEVEL":"WARN","MESSAGE":"iGateway vinculado [D96FA-31331118000126-db_31331118000126_73504]"},{"ID":9,"TIMESTAMP":"230426 10:06:39.101","LEVEL":"WARN","MESSAGE":"Status iGateway: NÂO VINCULADO"},{"ID":8,"TIMESTAMP":"230426 10:06:39.101","LEVEL":"WARN","MESSAGE":"iGateway Não Vinculado! (Sem chave de acesso)"},{"ID":7,"TIMESTAMP":"230426 10:06:39.101","LEVEL":"INFO","MESSAGE":"Servidor iGateway Dashboard online em http://192.168.101.2:8123"},{"ID":6,"TIMESTAMP":"230426 10:06:39.080","LEVEL":"INFO","MESSAGE":"Servidor iGateway online em http://192.168.101.2:8321"},{"ID":5,"TIMESTAMP":"230426 10:06:39.067","LEVEL":"INFO","MESSAGE":"Servidor IPT: https://ipontomobile.com.br/teste_igateway"},{"ID":4,"TIMESTAMP":"230426 10:06:39.067","LEVEL":"WARN","MESSAGE":"Banco de dados: Conectado ## INICIALIZADO ## - Estrutura: 1.2"},{"ID":3,"TIMESTAMP":"230426 10:06:39.066","LEVEL":"INFO","MESSAGE":"iGateway Versão: Beta 0.0.02"},{"ID":2,"TIMESTAMP":"230426 10:06:39.066","LEVEL":"WARN","MESSAGE":"Inicializando iGateWay"},{"ID":1,"TIMESTAMP":"230426 10:06:39.060","LEVEL":"WARN","MESSAGE":"========================================================================="}]
    }

    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

export const login = async (acessKey: string, cnpjCpf: string, igatewayPort:string) => {
  try {
    // Retirado para uso no teste de Dev Frontend
    //const ret = await iGateway.post(`http://${window.location.hostname}:${igatewayPort}/login`,{
    //  acessKey,
    //  cnpjCpf
    //})

    // Resposta fixas para teste Dev Frontend
    const ret = {
      status :  200,
      data : "db_31331118000126_73504"
    }

    if (ret.status == 200) {
      return ret.data
    } else {
      return 'ERROIGATEWAY'
    }
  } catch (err: any) {
    return 'ERROIGATEWAY'
  }
}

export const getInfoIgateway = async (igatewayPort:string) => {
  try {
    // Retirado para uso no teste de Dev Frontend
    //const ret = await iGateway.get('http://' + window.location.hostname + ':' + igatewayPort)

    // Resposta fixa para teste Dev Frontend
    const ret = {
      status :  200,
      data : {"cnpjCpf":"31331118000126","placeId":"ALL","places":[],"statusServidorIPT":"ONLINE","versionIgateway":"Beta 0.0.02","statusIgateway":"RUN","failsOnDay":5,"terminals":[{"CODTERMINAL":1,"DESCRICAO":"Terminal MP","LOGIN":"admin","LOGIN_SENHA":"admin","IDENTIFICA_DISPOSITIVO":"","UF":"AM","UF_COMPLEMENTO":"GMT-05:00","MARCATERMINAL":"CONTROLID","MODELOTERMINAL":"IDFACE","ENDERECOIP":"null","PORTA_TCPIP":"null","IDLOCAL":"null","QTDPEDESTRES":2,"SESSAO":"null","STATUS":"ERRO"},{"CODTERMINAL":2,"DESCRICAO":"IDFace","LOGIN":"admin","LOGIN_SENHA":"admin","IDENTIFICA_DISPOSITIVO":"0M0200/000383","UF":"null","UF_COMPLEMENTO":"null","MARCATERMINAL":"CONTROLID","MODELOTERMINAL":"IDFACE","ENDERECOIP":"192.168.101.101","PORTA_TCPIP":"80","IDLOCAL":"null","QTDPEDESTRES":4,"SESSAO":"ViGl3B7hrn120cTilcGtPmGJ","STATUS":"ONLINE"}],"marksLastDays":{"1":[0,0,0,0,0,0,0],"2":[0,0,0,0,0,0,0],"dates":["20/04","21/04","22/04","23/04","24/04","25/04","26/04"]},"totalPedestrians":5}
    }

    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

export const setPlaceIgateway = async (id:string,igatewayPort:string) => {
  try {
    const ret = await iGateway.post('http://' + window.location.hostname + ':' + igatewayPort +'/setPlace',{
      id
    },{
      timeout : 5000
    })
    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

export const playPauseIgateway = async (igatewayPort:string) => {
  try {

    // Retirado para uso no teste de Dev Frontend
    //const ret = await iGateway.post('http://' + window.location.hostname + ':' + igatewayPort +'/playPause')

    // Resposta fixas para teste Dev Frontend
    const ret = {
      status :  200,
      data : "OK"
    }

    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

