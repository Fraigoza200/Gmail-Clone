import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './SendMail.css'
import {useForm} from 'react-hook-form'
import { closeSendMessage } from '../features/mailSlice'
import { useDispatch } from 'react-redux'

function SendMail() {
    const dispatch = useDispatch()

    const {register, handleSubmit, watch, errors} = useForm()

    const onSubmit = formData => {
        console.log(formData)
    }

    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close onClick={() => dispatch(closeSendMessage())} classname='sendMail__close'/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder='To' type="email" ref={register({ required: true})}/>
                {errors.to && <p className="sendMail__error"> To is Required </p>}
                <input name='subject' placeholder='Subject' type="text" ref={register({ required: true})}/>
                {errors.subject && <p className="sendMail__error"> Subject is Required </p>}
                <input name='message' className='sendMail__message' placeholder='Message...' type="text"
                ref={register({ required: true})}/>
                 {errors.message && <p className="sendMail__error"> Message is Required </p>}

                <div className="sendMail__options">
                    <Button className='sendMail__send' type='submit'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
