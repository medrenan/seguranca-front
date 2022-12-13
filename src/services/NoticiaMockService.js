const NoticiasJson = [
    {
        id: 1,
        titulo: "Brasil eliminado na Copa Qatar 2022",
        subtitulo: "Seleção enfrente dificuldades e perde nos pênaltis para Croácia",
        conteudo: "Seleção brasileira era favorita mas acabou indo para casa pois o técnico ramelou",
        assunto: "Esportes"
    },
    {
        id: 2,
        titulo: "Economia do Brasil ruim demais",
        subtitulo: "Está intankavel a situação do maior país da américa latina",
        conteudo: "Segundo economistas basicamente vai ser difícil consertar isso aqui",
        assunto: "Economia"
    },
    {
        id: 3,
        titulo: "Lula vence eleições 2022",
        subtitulo: "Candidato petista venceu com 51% dos votos válidos",
        conteudo: "Vamos ver oq da",
        assunto: "Política"
    }
];

export const buscarTodas = () => new Promise(resolve => resolve(NoticiasJson));
export const buscarPorId = (id) => new Promise(resolve => resolve(NoticiasJson.filter((data) => data.id === id)));
export const buscarPorAssunto = (assunto) => new Promise(resolve => resolve(NoticiasJson.filter((data) => data.assunto === assunto)));