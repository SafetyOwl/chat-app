const uuid = require('uuid')

const createUser = ({name=""} = {})=>({
    id:uuid(),
    name
})

const createMessage = ({message="", sender} = {})=>({
    id:uuid(),
    time:getTime(new Date(Date.now())),
    message,
    sender
})

const createChat = ({messages=[], name="Community", users:[]} = {})=>({
    id:uuid(),
    name,
    messages,
    users,
    typingUsers:[]
})

const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes().slice(-2))}`
}