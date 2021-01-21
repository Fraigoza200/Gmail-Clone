import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportant, StarBorder } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectMail } from '../features/mailSlice'
import './EmailRow.css'

function EmailRow({title, subject, description, time, id}) {
    const dispatch = useDispatch()
    const history = useHistory()

    const openMail = () => {
        dispatch(selectMail({
            title, subject, description, time, id
        }))
        history.push('/mail')
    }

    return (
        <div onClick={openMail} className='emailRow'>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorder />
                </IconButton>
                <IconButton>
                    <LabelImportant />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>{subject} {" - "}
                <span className="emailRow__description">{description}</span></h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>


        </div>
    )
}

export default EmailRow 