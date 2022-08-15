import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
//interfaces
import { IAppContext } from '../interfaces/interfaces';



export const useAppContext = (): IAppContext | null => {
    return useContext(AppContext);
}

