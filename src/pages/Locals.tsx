import axios from 'axios';
//import {ComponentTest} from './components/ComponentTest';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

type Localidades = {
  id: string;
  nome: string;
  nivel: {nome:string};
}

export function Locals() {
  //const { data: repositories , isFetching } = useFetch<Repository[]>('https://servicodados.ibge.gov.br/api/v3/agregados/1705/localidades/N7%7CN6')
  const { data , isFetching } = useQuery<Localidades[]>('localidades', async () => {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v3/agregados/1705/localidades/N7%7CN6')
    return response.data;
  }, {
    staleTime: 1000 * 60 , // 1 minuto
  })

  return (
    <div>
      <ul>
        { isFetching && <p>Carregando...</p> }
        {data?.map(local => {
          return(
            <li key={local.id}>
              <Link to={`locals/${local.nome}`}>
                {local.nome}
              </Link>
              <p>{local.nivel.nome}</p>
            </li>
          )
        })}
      </ul> 
    </div>

  )
}