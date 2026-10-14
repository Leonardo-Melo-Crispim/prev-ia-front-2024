'use client';

import GenericInput from '@/components/GenericInput'
import DataInstalacao from '@/components/DataGeneric'
import { useEffect, useState } from 'react'

export default function FormEquip() {
//use state serve pra guardar valores do onChange dos inputs
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState(''); // Estado para mensagens de erro

  // Tamanho máximo de caracteres para os campos
  const MAX_NOME = 50;
  const MAX_DESCRICAO = 200;
  const MAX_CATEGORIA = 30;

  // Validação ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    setError(''); // Limpa erros anteriores

    // Verifica os tamanhos máximos
    if (nome.length > MAX_NOME) {
      setError(`O campo Nome deve ter no máximo ${MAX_NOME} caracteres.`);
      return;
    }
    if (descricao.length > MAX_DESCRICAO) {
      setError(`O campo Descrição deve ter no máximo ${MAX_DESCRICAO} caracteres.`);
      return;
    }
    if (categoria.length > MAX_CATEGORIA) {
      setError(`O campo Categoria deve ter no máximo ${MAX_CATEGORIA} caracteres.`);
      return;
    }

    // Se passou pelas validações
    console.log('Formulário submetido com sucesso!');
    console.log({ nome, descricao, categoria, data });
    alert('Formulário enviado com sucesso!');
  };

  useEffect(() => { // executa toda vez que os campos dentro do array forem modificados
    console.log(nome);
    console.log(descricao);
    console.log(categoria);
    console.log(data);
  }, [nome, descricao, categoria, data]); //esse array

  return (
    <div className="flex flex-col items-center justify-center">
        <h3 className='mt-10'>Cadastro de equipamento</h3>
      <form onSubmit={handleSubmit} className="w-[400px] text-black">
        <GenericInput
          campo="Nome: "
          placeholder="Digite o nome do equipamento"
          value={nome}
          onChange={(value) => setNome(value)}
        />

        <GenericInput
          campo="Descrição: "
          placeholder="Descreva o equipamento"
          value={descricao}
          onChange={(value) => setDescricao(value)}
        />

        <GenericInput
          campo="Categoria: "
          placeholder="Qual a categoria?"
          value={categoria}
          onChange={(value) => setCategoria(value)}
        />

        <DataInstalacao value={data} onChange={(value) => setData(value)} />

        {/* Exibição de mensagem de erro */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <div className='flex justify-center'>
            <button type="submit" className="bg-cyan-500 rounded-md p-2 mt-4">
              Cadastrar equipamento
            </button>
        </div>
      </form>
    </div>
  );
}
