import React from 'react';
import {uuid} from '../../../../utils'
import './AddTask.css';
import { Input } from '../../../../components/Form/Input';
import { TextArea } from '../../../../components/Form/TextArea';
import { Text } from '../../../../components/Text/Text';
import { Button } from '../../../../components/Button/Button';

export const AddTask = ({onCancel, onAddTask}) => {
    const [data, setData] = React.useState({name: '', description: ''})
    const handleOnAccept = () => {
        console.log(`handleOnAccept`, data)
        onAddTask({
            ...data,
            id: uuid(),
            completed: false,
            steps: []
        });
        setData({name: '', description: ''})
    }
    return (
        <div className='add-task-container'>
            <Text type={'sub-title'} text={'Nueva Tarea'}/>
            <Input
                placeholder={'Nueva Tarea'}
                value={data.name}
                onChange={(value) => setData({...data, name: value})}
            />
            <TextArea
                placeholder={'descripción nueva tarea'}
                value={data.description}
                onChange={(value) => setData({...data, description: value})}
            />
            <div className='add-task-button-container'>
                <Button
                    value="Cancelar"
                    danger
                    onClick={onCancel}
                />
                <Button
                    value="Aceptar"
                    onClick={handleOnAccept}
                />
            </div>
        </div>
    )
}