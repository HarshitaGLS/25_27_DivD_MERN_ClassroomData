import React, { useContext } from 'react'
import { ThemeContext } from '../Theme'

const ThemeBtn = () => {
    const {themeMode,darkTheme,lightTheme} = useContext(ThemeContext)
    const onChangeBtn =(e)=>{
        const status = e.target.checked
        if(status) darkTheme()
        else lightTheme()
    }
  return (
    <div className='form-check form-switch'>
      <input type="checkbox" className='form-check-input'
      checked={themeMode=="dark"}
      onChange={onChangeBtn}/>
    </div>
  )
}

export default ThemeBtn
