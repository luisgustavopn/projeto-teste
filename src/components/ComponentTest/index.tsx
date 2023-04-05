import React, { useState } from 'react';
import {Teste, Button, Div, Form, Input, Label, Titulo , Ul, Li} from "./style";


export const ComponentTest = () => {

    const [name , setName] = useState("João");
    const [idade , setIdade] = useState(5);
    console.log(name);
    console.log(idade);

    const[list] = useState(["Guinho , Dudu , João"])
    const handleName = (e) => {
        setName(e.target.value);
    };

    return (
        <Div>
            <Teste> Escolinha Milan del Valle </Teste>
            <Titulo> Cadastro de Alunos </Titulo>

            <Form>
                <Div>
                    <Label htmlFor="name"> 
                        Nome : {name}
                        <Input type="text" name="name" placeholder="Digite seu nome"></Input>
                        <Button onClick={() => setName("Guga")}> Mudar o nome</Button>
                    </Label>
                                    
                    <Label htmlFor="name">
                        Idade : {idade}
                        <Input type="text" name="name" placeholder="Digite sua idade"></Input> 
                    </Label>
                    
                    <Button onClick={() => setIdade(10)}> Mudar a idade</Button>

                    <Ul>
                        {list.map((item) => (
                            <Li>Alunos matriculados : {item}</Li>
                        ))}
                    </Ul>

                </Div>
            </Form>
        </Div>
    )   
}
