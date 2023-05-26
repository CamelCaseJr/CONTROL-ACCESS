import useApi from 'src/composables/UseApi';

export default function postMilitarServer() {
  const url = 'militares';
  const { post } = useApi(url);

  const postMilitar = async (militar = {}) => {
    try {
      const novoMilitar = {
        saram: militar.saram,
        pessoa: {
          nome: militar.nome,
          cpf: militar.cpf,
          sexo: militar.sexo,
        },
        om: {
          sigla: militar.orgMilitar,
        },
        nomeDeGuerra: militar.nomeDeGuerra,
        posto: militar.posto,
      };
      const { data } = await post(novoMilitar);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    postMilitar,
  };
}
