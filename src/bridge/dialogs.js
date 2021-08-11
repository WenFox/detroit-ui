
let dialogIds = {

};

export const initDialogs = (data) => {
    dialogIds = data;
}

export const dialogs = (dialog, ...props) => {
    switch (dialog)
    {
        case dialogIds.DELETE_CHARACTER: {
            return {
                dialogId: dialog,
                title: 'Удалить персонажа',
                text: <p>Вы действительно хотите удалить персонажа <span style={{color: "red"}}>{props[0]}</span>?<br/>Все имущество данного персонажа будет утеряно!</p>,
                button1: 'Удалить',
                button2: 'Отмена',
            };
        }
        default: {
            return {};
        }
    }
}

