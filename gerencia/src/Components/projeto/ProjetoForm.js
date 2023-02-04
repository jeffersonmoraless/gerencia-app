import {useEffect, useState} from 'react'
import Inputs from "../form/Inputs"
import Axios from "axios"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

function ProjetoForm({btntext,cadastrar,dividas,setDividas, menu, setMenu}){

    const [formato_pgt,setFormato_pgt] = useState([])
    const [categoria,setCategoria] = useState([])
    
    
   
useEffect(()=>{
        Axios.get('http://192.168.0.110:3500/categoria').then((response) =>{
            setCategoria(response.data)
         });
        Axios.get('http://192.168.0.110:3500/formato_pgt').then((response) =>{
            setFormato_pgt(response.data)
        });
        

        
       
  },[]);

  const handlFormChange =(e)=>{
    
    if(e.target.getAttribute('name') === 'descricao'){

        setDividas({'id':dividas.id,'descricao':e.target.value,'valor':dividas.valor,'data':dividas.data,'data_vencimento':dividas.data_vencimento,'formato_pgt':dividas.formato_pgt,'qtd_parcelas':dividas.qtd_parcelas})

    }else if(e.target.getAttribute('name') === 'data') {
           
        setDividas({'id':dividas.id,'descricao':dividas.descricao,'valor':dividas.valor,'data':e.target.value,'data_vencimento':dividas.data_vencimento,'formato_pgt':dividas.formato_pgt,'qtd_parcelas':dividas.qtd_parcelas})

    }else if(e.target.getAttribute('name') === 'data_vencimento') {

        setDividas({'id':dividas.id,'descricao':dividas.descricao,'valor':dividas.valor,'data':dividas.data,'data_vencimento':e.target.value,'formato_pgt':dividas.formato_pgt,'qtd_parcelas':dividas.qtd_parcelas})

    }else if(e.target.getAttribute('name') === 'valor') {

        setDividas({'id':dividas.id,'descricao':dividas.descricao,'valor':e.target.value,'data':dividas.data,'data_vencimento':dividas.data_vencimento,'formato_pgt':dividas.formato_pgt,'qtd_parcelas':dividas.qtd_parcelas})

    }else if(e.target.getAttribute('name') === 'formato_pgt') {

        setDividas({'id':dividas.id,'descricao':dividas.descricao,'valor':dividas.valor,'data':dividas.data,'data_vencimento':dividas.data_vencimento,'formato_pgt':e.target.value,'qtd_parcelas':dividas.qtd_parcelas})
        
    }else if(e.target.getAttribute('name') === 'categoria') {
        setMenu(e.target.value)

    }else if(e.target.getAttribute('name') === 'qtd_parcelas') {
        setDividas({'id':dividas.id,'descricao':dividas.descricao,'valor':dividas.valor,'data':dividas.data,'data_vencimento':dividas.data_vencimento,'formato_pgt':dividas.formato_pgt,'qtd_parcelas':e.target.value})

    }
  } 

    
    return(
        <form>
            <Select name='categoria' text='selecione uma opção' categoria={categoria} handleOnChange={handlFormChange}/>
            {menu === `1` && 

                <>
                
                    <Inputs type='text' text='Decrição:' name='descricao' placeholder='despesas de mercado' handleOnChange={handlFormChange}/>
                    
                    <Inputs type='date' name='data' text='Data:'handleOnChange={handlFormChange}/>
                
                    <Inputs type='number' name='valor' text='Valor:' placeholder='R$179,55' handleOnChange={handlFormChange}/>
                    
                    
                </>
            }
            {menu === `2` &&
                <>
                    <Inputs type='text' text='Decrição:' name='descricao' placeholder='despesas de mercado' handleOnChange={handlFormChange}/>

                    <Inputs type='date' name='data' text='Data:'handleOnChange={handlFormChange}/>

                    <Inputs type='date' name='data_vencimento' text='Vencimento:' placeholder='Date' handleOnChange={handlFormChange}/>

                    <Select name='formato_pgt' text='Avista / Parcelado' options={formato_pgt} handleOnChange={handlFormChange}/>
                        
                    {dividas.formato_pgt === '2' &&
                        <Inputs type='number' name='qtd_parcelas' text='quantidade de parcelas:' placeholder='3' handleOnChange={handlFormChange}/>
                    }

                    <Inputs type='number' name='valor' text='Valor:' placeholder='R$179,55' handleOnChange={handlFormChange}/>

                    
                </>

            }
            {menu === `3` &&
                <>
                    <Inputs type='text' text='Decrição:' name='descricao' placeholder='despesas de mercado' handleOnChange={handlFormChange}/>

                    <Inputs type='date' name='data' text='Data:'handleOnChange={handlFormChange}/>

                    <Select name='formato_pgt' text='Avista / Parcelado' options={formato_pgt} handleOnChange={handlFormChange}/>

                    {dividas.formato_pgt === '2' &&
                        <Inputs type='number' name='qtd_parcelas' text='quantidade de parcelas:' placeholder='3' handleOnChange={handlFormChange}/>
                    }

                    <Inputs type='number' name='valor' text='Valor:' placeholder='R$179,55' handleOnChange={handlFormChange}/>

                    
                </>

            }
            
           {menu >= 1 && menu <=3  &&
            <SubmitButton text={btntext} type='submit' func={cadastrar} />
           
           }
            
            
            
                        
           
        </form>
    )
}

export default ProjetoForm