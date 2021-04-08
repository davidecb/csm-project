import { useState, useEffect } from 'react';
import './DisplayData.scss';
import { connect } from 'react-redux';
import { addModel, updateModel, deleteModel } from '../../redux/actions/modelActions';

function DisplayData({ models, addModel, updateModel, deleteModel }) {

    const [modelsData, setModelsData] = useState(models);
    console.log( "@models", models);
    
    return (
        
        <div className="displayData">
            <table>
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Model earned</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    
                    modelsData.sort(function (a, b) {        
                        if (a['Performer Nickname'] > b['Performer Nickname']) {
                            return 1;
                        }
                        if (a['Performer Nickname'] < b['Performer Nickname']) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    }).map((dataList, index) => (
                    <tr key={ index }>
                        <td> {dataList.modelName} </td>
                        <td> {dataList.totalProfits} </td>
                        <td> {dataList.totalDuration} </td>
                    </tr>
                    ))
                    
                }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state.models 
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addModel: () => dispatch(addModel()),
      updateModel: () => dispatch(updateModel()),
      deleteModel: () => dispatch(deleteModel())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DisplayData);
