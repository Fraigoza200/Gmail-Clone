import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import React from 'react'
import './SendMail.css'

function SendMail() {
    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close classname='sendMail__close'/>
            </div>

            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <div className="sendMail__options">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
