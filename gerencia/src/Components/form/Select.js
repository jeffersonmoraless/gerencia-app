import styles from './Select.module.css'
function Select({text, name,options,tipo ,handleOnChange, value}){
    
  
    return(

        <div className={styles.form_controle}>
        <label htmlFor={name}>{text}</label>
        
            <select name={name} id={name} value={value} onChange={handleOnChange}>

                <option>Selecione Uma Opção</option> 
                        {typeof options !== 'undefined' && 
                            options.map((categoria) =>{
                                return<option value={categoria.id} key={categoria.id}>{categoria.name}</option>
                            })
                        }
                        {typeof tipo !== 'undefined' && 
                            tipo.map((tip) =>{
                                return<option value={tip.id_tipo} key={tip.id_tipo}>{tip.tipo}</option>
                            })
                        }
                
                </select>
        
        

        </div>

    )
}

export default Select

 {/*typeof options !== 'undefined' && options.map((categoria) =>{
                    return<option value={categoria.id} key={categoria.id}>{categoria.name}</option>
                    }
                )*/}  