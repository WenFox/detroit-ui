import React from "react";

import styles from "./Parent.module.scss";
import Item from "./Item";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';




const Parent = () => {

    const fathers = [
        {name: 'Бенджамин', key: 0},
        {name: 'Даниэль', key: 1},
        {name: 'Джошуа', key: 2},
        {name: 'Ной', key: 3},
        {name: 'Эндрю', key: 4},
        {name: 'Джоан', key: 5},
        {name: 'Алекс', key: 6},
        {name: 'Исаак', key: 7},
        {name: 'Эван', key: 8},
        {name: 'Итан', key: 9},
        {name: 'Винсент', key: 10},
        {name: 'Ангел', key: 11},
        {name: 'Диего', key: 12},
        {name: 'Адриан', key: 13},
        {name: 'Габриэль', key: 14},
        {name: 'Майкл', key: 15},
        {name: 'Сантьяго', key: 16},
        {name: 'Кевин', key: 17},
        {name: 'Луи', key: 18},
        {name: 'Самуэль', key: 19},
        {name: 'Энтони', key: 20},
        {name: 'Джон', key: 21},
        {name: 'Нико', key: 22},
        {name: 'Клод', key: 23}
    ];
    const mothers = [
        {name: 'Ханна', key: 0},
        {name: 'Одри', key: 1},
        {name: 'Жасмин', key: 2},
        {name: 'Жизель', key: 3},
        {name: 'Амелия', key: 4},
        {name: 'Изабелла', key: 5},
        {name: 'Зои', key: 6},
        {name: 'Эва"', key: 7},
        {name: 'Камилла', key: 8},
        {name: 'Виолетта', key: 9},
        {name: 'София', key: 10},
        {name: 'Эвелин', key: 11},
        {name: 'Николь', key: 12},
        {name: 'Эшли', key: 13},
        {name: 'Грейс', key: 14},
        {name: 'Брианна', key: 15},
        {name: 'Натали', key: 16},
        {name: 'Оливия', key: 17},
        {name: 'Элизабет', key: 18},
        {name: 'Шарлотта', key: 19},
        {name: 'Эмма', key: 20},
        {name: 'Мисти', key: 21}
    ]

    const [page, setPage] = React.useState(0);
    const [father, setFather] = React.useState(0);
    const [mother, setMother] = React.useState(0);

    return (
        <div className={styles.parent}>
            <div className={styles.editor}>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div className={page === 0 ? styles.active : ''}>
                            <button className={page === 0 ? styles.active : ''} onClick={() => setPage(0)}>Отец</button>
                        </div>
                        <div className={`${page === 1 ? styles.active : ''} ${styles.mother}`}>
                            <button className={page === 1 ? styles.active : ''} onClick={() => setPage(1)}>Мать</button>
                        </div>

                    </div>
                    <div className={styles.content}>
                        {
                            page === 0 ? (fathers.map(item => <div className={styles.item} key={item.key} onClick={() => setFather(item.key)}><Item
                                text={item.name}
                                img={require(`../../assets/img/CharacterEditor/parents/male_${item.key}.png`)}
                                active={father === item.key}
                            />
                            </div>)) : (mothers.map(item => <div className={styles.item} key={item.key} onClick={() => setMother(item.key)}><Item
                                text={item.name}
                                img={require(`../../assets/img/CharacterEditor/parents/female_${item.key}.png`)}
                                active={mother === item.key}/>
                            </div>))
                        }
                    </div>
                    <div className={styles.footer}>
                        <div>
                            <button>Сброс</button>
                        </div>
                        <div>
                            <button>Случайно</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.setting}>
                <div className={styles.preview}>
                    <div className={styles.img}>
                        <img src={require(`../../assets/img/CharacterEditor/parents/female_${mothers[mother].key}.png`).default} alt='mother'/>
                    </div>
                    <div className={styles.img}>
                        <img src={require(`../../assets/img/CharacterEditor/parents/male_${fathers[father].key}.png`).default} alt='feather'/>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.names}>
                        <div>
                            {mothers[mother].name}
                        </div>
                        <div>
                            {fathers[father].name}
                        </div>
                    </div>
                    <div className={styles.params}>
                        <div>
                            <p>Схожесть</p>
                            <Slider min={0} max={1} step={0.1} railStyle={{backgroundColor: "white", height: '3px'}} trackStyle={{backgroundColor: "white", height: '3px'}} handleStyle={{backgroundColor: "#00c8ff", borderColor:"white"}}/>
                        </div>
                        <div>
                            <p>Цвет кожи</p>
                            <Slider min={0} max={45} step={1} railStyle={{backgroundColor: "white", height: '3px'}} trackStyle={{backgroundColor: "white", height: '3px'}} handleStyle={{backgroundColor: "#00c8ff", borderColor:"white"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parent;