const createElement = (tagName, props)=> {
    const element = document.createElement(tagName);
    const {children, ...rest}  = props;
    if(Array.isArray(children)) {
        element.append(...children)
    } else if( children != null) {
        element.append(children)
    }
    Object.entries(rest).forEach((entry)=>{
        element.setAttribute(...entry)
    })
    return element
};
const createMessage = (message, dateTime, isClient)=> {
    const text = createElement('div', {
        children: message,
        class: 'message__text'
    });
    const time = createElement('div', {
        children: dateTime.toLocaleTimeString([], {timeStyle: 'short'}),
        class: 'message__time'
    });
    const wrapper = createElement('div', {
        children: [time, text],
        class: `message ${isClient ? 'message_client': ''}`
    });
    return wrapper
};

const robotMessages = ['Добрый день, до свидания!', 'Кто тут?', 'Где ваша совесть?', 'Вы кто такие? Я вас не звал']
const chantWidget = document.getElementsByClassName('chat-widget')[0];
const chatMessages  = document.getElementById('chat-widget__messages')
const openingButton = document.getElementsByClassName('chat-widget__side')[0];
let timer
openingButton.addEventListener('click', ()=> {
    chantWidget.classList.add('chat-widget_active');
    timer = setTimeout(()=>{
        const robotMessageText = robotMessages[1];
        const robotMessage = createMessage(robotMessageText, new Date());
        chatMessages.append(robotMessage)
    }, 30000)
});
const input = document.getElementById('chat-widget__input');
input.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter') {
        clearTimeout(timer)
        const clientMessage = createMessage(event.currentTarget.value, new Date(), true);
        chatMessages.append(clientMessage);
        clientMessage.scrollIntoView({behavior: "smooth", alignToTop: false})
        setTimeout(() => {
            const index = Math.floor(Math.random() * robotMessages.length);
            const robotMessageText = robotMessages[index];
            const robotMessage = createMessage(robotMessageText, new Date());
            chatMessages.append(robotMessage)
            robotMessage.scrollIntoView({behavior: "smooth", alignToTop: false})
        }, 1000)
        event.currentTarget.value = '';
    }
})