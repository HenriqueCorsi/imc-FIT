import '../../assets/css/imcTable-style.css';

function ImcTable(){
    return(
        <div className='imc-table' id='table'>
            <table>
                <tr>
                    <td className='top-column'>IMC</td>
                    <td className='top-column'>Classificação</td>
                    <td className='top-column'>Obesidade (GRAU)</td>
                </tr>
                <tr>
                    <td>Menor que 18.5</td>
                    <td>Magreza</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 18.6 e 24.9</td>
                    <td>Normal</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 25.0 e 29.9</td>
                    <td>Sobrepeso</td>
                    <td>I</td>
                </tr>
                <tr>
                    <td>Entre 30.0 e 39.9</td>
                    <td>Obesidade</td>
                    <td>II</td>
                </tr>
                <tr>
                    <td>Maior que 40.0</td>
                    <td>Obesidade</td>
                    <td>III</td>
                </tr>
            </table>
        </div>
    )
}

export default ImcTable;