import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { Localidades } from "./Locals";

export function Local() {
    const params = useParams()
    const currentLocalizacao = params['*'] as string;

    const queryClient = useQueryClient()

    async function handleChangeLocalDrescription(){
        // chamada API pra atualizar a descrição do local
        //await queryClient.invalidateQueries(['localidades'])

        const previousLocals = queryClient.getQueryData<Localidades[]>('localidades')

        if (previousLocals){
            const nextLocals = previousLocals.map(local => {

                if (local.nome == currentLocalizacao){
                    return{ ...local, nome: 'Lages do Cabugi'}
                }
                else{
                    return local
                }
            })

            queryClient.setQueryData('localidades',nextLocals)
            
             
        }

    }

    return (
        <div> 
            <h1>{currentLocalizacao}</h1>
            <button onClick={handleChangeLocalDrescription}> Alterar a descrição</button>
        </div>
    )

}