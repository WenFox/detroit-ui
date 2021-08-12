
let dialogIds = {
    DELETE_CHARACTER:0,
};

export const initDialogs = (data) => {
    dialogIds = data;
}

export const dialogs = (dialog, data) => {
    switch (dialog)
    {
        case dialogIds.DELETE_CHARACTER: {
            return {
                dialogId: dialog,
                title: 'Удалить персонажа',
                text: <p>Вы действительно хотите удалить персонажа <span style={{color: "red"}}>{data.Name}</span>?<br/>Все имущество данного персонажа будет утеряно!</p>,
                button1: 'Удалить',
                button2: 'Отмена',
                data: data,
            };
        }
        default: {
            return {};
        }
    }
}

