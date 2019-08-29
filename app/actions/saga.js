import {delay,takeEvery,takeLatest,put} from 'redux-saga/effects';

function* addnotesasync({data}){
    yield delay(4000);
    
    yield put({type:"ADD_NEW_TASK_ASYNC",data})
}
function* updatetaskasync({id,text}){
    console.log("idsss",id)
    console.log("rt",text)
    yield delay(4000);
    yield put({type:"UPDATE_ASYNC",id,text})
}

export function*  watchtakenote(){
    // yield delay(4000);
    
    // const action=yield takeEvery("ADD_NEW_TASK",)
    yield takeEvery("ADD_NEW_TASK",addnotesasync)

}

function*  deletenoteasync({index}){
    yield delay(2000);
    yield put({type:"DELETE_NOTE_ASYNC",index})
}
export function* watchtakennote2(){
    yield takeLatest("DELETE_TASK",deletenoteasync)
}


export function* watchtakennote3(){
    yield takeLatest("UPDATE_TASK",updatetaskasync)
}