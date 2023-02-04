import styles from './Select.module.css'
function Select({text, name,options,categoria ,handleOnChange, value}){
    
  
    return(

        <div className={styles.form_controle}>
        <label htmlFor={name}>{text}</label>
        
            <select name={name} id={name} value={value} onChange={handleOnChange}>

                <option>Selecione Uma Opção</option> 
                        {typeof options !== 'undefined' && 
                            options.map((formato_pgt) =>{
                                return<option value={formato_pgt.id} key={formato_pgt.id}>{formato_pgt.name}</option>
                            })
                        }
                        {typeof categoria !== 'undefined' && 
                            categoria.map((tip) =>{
                                return<option value={tip.id_categoria} key={tip.id_categoria}>{tip.categoria}</option>
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