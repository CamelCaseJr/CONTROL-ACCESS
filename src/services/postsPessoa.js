import useApi from 'src/composables/UseApi';

export default function pessoaService() {
  const { post } = useApi('pessoas');

  return {
    post,
  };
}
