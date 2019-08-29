import { ADD_NEW_TASK, DELETE_TASK, UPDATE_TASK} from './actionType';

export const addNewTask = (inputTaskName) => {
    
    console.log("fyuyufyufyuyufufubuybfyubyuf");
    return{
        type: ADD_NEW_TASK,
        data: inputTaskName,
}
}
export const deleteTask = (index) => {
    return{
        type:DELETE_TASK,
        index
    }
}
export const updateTask = (notetext,index) =>{
    return{
        type: UPDATE_TASK,
        id:index,
        text:notetext
    }

}