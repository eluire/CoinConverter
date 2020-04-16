import React ,{ Component }from 'react'
import Api from '../Services/api'
import './Converter.css'

const initialState = {
    to: 'USD',
    input: 1,
    output: ''
}
class Converter extends Component {
    constructor(props) {
        super(props)
        this.state = { ...initialState }
           
        this.convert = this.convert.bind(this)
        this.inputing = this.inputing.bind(this)
        this.to_brl = this.to_brl.bind(this)
    }

    to_brl(e){
        this.setState({to: e.target.value})
    
    }
    async convert(e){

        const response = await Api.get(`/${this.state.to}-BRL`)
        
        const coin_value = response.data[0].high
        
        const output = (this.state.input/coin_value).toFixed(2)

        this.setState({output})

    }
    inputing(e){
        this.setState({ input : e.target.value })
        
    }

    render(){
        
        return (
            
            <div className="container">
                
                <div className="row_1">
                    
                    <div className="input-group mb-3" id="input-value">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                            <span className="input-group-text">0.00</span>
                        </div>
                        <input className="form-control" type="text" name="input" value={this.state.input} onChange= {this.inputing}/>
                    </div>
                    

                    <div>
                        <i className="fa fa-equals"></i>
                    </div> 

                    <div class="form-group input-group" id="output-value">
                        <textarea className="form-control" id="txt_output" value= {this.state.output} readOnly rows="1"></textarea>
                        <div class="input-group-append">
                            <span class="input-group-text">$</span>
                            <span class="input-group-text">0.00</span>
                        </div>
                    </div>
                
                </div>
                
                <div className="row_2">
                    
                    <div class="form-group col_1">
                        <select className="form-control" name="moeda_1">
                            <option value="BRL">Real</option>
                        </select>
                    </div>
                    
                    
                    <div className="form-group col_2">
                        <select className="form-control" name="moeda_2" onChange={this.to_brl}>
                            <option value="USD">Dolar americano</option>
                            <option value="EUR">Euro</option>
                            <option value="EUR">Euro</option>
                            <option value="EUR">Euro</option>
                            <option value="EUR">Euro</option>
                            <option value="EUR">Euro</option>
                            <option value="EUR">Euro</option>
                        </select>
                    </div>
                
                </div>

                <div className="row_3 ">
                    <button className="btn btn-outline-secondary" type="submit" onClick ={ this.convert }>Convert</button>
                </div>

            </div>
        )
    }
}

export default Converter