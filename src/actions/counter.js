import Action from './';

const increment = data => {
    console.log(data);

    return {
        type: Action.INCREMENT,
        text: data
    }
}

const decrement = data => {
    return {
        type: Action.INCREMENT,
        text: data
    }
}

export default ({
    increment,
    decrement
})