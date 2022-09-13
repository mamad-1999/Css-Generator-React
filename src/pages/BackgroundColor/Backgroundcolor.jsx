import React, { useContext, useState } from 'react'
import './../generalStyle.css'
import copyed from '../../func'
import { motion } from 'framer-motion'
import { MainContext } from '../../components/Context/MainContextProvider'
import { CirclePicker, SliderPicker } from 'react-color';

export default function Backgroundcolor() {
    const [bgColor, setBgColor] = useState('#000')
    const { copyClickText, btnCopyTextChange, mainVariant } = useContext(MainContext)

    const handleChange = (e) => {
        setBgColor(e.target.value)
    }

    const bgColorCopyHandler = async () => {
        let text = `background-color: ${bgColor}`
        await copyed(text)
        btnCopyTextChange()
    }

    const handleChangeComplete = (color, event) => {
        setBgColor(color.hex);
    };

    return (
        <motion.div
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='style_Container'>
            <span className='titr'>Background-color</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div style={{ backgroundColor: bgColor }} className='preview_box'></div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>background-color</span>
                            {': '}
                            <span className='code_three'>{bgColor}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={bgColorCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>color</label>
                        <input onChange={(e) => handleChange(e)} type="color" />
                        <span>{bgColor}</span>
                    </div>
                    <div className="input_box">
                        <CirclePicker color={bgColor} onChangeComplete={(e) => handleChangeComplete(e)} />
                    </div>
                    <div className="input_box">
                        <SliderPicker color={bgColor} onChangeComplete={(e) => handleChangeComplete(e)} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}